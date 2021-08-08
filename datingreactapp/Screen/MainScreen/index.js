import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GeoCollectionReference, GeoFirestore } from 'geofirestore';

import { Bounce } from 'react-native-animated-spinkit'
import DashboardScreen from '../DashboardScreen';
// const query = geocollection.near({
//   center: new firestore.GeoPoint(37.4219983, -122.084),
//   radius: 100000
// })
// query.get().then((value) => {
//   // All GeoDocument returned by GeoQuery, like the GeoDocument added above
//   console.log(value.docs[0].data());
// });
const MainScreen = () => {
    const geofirestore = new GeoFirestore(firestore());
    const geocollection = geofirestore.collection('users');
    const [curruserinfo, setcurruserinfo] = useState({});
    const [userdata, setuserdata] = useState({});
    const [loading, setloading] = useState(true);
    useEffect(async () => {
        var lat = "";
        var long = "";
        var radius = "";
        const unmoy = await geocollection.doc(`${auth().currentUser.uid}`).get().then((snap) => {
            lat = snap.data().latitude;
            long = snap.data().longitude;
            radius = snap.data().radius
            setcurruserinfo(snap.data());

        }).then(() => {

            const query = geocollection.near({
                center: new firestore.GeoPoint(lat, long),
                radius: radius
            })
            query.get().then((value) => {
                // All GeoDocument returned by GeoQuery, like the GeoDocument added above
                setuserdata(value.docs)
                // console.log(value.docs[1].data());
            }).then(() => {
                setloading(false)
            })
        })
        return () =>
            unmoy()
    }, [])

    if (loading === false && userdata !== undefined) {

        return (
            <DashboardScreen userdata={userdata} />

        )
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#f5655b', alignItems: 'center' }}>
            <Bounce size={100} color="#FFF"></Bounce>
        </View>
    )



}
export default MainScreen