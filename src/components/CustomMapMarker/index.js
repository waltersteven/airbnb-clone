import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './styles';

const CustomMapMarker = ({coordinate, price, onPress, isSelected}) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={isSelected ? styles.darkMarker : styles.whiteMarker}>
        <Text style={isSelected ? styles.whiteText : styles.darkText}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMapMarker;
