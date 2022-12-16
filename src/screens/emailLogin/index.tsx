import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import LoginButton from '../../components/emailLogin/LoginButton';
import ForgotButton from '../../components/emailLogin/ForgotButton';
import IDInputbox from '../../components/emailLogin/IDInputbox';
import PWInputbox from '../../components/emailLogin/PWInputbox';
import styles from '../../styles/screens/EmailLogin';

function EmailLoginScreen ({goWithoutLogin}) {
  const [type, setType] = useState('Login');
  const [action, setAction] = useState('Login');
  const [actionMode, setActionMode] = useState('새로 등록할게요~');
  const [hasErrors, setHasErrors] = useState(false);
  const [form, setForm] = useState({
    email: {
      value: '',
      type: 'textInput',
      rules: {},
      valid: false,
    },
    password: {
      value: '',
      type: 'textInput',
      rules: {},
      valid: false,
    },
    confirmPassword: {
      value: '',
      type: 'textInput',
      rules: {},
      valid: false,
    },
  });

  updateInput = (name, value) => {
    setHasErrors(false);
    let formCopy = form;
    formCopy[name].value = value;
    setForm(form => {
      return {...formCopy};
    });
    // setForm({
    //   form: formCopy,
    // });
    console.warn(form);
  };

  confirmPassword = () => {
    return type != 'Login' ? (
      <Input
        value={form.confirmPassword.value}
        type={form.confirmPassword.type}
        secureTextEntry={true}
        placeholder="비밀번호 재입력"
        placeholderTextColor={'#ddd'}
        onChangeText={value => updateInput('confirmPassword', value)}
      />
    ) : null;
  };

  formHasErrors = () => {
    return hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>
          앗! 로그인 정보를 다시 확인해주세요~
        </Text>
      </View>
    ) : null;
  };
  
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