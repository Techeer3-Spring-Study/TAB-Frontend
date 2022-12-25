import React, { useState, useEffect } from 'react';
import {View, Text, Image, TextInput, Alert} from 'react-native';
import LoginButton from '../../components/emailLogin/LoginButton';
import ForgotButton from '../../components/emailLogin/ForgotButton';
import styles from '../../styles/screens/EmailLogin';
import idStyles from '../../styles/emailLogin/IDInputbox';
import pwStyles from '../../styles/emailLogin/PWInputbox';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { worker } from '../../mocks/worker';

function EmailLoginScreen () {
  const [id, setId] = React.useState();
  const [password, setPassword] = React.useState();

    console.log({
      id,
      password
    });

    axios({
      url: 'localhost:8081/api/v1/auth/signin',
      method: 'post',
      data: {
        userId: id,
        password: password
      },
      headers: {
          contentType: 'application/json'
      }
    }).then(function (response) {
       console.log(response.data.accessToken);
       AsyncStorage.setItem('accessToken', response.data.accessToken);
       AsyncStorage.setItem('refreshToken', response.data.refreshToken);
       Alert.alert(id + '님 어서오세요!');
   }).catch(function (error) {
       console.log(error);
      //  Alert.alert('fail');
   });

  return (
    <View style = {styles.container}>
      <View style = {styles.image}>
        <Image
          source = {require('../../../assets/images/tab.png')}
        />
      </View>
      <Text style = {styles.logintext}>
        로그인
      </Text>
      <View style = {styles.inputbox}>
        <TextInput
          style = {idStyles.inputStyle}
          placeholder = '아이디'
          value = {id}
          onChangeText = {(id) => setId(id)}
        />
      </View>
      <View style = {styles.inputbox}>
        <TextInput
            style = {pwStyles.inputStyle}
            placeholder = '비밀번호'
            value = {password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
        />
      </View>
      <LoginButton/>
      <ForgotButton/>
    </View>
  );
}

export default EmailLoginScreen;