import React, {Component} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/community/PostButton';

type CommunityScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

class PostButton extends Component {
    render () {
        const navigation = useNavigation<CommunityScreenProp>();
        return (
            <TouchableOpacity 
                style = {styles.buttonStyle}
                onPress = {() => navigation.navigate('Post')}
            >
                <FontAwesome 
                    name = 'pencil' 
                    size = {Platform.OS == 'ios' ? 70 : 45} 
                    color = '#2BC63B' 
                />
            </TouchableOpacity>
        );
    }
};

export default PostButton;