import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import CircularImage from '../CircularImage';
import styles from './styles';

const ChatItem = props => {
  const { image, name, bio } = props.user;

  return (
    <View style={styles.container}>
      <CircularImage image={image} width={50} height={50} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text numberOfLines={1} style={styles.chat}>
          {bio}
        </Text>
      </View>
    </View>
  );
};

export default ChatItem;
