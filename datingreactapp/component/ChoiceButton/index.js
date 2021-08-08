import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ChoiceButton = ({ hobby, hoobielist, sethoobielist }) => {
  const [buttonColor, setButtonColor] = useState('#B4B4B4');

  const updateButton = async () => {
    if (buttonColor === '#B4B4B4') {
      setButtonColor('#FE5665');
      sethoobielist(oldArray => [...oldArray, hobby]);
    } else {
      setButtonColor('#B4B4B4');
      const filteredItems = hoobielist.filter(item => item !== hobby)
      sethoobielist(filteredItems)
    }
  };

  return (
    <TouchableOpacity
      style={[styles.hobbyButton, { borderColor: buttonColor }]}
      onPress={updateButton}>
      <Text style={[styles.hobby, { color: buttonColor }]}>{hobby}</Text>
    </TouchableOpacity>
  );
};

export default ChoiceButton;
