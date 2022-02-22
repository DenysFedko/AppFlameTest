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
  Image,
  Button,
  TextInput,
  FlatList,
  RefreshControl,
  Dimensions
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeUser} from './store/actions/users';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const {width, height} = Dimensions.get('window');
const DEVICE_HEIGHT = height;
const DEVICE_WIDTH = width;

const Section = ({children}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        styles.sectionDescription,
        {
          color: isDarkMode ? Colors.light : Colors.dark,
        },
      ]}>
      {children}
    </Text>
  );
};

const getUsers = () => state => state.users.list;

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

const PAGINATION_LIMIT = 10;

const INITIAL_PARAMS = {
  data: {
    active: 1,
  },
  metadata: {
    pagination: {
      page: 1,
      limit: PAGINATION_LIMIT,
    },
  },
  restartPagination: true,
};

const App: () => Node = () => {
  const USERS = useSelector(getUsers());
  // const activeAdsPagination = useSelector(
  //   state => state.users.activeAdsPagination,
  // );
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
          [...USERS].filter(
            user =>
              user.name.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1,
          ),
        )
      : setUsers([...USERS]);
  }, [USERS, searchInput]);

  const sortUsers = () => {
    switch (sortMethod) {
      case 0: {
        setUnsortedUsers([...users]);
        console.log('SORT 0', sortMethod);
        setSortMethod(prevState => prevState + 1);
        return setUsers(prevState =>
          prevState.sort((a, b) => (a.age >= b.age ? 1 : -1)),
        );
      }
      case 1: {
        console.log('SORT 1', sortMethod);
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

  const renderItem = ({item}) => {
    return (
      <View key={item.id} style={styles.userContainer}>
        <Image
          source={{uri: item.avatar}}
          style={{width: 24, height: 24, borderRadius: 20}}
        />
        <Section>{item.name}</Section>
        <Section>{item.age}</Section>

        <Button onPress={() => dispatch(removeUser(item))} title={'Remove'} />
      </View>
    );
  };

  const fetchActiveAds = params => {
    // dispatch(Ducks.fetchActiveAds(params));
  };

  const renderItemSeparator = () => <View />;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchInput}
        value={searchInput}
      />
      {/*<Text>{USERS.length}</Text>*/}
      <Button onPress={sortUsers} title={`Sort ${sortMethod === 0 ? '^': '|'}`}>
      </Button>
    </View>
  );

  const renderFooter = () => {
    return false ? (
      <View>
        <ActivityIndicator />
      </View>
    ) : (
      renderItemSeparator()
    );
  };

  const keyExtractor = ({id}) => String(id);

  // const loadMoreResults = () => {
  //   const {page, pages} = activeAdsPagination;
  //   const nextPage = page + 1;
  //
  //   if (nextPage <= pages) {
  //     const params = {
  //       data: {
  //         active: 1,
  //       },
  //       metadata: {
  //         pagination: {
  //           page: nextPage,
  //           limit: PAGINATION_LIMIT,
  //         },
  //       },
  //       restartPagination: false,
  //     };
  //
  //     // dispatch(Ducks.fetchActiveAds(params));
  //   }
  // };

  const handleRefresh = () => {
    // setIsRefreshing(true);
    // fetchActiveAds(INITIAL_PARAMS);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {renderHeader()}
      <FlatList
        data={users}
        ItemSeparatorComponent={renderItemSeparator}
        keyExtractor={keyExtractor}
        ListFooterComponent={renderFooter}
        // ListHeaderComponent={renderHeader}
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
        // viewabilityConfig={VIEWABILITY_CONFIG}
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
  userContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
  },
  headerContainer: {
    height: DEVICE_HEIGHT * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: DEVICE_WIDTH * 0.7,
    height: 50,
    paddingLeft: 12,
    borderWidth: 1,
    margin: 16,
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
