import React from 'react';
//Handler Navigation
import 'react-native-gesture-handler';
import {PermissionsProvider} from './src/Context/PermissionsContext';
import StackNavigator from './src/Navigation/StackNavigator';

const AppState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};
const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

export default App;
