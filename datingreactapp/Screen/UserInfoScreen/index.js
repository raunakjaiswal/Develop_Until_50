import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
// import ViewPager from '@react-native-community/viewpager';
import PagerView from 'react-native-pager-view';
import Page from '../../component/Page';
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import HobbiesPage from '../../component/HobbiesPage';
import BioPage from '../../component/BioPage'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from 'react-native-firebase';


import GetLocation from 'react-native-get-location'
import { GeoCollectionReference, GeoFirestore } from 'geofirestore';
// import BottomTabNavigator from '../../bottomtab';
// const geofirestore = new GeoFirestore(firestore);
const geofirestore = new GeoFirestore(firestore());
const geocollection = geofirestore.collection('users');
const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Male',
  value: 1
}, {
  id: '2',
  label: 'Female',
  value: 'F'
},
{
  id: '3',
  label: 'Preferred not say',
  value: 'N'
},
]

const AgerangeData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: '1 - 18',
  value: 1
}, {
  id: '2',
  label: '18 - 30',
  value: 2
},
{
  id: '3',
  label: '30 - 45',
  value: 3
},
]
const UserInfoScreen = ({ navigation }) => {
  const [countimage, setcountimage] = useState(0)
  const [photos, setphotos] = useState([]);
  const [viewPager, setViewPager] = useState();
  const [currentpage, setcureentpage] = useState(0);

  const [hoobielist, sethoobielist] = useState([]);

  const [bio, setbio] = useState("")
  const [currentLongitude, setCurrentLongitude] = useState();
  const [currentLatitude, setCurrentLatitude] = useState();

  const [radioButtons, setRadioButtons] = useState(radioButtonsData)
  const [AgeButtons, setAgeButtons] = useState(AgerangeData)



  return (
    <View style={{ flex: 1 }} initialPage={0}>
      <PagerView style={{ flex: 1 }}
        ref={viewPager => {
          setViewPager(viewPager)

        }}

        scrollEnabled={false}

      >

        <View key="1">
          <Page
            backgroundColor="#ffc93c"
            title="Add Photos"
            description="Add at least two photos to continue"
            countimage={countimage} setcountimage={setcountimage} photos={photos} setphotos={setphotos}
          />


        </View>

        <View key="2">
          <HobbiesPage hoobielist={hoobielist} sethoobielist={sethoobielist} />
        </View>
        <View key="3">
          <BioPage bio={bio} setbio={setbio} radioButtons={radioButtons} setRadioButtons={setRadioButtons} AgeButtons={AgeButtons} setAgeButtons={setAgeButtons} />
        </View>
      </PagerView>
      <TouchableOpacity onPress={() => {

        if (currentpage === 0) {


          // console.log(radioButtons)
          // const filteredItems = radioButtons.filter(item => item.selected === true)
          // console.log(filteredItems)
          // const query = geocollection.near({
          //   center: new firestore.GeoPoint(37.4219983, -122.084),
          //   radius: 100000
          // })
          // query.get().then((value) => {
          //   // All GeoDocument returned by GeoQuery, like the GeoDocument added above
          //   console.log(value.docs[0].data());
          // });


          if (countimage >= 2) {

            viewPager.setPage(currentpage + 1)
            setcureentpage(prevCount => prevCount + 1);

          }
          else {
            showMessage({
              message: "upload more",
              type: "info",
              icon: { icon: 'danger', position: 'left' },
              color: "#606060", // text color
              style: { borderRadius: 10, height: 5, backgroundColor: '#69f0be' },
              titleStyle: { fontSize: 20 }
            });
          }
        }
        else if (currentpage === 1) {



          GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
          })
            .then(location => {
              setCurrentLatitude(location.latitude)
              setCurrentLongitude(location.longitude)
            })
            .catch(error => {
              const { code, message } = error;
              console.warn(code, message);
            })


          // const limit = 20
          // const query = geocollection.near({ center: new firestore.GeoPoint(currentLatitude, currentLongitude), radius: 1000 });

          // query.limit(limit).onSnapshot(
          //   querySnapshot => {
          //     if (querySnapshot.exists) {
          //       console.log(querySnapshot.data());
          //     }
          //   },
          //   error => {
          //     console.log('Encountered error:', error);
          //     // results(null);
          //   },
          // );

          viewPager.setPage(currentpage + 1)
          setcureentpage(prevCount => prevCount + 1);
        }
        else if (currentpage === 2) {
          // console.log(countimage)

          // console.log(photos)
          // console.log(hoobielist)
          // console.log(bio)
          // console.log(currentLatitude)
          // console.log(currentLongitude)

          // firestore().collection('users').doc(`${auth().currentUser.uid}`).set({
          //   photos,
          //   countimage,
          //   hoobielist,
          //   bio,

          // })
          const filteredgender = radioButtons.filter(item => item.selected === true)
          const filteredage = AgeButtons.filter(item => item.selected === true)
          geocollection.doc(`${auth().currentUser.uid}`).set({
            name: auth().currentUser.displayName,
            gender: filteredgender[0].value,
            agevalue: filteredage[0].value,
            agerange: filteredage[0].label,
            imagecount: countimage,
            photos,
            hoobielist,
            bio: bio,
            latitude: currentLatitude,
            longitude: currentLongitude,
            radius: 100000,
            userid: auth().currentUser.uid,

            // The coordinates field must be a GeoPoint!
            coordinates: new firestore.GeoPoint(currentLatitude, currentLongitude)
          }).then(() => {
            console.log("done")
            // navigation.navigate('Main')
            navigation.navigate('Bottomtab')
          })

        }
      }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
          <Text style={{ color: 'white', fontSize: 25 }} >continue</Text>
        </View>
      </TouchableOpacity>
      <FlashMessage position="top" />
    </View >
  );
};

export default UserInfoScreen;
