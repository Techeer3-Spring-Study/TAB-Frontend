import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/post/AttachmentButton';

class ImageButton extends Component {
    render () {
        return (
            <TouchableOpacity
                style = {styles.buttonStyle}
            >
                <FontAwesome 
                    name = 'image' 
                    size = {40} 
                    color = '#909090'
                />
            </TouchableOpacity>
        );
    };
};

export default ImageButton;