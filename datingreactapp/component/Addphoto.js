import React, { useState } from 'react'
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';
import ImagePicker from 'react-native-image-picker';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Alert,
    Image
} from 'react-native';
const Addphoto = ({ countimage, setcountimage, photos, setphotos }) => {

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [imageurl, setimageurl] = useState(false)
    const selectImage = () => {
        const options = {
            maxWidth: 2000,
            maxHeight: 2000,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchImageLibrary(options, response => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response.assets[0].uri)
                const source = { uri: response.assets[0].uri };
                console.log(source);
                setImage(source);
            }
        });
    };

    const uploadImage = async () => {
        const { uri } = image;
        console.log(uri)
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const id = auth().currentUser.uid;

        setUploading(true);
        setTransferred(0);

        const nn = storage()
            .ref(`${id}/${filename}`)
        const task = nn
            .putFile(uploadUri);

        // set progress state
        task.on('state_changed', snapshot => {
            // console.log(snapshot.bytesTransferred + "   " + snapshot.totalBytes + " " + Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setTransferred(
                snapshot.bytesTransferred / snapshot.totalBytes
            );
        });
        try {
            await task;
            const url = await nn.getDownloadURL();
            setimageurl(url)
            setcountimage(mm => mm + 1)
            setphotos(oldArray => [...oldArray, url]);


        } catch (e) {
            console.error(e);
        }
        setUploading(false);
        Alert.alert(
            'Photo uploaded!',
            'Your photo has been uploaded to Firebase Cloud Storage!'
        );
        setImage(null);
    };

    return (
        // height: 200, width: 150, borderWidth: 1, borderColor: 'black', margin: 20,
        <View style={{ height: 200, width: 150, borderWidth: 1, borderColor: 'black', margin: 20, }}>
            {imageurl ? (
                // height: 200, width: 150,
                <Image source={{ uri: imageurl }} style={{ height: 200, width: 150, resizeMode: 'cover' }} />
            ) : (


                <View >
                    {image === null ?
                        (
                            <TouchableOpacity onPress={selectImage} >
                                <Text >Add photo</Text>
                            </TouchableOpacity>

                        )
                        :
                        (
                            <View>

                                <Image source={{ uri: image.uri }} style={{ height: 150, width: 150, resizeMode: 'cover' }} />
                                {uploading ?
                                    (
                                        <View style={{ height: 50, alignItems: 'center', paddingTop: 10 }}>
                                            <Progress.Bar progress={transferred} width={150} />
                                        </View>
                                    )
                                    :
                                    (
                                        <TouchableOpacity onPress={uploadImage}>
                                            <View style={{ alignItems: 'center', paddingTop: 10 }}>
                                                <Text>upload this image</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>

                        )
                    }
                </View>
            )}


        </View >

    )
}

export default Addphoto


