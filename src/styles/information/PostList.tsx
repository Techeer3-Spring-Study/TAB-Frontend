import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 8
    },

    listTitle: {
        width: Platform.OS == 'ios' ? '25%' : '30%',
        marginTop: Platform.OS == 'ios' ? 10 : 5,
        marginLeft: Platform.OS == 'ios' ? 20 : 10,
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 12,
        fontFamily: 'GmarketSansTTFMedium',
        lineHeight: Platform.OS == 'ios' ? 20 : 15
    }
    
});

export default styles;