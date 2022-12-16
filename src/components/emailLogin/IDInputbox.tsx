import React, { useState } from "react";
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/IDInputbox';

const [id, setId] = useState("");

function InputboxID() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '아이디'
            value={id}
            onChangeText={(id) => setId(id)}
        >
        </TextInput>
    );
};

export default InputboxID;