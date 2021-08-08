import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { set } from 'react-native-reanimated';
import styles from './styles';
import RadioGroup from 'react-native-radio-buttons-group';

// const radioButtonsData = [{
//   id: '1', // acts as primary key, should be unique and non-empty string
//   label: 'Male',
//   value: 'M'
// }, {
//   id: '2',
//   label: 'Female',
//   value: 'F'
// },
// {
//   id: '3',
//   label: 'Preferred not say',
//   value: 'N'
// },
// ]
const BioPage = ({ bio, setbio, radioButtons, setRadioButtons, AgeButtons, setAgeButtons }) => {
  // const [radioButtons, setRadioButtons] = useState(radioButtonsData)

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    // console.log(radioButtons[0].id)
  }
  function onPressAgeButton(radioButtonsArray) {
    setAgeButtons(radioButtonsArray);
    // console.log(radioButtons[0].id)
  }
  return (
    <View style={styles.container}>
      <View style={{ height: 250 }}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Your Bio</Text>
        </View>
        <TextInput
          multiline={true}
          style={styles.hobbyInput}
          onChangeText={(text) => setbio(text)}
          placeholder="Enter something about yourself"
          // numberOfLines={3}

          maxLength={100}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 25, marginBottom: 20 }}>Gender</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout='row'
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 25, marginBottom: 20 }}>Age Range</Text>
        <RadioGroup
          radioButtons={AgeButtons}
          onPress={onPressAgeButton}
          layout='row'
        />
      </View>
    </View>
  );
};

export default BioPage;
