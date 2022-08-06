import React from 'react';
//Config Navigation Container
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
//Stack Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import PermissionsScreen from '../Screens/PermissionsScreen';
//Flipper
import {useFlipper} from '@react-navigation/devtools';

//Type Navigation
export type RootStackGeneral = {
  Permissions: undefined;
};

const StackGeneral = createNativeStackNavigator();

const StackNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  //Flipper is to debbuging our app.
  useFlipper(navigationRef);
  // RENDER:
  return (
    <NavigationContainer ref={navigationRef}>
      <StackGeneral.Navigator>
        <StackGeneral.Screen
          options={{headerShown: false}}
          name="Permissions"
          component={PermissionsScreen}
        />
      </StackGeneral.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
