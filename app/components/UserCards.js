import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {removeUser} from '../store/actions/users';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useDispatch} from 'react-redux';

const UserCards: () => Node = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View key={item.id} style={styles.userContainer}>
      <View style={styles.userInfoContainer}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <Text style={styles.userName}>{item.name}</Text>
        <Text>{item.age}</Text>
      </View>
      <Icon.Button
        name={'trash'}
        size={25}
        color={'#FFF'}
        width={50}
        onPress={() => dispatch(removeUser(item))}
        backgroundColor={'#cc0000'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: '#FFF',
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    width: 100,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 70,
    height: 60,
    borderRadius: 4,
  },
});

export default React.memo(UserCards);
