import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/login/ForgotButton';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

function ForgotButton() {
    const navigation = useNavigation<SignUpScreenProp>();
    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress = {() => navigation.navigate('SignUp')}
        >
            <Text style = {styles.buttonTitle}>
                계정이 없으신가요?
            </Text>
        </TouchableOpacity>
    );
};

export default ForgotButton;