import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

import { Login } from '../../actions';

export default function Loginpage({ navigation }) {

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '494786416914-67ch2olbm55u8u9ucsvsqt8corl2tbub.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        });
    }, [])

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            navigation.navigate('DashBoard')
        } catch (error) {
            console.log("error", error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    const [userName, checkUserName] = useState('');
    const [password, checkPassword] = useState('');
    const dispatch = useDispatch();

    const onChangeUserName = (text) => {
        AsyncStorage.setItem('email', text);
        checkUserName(text)
    }

    const onChangePassword = (text) => {
        checkPassword(text)
    }

    const onsubmit = (userName, password) => {
        if (userName === 'sunaina.passi@kiwitech.com' && password === 'Kiwi@123') {
            dispatch(Login(userName))
            navigation.navigate('DashBoard')
            console.log(" AsyncStorage.getItem('name')", AsyncStorage.getItem('email'));
        }
        else {
            alert('Invalid credentials')
        }
    }
    return (
        <View style={styles.container}>
            <Image source={require('./../../../assests/images/music.png')}
                style={{ width: 360, height: 200 }}
            />
            <Text style={{
                color: 'steelblue',
                fontSize: 17,
                fontWeight: 'bold',
            }}>
                Login before you enjoy the world's music catlog
            </Text>
            <View style={styles.box}>
                <Text style={{
                    fontWeight: 'bold',
                }}>
                    Email ID/Mobile Number
                </Text>
                <TextInput
                    isDarkMode
                    autoCapitalize="words"
                    value={userName}
                    onChangeText={text => onChangeUserName(text)}
                />
            </View>
            <View style={styles.box}>
                <Text style={{
                    fontWeight: 'bold',
                }}>
                    Enter your password
                </Text>
                <TextInput
                    isDarkMode
                    value={password}
                    onChangeText={text => onChangePassword(text)}
                    secureTextEntry={true} />
            </View>
            <View style={styles.button}>
                <Button
                    title="Login"
                    color='steelblue'
                    onPress={() => onsubmit(userName.toLowerCase(), password)}
                    disabled={userName === '' || password === ''}
                />
            </View>
            <View>
                <Text style={styles.text}> OR </Text>
                <Text style={styles.text}>
                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signIn} />
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        padding: 10,
    },
    box: {
        borderBottomWidth: 1,
        borderColor: 'steelblue'
    },
    button: {
        textAlign: 'center',
        backgroundColor: 'steelblue',
        marginVertical: 8,
        borderRadius: 30,
    },
    text: {
        textAlign: 'center'
    }
});
