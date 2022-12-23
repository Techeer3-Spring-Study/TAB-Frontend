import React, { useState } from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/IDInputbox';

function InputboxID() {
    const [id, setId] = useState('');

    const getMockData = async () => {
        const res = await fetch('/api/v1//auth/signin');
        console.log(await res.json());
      };

    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '아이디'
            value = {id}
            onChangeText = {(id) => setId(id)}
        >   
        </TextInput>
    );
};

export default InputboxID;