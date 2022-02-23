import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import UserCard from './components/userCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from './utils';
import Icon from 'react-native-vector-icons/EvilIcons';

const getUsers = () => state => state.users.list;

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

const App: () => Node = () => {
  const STORED_USERS = useSelector(getUsers());
  const dispatch = useDispatch();

  const isDarkMode = useColorScheme() === 'dark';
  /*
   * 0 - Sort ascending,
   * 1 - Sort descending,
   * 2 - reset Sort
   */
  const [sortMethod, setSortMethod] = useState(0);
  const [users, setUsers] = useState([]);
  const [unsortedUsers, setUnsortedUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    searchInput
      ? setUsers(
          [...STORED_USERS].filter(
            user =>
              user.name.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1,
          ),
        )
      : setUsers([...STORED_USERS]);
  }, [STORED_USERS, searchInput]);

  useEffect(() => {
    setSortMethod(0);
    setUnsortedUsers([]);
  }, [searchInput]);

  const sortUsers = () => {
    if (users.length !== unsortedUsers.length) {
      setUnsortedUsers([...users]);
    }
    switch (sortMethod) {
      case 0: {
        setUnsortedUsers([...users]);
        setSortMethod(prevState => prevState + 1);
        return setUsers(prevState =>
          prevState.sort((a, b) => (a.age >= b.age ? 1 : -1)),
        );
      }
      case 1: {
        setSortMethod(prevState => prevState + 1);
        return setUsers(prevState =>
          prevState.sort((a, b) => (a.age <= b.age ? 1 : -1)),
        );
      }
      default:
        setUsers([...unsortedUsers]);
        return setSortMethod(0);
    }
  };

  const renderItemSeparator = () => <View />;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchInput}
        value={searchInput}
        placeholder={'Search...'}
      />
      <Icon.Button
        name={
          sortMethod > 1
            ? 'close-o'
            : sortMethod === 0
            ? 'arrow-up'
            : 'arrow-down'
        }
        size={25}
        color={sortMethod > 1 ? 'red' : sortMethod === 0 ? 'green' : 'orange'}
        onPress={sortUsers}
        backgroundColor={'#FFF'}>
        Sort
      </Icon.Button>
    </View>
  );

  const handleRefresh = () => {
    // setIsRefreshing(true);
  };

  const UsersList = React.memo(() => {
    const renderItem = ({item}) => UserCard(item, dispatch);
    const keyExtractor = ({id}) => String(id);

    return (
      <FlatList
        data={users}
        ItemSeparatorComponent={renderItemSeparator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>List is empty</Text>
          </View>
        }
        // onEndReached={loadMoreResults}
        onEndReachedThreshold={0.8}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        removeClippedSubviews={false}
        renderItem={renderItem}
        viewabilityConfig={VIEWABILITY_CONFIG}
      />
    );
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {renderHeader()}
      <UsersList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    height: DEVICE_HEIGHT * 0.9,
    alignItems: 'center',
  },
  emptyListText: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '400',
  },
  headerContainer: {
    height: DEVICE_HEIGHT * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  input: {
    backgroundColor: '#FFF',
    width: DEVICE_WIDTH * 0.6,
    height: 36,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'lightgray',
    fontSize: 18,
    fontWeight: '400',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
