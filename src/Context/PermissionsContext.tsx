import React, {createContext, useState} from 'react';
//Native
import {Platform} from 'react-native';
//Permissions
import {check, PERMISSIONS, PermissionStatus} from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}
export const permissionInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

export type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermissions: () => void;
  checkLocationPermissions: () => void;
};
export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({children}: any) => {
  // STATES
  const [permissions, setPermissions] = useState(permissionInitState);

  const askLocationPermissions = async () => {
    let permissStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    setPermissions({...permissions, locationStatus: permissStatus});
  };
  const checkLocationPermissions = () => {};
  // RENDER:
  return (
    <PermissionsContext.Provider
      value={{permissions, askLocationPermissions, checkLocationPermissions}}>
      {children}
    </PermissionsContext.Provider>
  );
};
