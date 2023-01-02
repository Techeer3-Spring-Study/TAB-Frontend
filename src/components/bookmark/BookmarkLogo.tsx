import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/EmojiButton';

function BookmarkLogo() {
    return (
        <TouchableOpacity style = {styles.buttonStyle}>
            <FontAwesome 
                name = 'bookmark'
                size = {Platform.OS == 'ios' ? 50 : 40} 
                color = 'green'
            />
        </TouchableOpacity>
    );
};

export default BookmarkLogo;