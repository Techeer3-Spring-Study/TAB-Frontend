import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/signup/EmailCheckButton';

function EmailCheckButton() {
    return (
        <TouchableOpacity style = {styles.buttonStyle}>
            <Text style = {styles.buttonTitle}>
                인증하기
            </Text>
        </TouchableOpacity>
    );
};

export default EmailCheckButton;