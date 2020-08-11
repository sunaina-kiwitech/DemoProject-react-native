import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from './component/LoginPage';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
       <Loginpage/>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
