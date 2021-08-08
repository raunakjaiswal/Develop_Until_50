import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';

const Card = props => {

  const { photos, name, bio } = props.user;

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: photos[0],
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
