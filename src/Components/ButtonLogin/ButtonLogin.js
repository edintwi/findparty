import React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import styles from './Styles';

import AppleIcon from '../../../assets/apple-icon.png'
import GoogleIcon from '../../../assets/google-icon.png';
import NewIcon from '../../../assets/new-icon.png';

const ButtonLogin = ({text, icon = 0}) => {

    if(icon == 1){
        icon = AppleIcon;
    }else if(icon == 2){
        icon = GoogleIcon;
    }else if(icon == 3){
        icon = NewIcon;
    }

    return (
        <TouchableOpacity>
            <StatusBar barStyle="light-content" />
             <View style = {styles.container}>
                <View style = {styles.ImgButton} >
                    <Image source = {icon} style = {styles.img}></Image>
                </View>
                     
                <Text style = {styles.TextButtonLogin}> {text} </Text>
            </View>
        </TouchableOpacity> 
    );
};
export default ButtonLogin;