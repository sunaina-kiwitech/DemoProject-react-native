import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

const AboutUs = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
            <Image source={require('./../../assests/images/aboutUs.png')}
                    style={{ width: 390, height: 160 }}
                />
                <Text style={styles.text}>
                    Version :
                    8.52.678.7
                </Text>
                <Text style={styles.text}>
                    Third-Party Software :
                    Sweet software that helped us
                </Text>
                <Text style={styles.text}>
                    Terms and Conditions :
                    All the stuff you need to know
                </Text>
                <Text style={styles.text}>
                    Privacy Policy :
                    Important for both of us
                </Text>
                <Text style={styles.text}>
                    Support :
                    Get help from us and the community
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'steelblue',
        padding: 10,
        fontSize: 15
    }
});

export default AboutUs;
