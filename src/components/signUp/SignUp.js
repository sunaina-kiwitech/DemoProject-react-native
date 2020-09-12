import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';
import { Login } from '../../actions';

export default function SignUp({ navigation }) {
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
            console.log(" AsyncStorage.getItem('name')",  AsyncStorage.getItem('email'));
        }
        else {
            alert('Invalid credentials')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{
                color: 'steelblue',
                fontSize: 29,
                fontWeight: 'bold',
            }}>
                Sign Up
            </Text>
            <View style={styles.box}>
                <Text style={{
                    fontWeight: 'bold',
                }}>
                    Enter your name
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
                    Enter your email address
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
                    Enter your mobile number
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
                    Enter your date of birth
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
                    title="Create your account"
                    color='steelblue'
                    onPress={() => onsubmit(userName.toLowerCase(), password)}
                    disabled={userName === '' || password === ''}
                />
            </View>
            <Text style={{
                textAlign: 'center',
                textDecorationLine: 'underline',
                color:'steelblue'
            }} onPress={()=>{
                navigation.navigate('Login')
            }}>
               Already have an account?  Login
            </Text>
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
    }
});
