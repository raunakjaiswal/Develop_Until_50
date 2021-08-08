import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Card from '../../component/Card';
import users from '../../data/users';
import AnimatedStack from '../../component/AnimatedStack';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { showMessage, hideMessage } from "react-native-flash-message";
const DashboardScreen = ({ navigation, userdata }) => {
  // console.log(userdata)
  const onSwipeLeft = user => {

    console.warn('you have disliked this', user.id);
    // showMessage({
    //   message: "disliked",
    //   type: "info",
    //   icon: { icon: 'danger', position: 'left' },
    //   color: "#606060", // text color
    //   style: { borderRadius: 10, height: 5, backgroundColor: '#69f0be' },
    //   titleStyle: { fontSize: 20 }
    // });

  };

  const onSwipeRight = async user => {


    console.warn('you have liked this id:', user.id);
    var likes = [];
    const ref = await firestore().collection('users').doc(`${user.id}`).get().then((snap) => {
      likes.push(snap.data().likes)

    })
    likes.push({
      id: auth().currentUser.uid
    })
    firestore().collection('users').doc(`${user.id}`).update({
      likes: likes
    })




  };

  return (
    <View style={styles.container}>
      <AnimatedStack
        data={userdata}
        renderItem={({ item }) => <Card user={item.data()} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

export default DashboardScreen;
