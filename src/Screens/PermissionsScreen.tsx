import React, {useContext, useEffect, useState} from 'react';
//Native
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//Icons
import Icon from 'react-native-vector-icons/Ionicons';
//Components
import CircleTrafficLight from '../components/CircleTrafficLight';
//Context
import {PermissionsContext} from '../Context/PermissionsContext';
//Models
import {colorsTrafficI} from '../models/colorsTraffic';

const PermissionsScreen = () => {
  //States
  const [activeLight, setActiveLight] = useState<any>({});
  // CONTEXT
  const {permissions, askLocationPermissions} = useContext(PermissionsContext);
  // ICONS
  const MapIcons = [
    <Icon key={2} name="navigate-circle-sharp" style={styles.iconMap} />,
    <Icon key={3} name="map-sharp" style={styles.iconMap} />,
    <Icon key={4} name="locate-sharp" style={styles.iconMap} />,
  ];

  useEffect(() => {
    switch (permissions.locationStatus) {
      case 'unavailable':
        setActiveLight(2);
        break;
      case 'denied':
        setActiveLight(1);
        break;
      case 'granted':
        setActiveLight(3);
        break;
      default:
        break;
    }
  }, [permissions]);

  const colorsTrafficShow: colorsTrafficI[] = [
    {id: 3, color: '#00f900'},
    {id: 1, color: '#ff2600'},
    {id: 2, color: '#ff9300'},
  ];
  // RENDER:
  return (
    <View style={styles.containerPermissionsScreen}>
      {/* ICON MAP */}
      <View style={styles.containerIconMap}>{MapIcons}</View>
      {/* BUTTON ACCESS LOCATION */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnPermission}
        onPress={askLocationPermissions}>
        <Text style={styles.txtBtnPermission}>Let me get your location</Text>
      </TouchableOpacity>
      <View style={styles.containerTraffricLight}>
        {colorsTrafficShow.map((colors: colorsTrafficI) => (
          <CircleTrafficLight
            key={colors.id}
            id={colors.id}
            color={colors.color}
            active={activeLight}
          />
        ))}
      </View>
    </View>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  containerPermissionsScreen: {
    flex: 1,
    backgroundColor: 'ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIconMap: {
    width: '55%',
    flexDirection: 'row',
    backgroundColor: '#5cc9f5',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  iconMap: {
    color: 'white',
    fontSize: 25,
  },
  btnPermission: {
    width: '75%',
    backgroundColor: 'white',
    minHeight: 50,
    borderRadius: 16,
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtBtnPermission: {
    color: '#5cc9f5',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '500',
  },
  containerTraffricLight: {
    width: '50%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
