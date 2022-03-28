import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

const ButtonLogin = ({text}) =>{
    return (
        <View>
        <TouchableOpacity style = {styles.container}>
                <Text style = {styles.TextButtonLogin}> {text}</Text>
        </TouchableOpacity>
    </View>   
    );
}

export default ButtonLogin;