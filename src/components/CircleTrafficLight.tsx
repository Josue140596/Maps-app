import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colorsTrafficI} from '../models/colorsTraffic';
interface CircleTrafficLightProps extends colorsTrafficI {
  active: any;
}

const CircleTrafficLight = ({color, id, active}: CircleTrafficLightProps) => {
  // RENDER:
  return (
    <View
      key={id}
      style={[
        styles.containerCircleTrafficLight,
        active && id === active && styles.containerCircleTrafficLightActive,
        active && id === active && {backgroundColor: color},
      ]}
    />
  );
};

export default CircleTrafficLight;

const styles = StyleSheet.create({
  containerCircleTrafficLight: {
    width: '14%',
    height: '55%',
    borderRadius: 50,
    backgroundColor: '#929292',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerCircleTrafficLightActive: {
    width: '18%',
    height: '70%',
  },
});
