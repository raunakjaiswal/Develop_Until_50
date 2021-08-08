import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import LoginScreen from '../LoginScreen';
import styles from './styles';
// import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const HomeScreen = ({ navigation }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [userfirsttime, setfirsttime] = useState(false)



  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount


  }, []);

  if (initializing) return null;

  if (user) {
    firestore().collection('users').doc(`${auth().currentUser.uid}`).get().then(documentSnapshot => {
      if (documentSnapshot.exists) {
        console.log('exist')
        // navigation.navigate('Main')
        navigation.navigate('Bottomtab')
        // return true;
        // console.log('User data: ', documentSnapshot.data());
      }
      else {

        console.log('not exist')
        navigation.navigate('UserInfo')
      }

    })
  }

  return <LoginScreen />;
};

export default HomeScreen;
