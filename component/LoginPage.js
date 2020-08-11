import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function Loginpage() {
    return (
        <View style={styles.container}>
            <Image source={require('./../assests/images/music.png')}
                style={{ width: 360, height: 200 }}
            />
            <Text style={{
                color: 'orange',
                fontSize: 17,
                fontWeight: 'bold'
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
                />
            </View>
            <View style={styles.box}>
                <Text>
                    Enter your password
                </Text>
                <TextInput
                    isDarkMode
                    autoCapitalize="words"
                />
            </View>
            <View style={styles.button}>
                <Text>
                    Login
        </Text>
            </View>
            <Text style={{
                textDecorationLine: 'underline'
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
    },
    box: {
        borderBottomWidth: 1,
        borderColor: 'red'
    },
    button: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'orange'
    }
});
