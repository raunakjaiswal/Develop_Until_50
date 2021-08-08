import React, { useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Addphoto from '../component/Addphoto';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Alert,
    Image,
    ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';
import { showMessage, hideMessage } from "react-native-flash-message";
const AddphotosScreen = () => {
    const [countimage, setcountimage] = useState(0)
    const [photos, setphotos] = useState([]);
    // console.log(theArray)

    const saveandnext = () => {
        if (countimage >= 2) {
            firestore().collection('users').doc(`${auth().currentUser.uid}`).set({
                photos
            }).then(() => {
                showMessage({
                    message: "switch too next screen",
                    type: "info",
                });
            })

        }
        else {
            showMessage({
                message: "upload more",
                type: "info",
            });
        }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Addphoto countimage={countimage} setcountimage={setcountimage} photos={photos} setphotos={setphotos} />
                <Addphoto countimage={countimage} setcountimage={setcountimage} photos={photos} setphotos={setphotos} />
                <Addphoto countimage={countimage} setcountimage={setcountimage} photos={photos} setphotos={setphotos} />
                <TouchableOpacity onPress={saveandnext}>
                    <View style={{ margin: 20, }}>
                        <Text>Next</Text>

                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bbded6'
    },
    selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
    },
    progressBarContainer: {
        marginTop: 20
    },
    imageBox: {
        width: 300,
        height: 300
    }
});
export default AddphotosScreen