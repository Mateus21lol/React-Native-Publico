import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, Image, Dimensions, ImageBackground } from 'react-native';
import { ListItem, Avatar, Input } from 'react-native-elements';
// Galio components
import {
    Card, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');

const imgBackGround = '../img/anotherTest.jpg';

const LoginPage = (props) => {

    const [users, setUsers] = useState([]);

    function Spacer(props) {
        return <View style={{ height: props.size, width: props.size }} />;
    }
    return (
        <ImageBackground
            source={require(imgBackGround)}
            style={styles.backgroundImage}
        >
            <Spacer size={100} />
            <Text style={styles.TextWelcome}>Welcome</Text>
            <Spacer size={100} />
            <Input placeholder="EMAIL" style={styles.InputStyle} />
            <Input placeholder="PASSWORD" style={styles.InputStyle} />
            <Spacer size={150} />
            <Text style={styles.TextReference}>DON'T HAVE AN ACCOUNT? <Text style={styles.TextSingUp}>SIGN UP</Text></Text>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    TextWelcome: {
        color: 'white',
        fontSize: 45,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    TextReference: {
        color: 'gray',
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'center'
    }, TextSingUp: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    InputStyle: {
        color: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
});
export default LoginPage

