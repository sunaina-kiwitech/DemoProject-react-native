import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';

import Main from './src/Main';
import DashBoard from './src/components/dashboard/DashBoard';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Main/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex', flex: 1
  },
});

export default App;
