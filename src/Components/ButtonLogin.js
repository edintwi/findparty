import React from 'react';
import {View, Text, TouchableOpacity , StyleSheet, Image, StatusBar} from 'react-native';

import AppleIcon from '../../assets/apple-icon.png';
import GoogleIcon from '../../assets/google-icon.png';
import NewIcon from '../../assets/new-icon.png';



const ButtonLogin = ({text, icon = 0}) => {

    if(icon == 1){
        icon = AppleIcon;
    }else if(icon ==2){
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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
       
    },
    TextButtonLogin: {
        color: 'black',
        fontSize: 14,
        padding: 5,
   
    },
    ImgButton: {
        width: 38,
        height: 38,
        borderRightWidth: 1,  
        alignItems: 'center',   
    },
    img:{
        width: 38,
        height: 38,
        marginRight: 5
    }
}
);



export default ButtonLogin;