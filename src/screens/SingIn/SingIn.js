import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

const image = {uri:'https://i.pinimg.com/564x/ac/59/db/ac59dbf7ba91ef293c8c8e15aef5d531.jpg'};

const SingIn = () => {
    const navigation = useNavigation();

    const handleSingIn = () =>{
        navigation.navigate('Register');
    }

    return(
           
                <View style={styles.container}> 
                 <ImageBackground source={image}  resizeMode='cover' style={styles.backgroundStyle}>
                    <Text style={styles.textStyle} onPress={handleSingIn}>Fp</Text>
                    <View style={styles.buttonsView}>
                        <ButtonLogin text='Entrar com Google' icon={2} onClick={handleSingIn}/>
                        <ButtonLogin text='Entrar com AppleID' icon={1} onPress={handleSingIn}/>
                        <ButtonLogin text='Criar Conta' icon={3} onPress={handleSingIn}/>
                    </View>
                    </ImageBackground>
                </View>
   
          
               
        );
}    


export default SingIn;