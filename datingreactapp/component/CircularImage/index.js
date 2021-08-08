import React, { useState } from 'react';
import { View, Image } from 'react-native';

const CircularImage = props => {
  const { image, width, height } = props;

  return (
    <Image
      source={{ uri: image }}
      style={{
        width: width,
        height: height,
        borderRadius: width / 2,
      }}
    />
  );
};

export default CircularImage;
