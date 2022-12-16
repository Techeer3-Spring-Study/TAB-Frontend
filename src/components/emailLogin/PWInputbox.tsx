import React, { useState } from "react";
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/PWInputbox';

const [password, setPassword] = useState("");

function PWInputbox() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '비밀번호'
            value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
        >
        </TextInput>
    );
};

export default PWInputbox;