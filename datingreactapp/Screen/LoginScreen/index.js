import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import FlashMessage from "react-native-flash-message";
GoogleSignin.configure({
  webClientId:
    '108361071934-4eprk9fk0n6ohbrapektn1hh9tonnm9h.apps.googleusercontent.com',
});

const onGoogleButtonPress = async () => {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appText}>DateApp</Text>
      <View style={styles.signInOptionsContainer}>
        <TouchableOpacity
          onPress={() =>
            onGoogleButtonPress()
              .then(() => console.log('Signed in with Google!'))
              .catch(e => console.warn(e))
          }
          style={styles.signInButton}>
          <Image
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/300/300221.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.signInText}>Log in with google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Image
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/733/733547.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.signInText}>Log in with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Image
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/2462/2462844.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.signInText}>Log in with phone number</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default LoginScreen;
