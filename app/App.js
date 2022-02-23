import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useSelector} from 'react-redux';
import UserCards from './components/UserCards';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from './utils';
import Icon from 'react-native-vector-icons/EvilIcons';

const getUsers = () => state => state.users.list;

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

/*
 * 0 - Sort ascending,
 * 1 - Sort descending,
 * 2 - reset Sort
 */
const SORT_TYPE = {
  ASC: 0,
  DESC: 1,
  RESET: 2,
};

const App: () => Node = () => {
  const STORED_USERS = useSelector(getUsers());

  const isDarkMode = useColorScheme() === 'dark';

  const [sortMethod, setSortMethod] = useState(SORT_TYPE.ASC);
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
    setSortMethod(SORT_TYPE.ASC);
    setUnsortedUsers([]);
  }, [searchInput]);

  const sortUsers = () => {
    if (users.length !== unsortedUsers.length) {
      setUnsortedUsers([...users]);
    }
    switch (sortMethod) {
      case SORT_TYPE.ASC: {
        setUnsortedUsers([...users]);
        setSortMethod(prevState => prevState + 1);
        return setUsers(prevState =>
          prevState.sort((a, b) => (a.age >= b.age ? 1 : -1)),
        );
      }
      case SORT_TYPE.DESC: {
        setSortMethod(prevState => prevState + 1);
        return setUsers(prevState =>
          prevState.sort((a, b) => (a.age <= b.age ? 1 : -1)),
        );
      }
      default:
        setUsers([...unsortedUsers]);
        return setSortMethod(SORT_TYPE.ASC);
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
            : sortMethod === SORT_TYPE.ASC
            ? 'arrow-up'
            : 'arrow-down'
        }
        size={25}
        color={
          sortMethod > 1
            ? 'red'
            : sortMethod === SORT_TYPE.ASC
            ? 'green'
            : 'orange'
        }
        onPress={sortUsers}
        backgroundColor={'#FFF'}>
        Sort
      </Icon.Button>
    </View>
  );

  const handleRefresh = () => {
    // setIsRefreshing(true);
  };
  const renderItem = ({item}) => <UserCards key={item.id} item={item} />;
  const keyExtractor = ({id}) => String(id);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {renderHeader()}
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
    lineHeight: Platform.OS === 'ios' ? 20 : 36,
    padding: 0,
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
