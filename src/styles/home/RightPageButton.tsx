import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle: {
        marginTop: Platform.OS == 'ios' ? 15 : 5,
        marginLeft: Platform.OS == 'ios' ? 40 : 30,
        marginRight: 10,
        padding: 10,
        backgroundColor: 'white',
    }
});

export default styles;