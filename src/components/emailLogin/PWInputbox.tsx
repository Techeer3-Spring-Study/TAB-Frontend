import React, { useState } from 'react';
import {TextInput} from 'react-native';
import pwStyles from '../../styles/emailLogin/PWInputbox';

function PWInputbox() {
    const [password, setPassword] = useState('');

    const getMockData = async () => {
        const res = await fetch('/api/v1//auth/signin');
        console.log(await res.json());
    };

    return (
        <TextInput
            style = {pwStyles.inputStyle}
            placeholder = '비밀번호'
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
        >
        </TextInput>
    );
};

export default PWInputbox;