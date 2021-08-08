import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import CircularImage from '../../component/CircularImage';
import users from '../../data/users';
import ChatItem from '../../component/ChatItem';

const MatchesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <FlatList
          style={{ width: '100%', height: '100%' }}
          data={users}
          renderItem={({ item }) => <ChatItem user={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View>
              <Text style={styles.title}>New Matches</Text>
              <CircularImage
                image={
                  'https://firebasestorage.googleapis.com/v0/b/datingreactapp.appspot.com/o/U7m7RWYc4KbmAP4spqAjhjB1Aio2%2Frn_image_picker_lib_temp_048967c9-749a-48df-8a3e-b52ffbe35299.jpg?alt=media&token=c95a4504-11db-4da7-a567-44ae5d9dd6bd'
                }
                width={60}
                height={60}
              />
              <Text style={styles.title}>Messages</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default MatchesScreen;
