import React from 'react';
import {View, Text, ImageBackground, TextInput, Image, TouchableOpacity} from 'react-native';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import Logo from '../../components/Logo/Logo';
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
                 <ImageBackground source={image} style={styles.backgroundStyle}>
                   <Logo cor="#FFFFFF"/>
                    <View style={styles.formLogin}>
                        <Text style={styles.labelLogin}>E-mail</Text>
                        <TextInput style={styles.inputLogin}></TextInput>
                        <Text style={styles.labelLogin}>Senha</Text>
                        <TextInput style={styles.inputLogin} type=""></TextInput>
                        <Text style={styles.forwardPassword}> Esqueceu sua senha?</Text>
                    </View>
                    <View style={styles.buttonsView}>
                    <ButtonLogin text='Entrar'/>
                        <Text style={styles.textRegister}> Não tem uma conta? <Text style={styles.registerClick}  onPress={handleSingIn}>Registre-se!</Text> </Text>
                        
                        <Text style={styles.moreSingIn}> Ou entre pelo</Text>
                        <TouchableOpacity>
                            <Image style={styles.googleLogin} source={require('../../../assets/googleLogin.png')} />
                        </TouchableOpacity>
                        
                    </View>
                    
                    
                    </ImageBackground>
                </View>
   
          
               
        );
}    


export default SingIn;