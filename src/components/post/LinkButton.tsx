import React from "react";
import {Platform, TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LinkButton = () => {
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: Platform.OS == "ios" ? 20 : 10,
            marginLeft: 10,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            }}
        >
            <FontAwesome name='link' size={40} color='#909090' />
        </TouchableOpacity>
    );
};

export default LinkButton;