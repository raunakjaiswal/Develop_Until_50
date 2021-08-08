import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AddphotosScreen from './AddphotosScreen'


const HomeScreen = () => {
    const [userregister, setuserregister] = useState(false);

    useEffect(async () => {
        console.log(auth().currentUser.uid)
        firestore().collection('users').doc(`${auth().currentUser.uid}`).get().then(documentSnapshot => {
            // console.log('User exists: ', documentSnapshot.exists);

            if (documentSnapshot.exists) {
                setuserregister(true)
                // console.log('User data: ', documentSnapshot.data());
            }
            else {
                // ref.set({
                //     photos: ['mnknjknkj', 'knkjnkjj']
                // })
                setuserregister(false);
            }
        })

        // }, [])
    }, [])

    if (userregister) {
        return (
            <SafeAreaView >
                <View><Text>njbhjhj</Text></View>
                <View>
                    <Pressable onPress={() => auth().signOut()}>
                        <Text>Signout</Text>
                    </Pressable>
                </View>

            </SafeAreaView>

        )
    }
    else {
        return (
            <AddphotosScreen />
        )
    }
}

export default HomeScreen;