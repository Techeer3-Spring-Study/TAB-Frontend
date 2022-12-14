import React from "react";
import {View, Text, Image} from 'react-native';
import LoginButton from '../../components/emailLogin/LoginButton';
import ForgotButton from '../../components/emailLogin/ForgotButton';
import IDInputbox from '../../components/emailLogin/IDInputbox';
import PWInputbox from '../../components/emailLogin/PWInputbox';
import styles from '../../styles/screens/EmailLogin';
import titleStyles from '../../styles/home/TitleText';

function EmailLoginScreen() {
  return (
    <View style = {styles.container}>
      <View style = {styles.image}>
        <Image
          source = {require('../../../assets/images/tab.png')}
        />
      </View>
      <Text style = {titleStyles.logintext}>
        로그인
      </Text>
      <View style = {styles.inputbox}>
        <IDInputbox/>
      </View>
      <View style = {styles.inputbox}>
        <PWInputbox/>
      </View>
      <LoginButton/>
      <ForgotButton/>
    </View>
  );
}

export default EmailLoginScreen;