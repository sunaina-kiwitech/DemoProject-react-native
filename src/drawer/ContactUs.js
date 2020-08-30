import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

const ContactUs = () => {
    return (
            <View  style={{
                    backgroundColor:'white',
                    flex:1
                }}>
                <Image source={require('./../../assests/images/ContactUs.png')}
                    style={{ width: 390, height: 160 }}
                />
                <View style={{
                    backgroundColor:'white'
                }}>
                <Text style={styles.text}>
                    E-mail: sunaina.passi@kiwitech.com
                </Text>
                <Text style={styles.text}>
                    Phone Number : +91-9876543212
                </Text>
                <Text style={styles.text}>
                    LandLine: 05949-281300
                </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        padding: 10,
        fontSize: 15,
        textAlign:'justify',
        paddingTop:20,
        color:'steelblue'
    }
});


export default ContactUs
