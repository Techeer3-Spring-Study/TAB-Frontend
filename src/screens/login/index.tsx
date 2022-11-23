import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import LoginButton from '../../components/LoginButton';
import ForgotButton from '../../components/ForgotButton';
import InputboxID from '../../components/InputboxID';
import InputboxPW from '../../components/InputboxPW';

function LoginScreen() {

  const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: 'white'
    },

    image: {
      width: 500,
      height: 200,
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: 'powderblue'
    },

    logintext: {
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
      textAlign: "center",
      color: "black"
    },

    idbox: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    pwbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    loginbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 30,
    },

    missing:{
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      alignItems : "center",
      fontSize: 30,
      border: "none"
    }

  });

  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <Text style = {styles.logintext}>
        로그인
      </Text>
      <View style={styles.idbox}>
        <InputboxID/>
      </View>
      <View style={styles.pwbox}>
        <InputboxPW/>
      </View>
      <LoginButton/>
      <ForgotButton/>
    </View>
  );
}

export default LoginScreen;