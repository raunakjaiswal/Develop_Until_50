import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

import Addphoto from '../Addphoto'
const Page = ({ title, description, countimage, setcountimage, photos, setphotos }) => {


  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]


  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.imageUploadContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Addphoto countimage={countimage} setcountimage={setcountimage} photos={photos} setphotos={setphotos} />}
          keyExtractor={item => item.id}
          numColumns={2}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 20, }}


        />
      </View>

    </View>
  );
};

export default Page;
