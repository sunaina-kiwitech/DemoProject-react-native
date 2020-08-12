import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function Loginpage(props) {
    const [userName, checkUserName] = useState('');
    const [password, checkPassword] = useState('');

    const onChangeUserName = (text) => {
        checkUserName(text)
    }

    const onChangePassword = (text) => {
        checkPassword(text)
    }

    const onsubmit = (userName, password) => {
        if (userName === 'sunaina.passi@kiwitech.com' && password === 'Kiwi@123') {
        props.navigation.navigate('DashBoard')
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
                <Text>
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
                <Text>
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
                    onPress={() => onsubmit(userName, password)}
                    disabled={userName === '' || password === ''}
                />
            </View>
            <Text style={{
                textDecorationLine: 'underline',
                textAlign: 'center',
            }}>
                Forgot Password
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor:'white',
    
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
