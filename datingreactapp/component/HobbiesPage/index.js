import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import ChoiceButton from '../../component/ChoiceButton';
import hobbies from '../../data/hobbies'
const HobbiesPage = ({ hoobielist, sethoobielist }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hobbies</Text>
        <Text style={styles.description}>
          Let everyone know what you are passionate about, by adding to your
          profile.
        </Text>
      </View>
      <FlatList
        style={{ marginVertical: 20 }}
        data={hobbies}
        renderItem={({ item }) => <ChoiceButton hobby={item.hobby} hoobielist={hoobielist} sethoobielist={sethoobielist} />}
        numColumns="3"
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HobbiesPage;
