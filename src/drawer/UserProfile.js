import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const userInfo = useSelector((state) => { return state.login.userInfo })
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <Avatar
                containerStyle={{ marginLeft: 80, marginTop: 115, width: 250, height: 250, padding: 20 }}
                rounded
                source={require('./../../assests/images/avtar.png')}
            />
            <Text style={styles.text}>
                Profile Name : Sunaina Passi
            </Text>
            <Text style={styles.text}>
                Location : Noida, IN
            </Text>
            <Text style={styles.text}>
                Birthday : 23-12
            </Text>
            <Text style={styles.text}>
                sunaina.passi4@kiwitech.com
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        color: 'black',
    }
});


export default UserProfile;
