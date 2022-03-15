import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import ButtonLogin from '../../Components/ButtonLogin/ButtonLogin';

import styles from './Styles'

const image = {uri:'https://i.pinimg.com/564x/ac/59/db/ac59dbf7ba91ef293c8c8e15aef5d531.jpg'};

const SingIn = () => {
    return(
           
                <View style={styles.container}> 
                 <ImageBackground source={image} resizeMode='cover' style={styles.backgroundStyle}>
                    <Text style={styles.textStyle}>Fp</Text>
                    <View style={styles.buttonsView}>
                        <ButtonLogin text='Entrar com Google' icon={2}/>
                        <ButtonLogin text='Entrar com AppleID' icon={1}/>
                        <ButtonLogin text='Criar Conta' icon={3}/>
                    </View>
                    </ImageBackground>
                </View>
   
          
               
        );
}    


export default SingIn;