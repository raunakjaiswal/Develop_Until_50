
// import React, { useState, useEffect } from 'react';

// import auth from '@react-native-firebase/auth';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// // import { GoogleSignin } from '@react-native-community/google-signin';
// import { Pressable, StyleSheet, View, Text, SafeAreaView } from 'react-native';
// import FlashMessage from "react-native-flash-message";
// import HomeScreen from './Screen/HomeScreen.js'

// GoogleSignin.configure({
//   webClientId: '108361071934-4eprk9fk0n6ohbrapektn1hh9tonnm9h.apps.googleusercontent.com',
// });

// async function onGoogleButtonPress() {
//   const { idToken } = await GoogleSignin.signIn();
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//   return auth().signInWithCredential(googleCredential);
// }

// const App = () => {

//   const [authenticated, setAutheticated] = useState(false);
//   useEffect(() => {
//     auth().onAuthStateChanged((user) => {
//       if (user) {
//         setAutheticated(true);
//       }
//       else
//         setAutheticated(false);
//     })
//   }, [])

//   if (authenticated) {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <HomeScreen />
//         <FlashMessage position="bottom" />
//       </SafeAreaView>
//     )
//   }

//   return (
//     <SafeAreaView >
//       <Pressable onPress={onGoogleButtonPress}>
//         <View ><Text>google login</Text></View>
//       </Pressable>
//     </SafeAreaView>)
// };

// const styles = StyleSheet.create({

// });

// export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';
import UserInfoScreen from './Screen/UserInfoScreen';
import MainScreen from './Screen/MainScreen';
import FlashMessage from "react-native-flash-message";
import BottomTabNavigator from './bottomtab';
const jeff = {
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
  name: 'Jeffrey Bezos',
  bio: 'CEO, entrepreneur born in 1964, Jeffrey, Jeffrey Bezos',
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,

        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} />

        {/* <Stack.Screen name="Main" component={MainScreen} /> */}

        <Stack.Screen name="Bottomtab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
