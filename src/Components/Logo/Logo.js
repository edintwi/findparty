import React from 'react';
import {View, Text} from 'react-native';
import styles from './Styles';

const Logo = (props) =>{
    let cor = props.cor;
    return(
        <View style={styles.containerLogo}>
        <Text style={styles.textStyle} > <Text style={{color:cor}}> Fp </Text></Text>
    </View>
    );
};

export default Logo;