import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Loginpage from './component/LoginPage';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <Loginpage />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
