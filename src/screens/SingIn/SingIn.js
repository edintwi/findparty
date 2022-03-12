import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';


const image = {uri:'https://i.pinimg.com/564x/ac/59/db/ac59dbf7ba91ef293c8c8e15aef5d531.jpg'};

const SingIn = () => {
    return(
        <View style={styles.container}>
                    
        <ImageBackground source={image} resizeMode='cover' style={styles.backgroundStyle}>
            <Text style={styles.textStyle}>Fp</Text>
        </ImageBackground>
                    
        </View>        
        );
}    
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
    },
    textStyle:{
        fontSize: 250,
        textAlign: 'center',
        color: 'white',
        marginBottom: 200,
        fontFamily: 'Ranga_400Regular'
    },
    backgroundStyle:{
        flex: 1,
        justifyContent: 'center',
    },
})

export default SingIn;