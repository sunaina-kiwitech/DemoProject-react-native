import React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Loginpage from './src/components/authentication/LoginPage';
import DashBoard from './src/components/dashboard/DashBoard';
import AboutUs from './src/drawer/AboutUs';
import ContactUs from './src/drawer/ContactUs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const LoginApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Loginpage} />
      <Stack.Screen name="DashBoard" component={DrawerApp} />
    </Stack.Navigator>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="DashBoard">
      <Stack.Screen
        name="Most Overplayed Songs"
        component={DashBoard}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#00BCD4', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AboutUs"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#00BCD4', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="About us"
        component={AboutUs}
        options={{
          title: 'About us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ContactUs"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#00BCD4', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Contact us"
        component={ContactUs}
        options={{
          title: 'Contact us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

const Logout = ({ navigation }) => {
  navigation.navigate('Login');
  return null;
};

const DrawerApp = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'steelblue',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
        name="Most Overplayed Songs"
        component={firstScreenStack}
      />
      <Drawer.Screen
        name="About Us"
        options={{ drawerLabel: 'About Us' }}
        component={secondScreenStack}
      />
      <Drawer.Screen
        name="Contact Us"
        options={{ drawerLabel: 'Contact Us' }}
        component={thirdScreenStack}
      />
      <Drawer.Screen
        name="Logout"
        options={{ drawerLabel: 'Logout' }}
        component={Logout}
      />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <LoginApp />
    </NavigationContainer>
  );
};

export default App;
