import React from 'react';
import {View, Text, TextInput, useState} from 'react-native';
import styles from './Styles';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import Logo from '../../components/Logo/Logo';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native-web';



const handleNewAcount = () =>{
   const auth = getAuth();
   createUserWithEmailAndPassword(auth, 'cida34@gmail.com', 'senhamaisbraba')
   .then(() => alert("Cadastro feito com sucesso!"))
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);

    return(
      alert('Cadastrado com sucesso!')
    )
  });

};

const Register = () =>{   
   return(
    <View styles={styles.container}>
        <View style={styles.formRegister}>
        <Logo cor="#000000"/>
            <Text style={styles.labelForm} onPress={handleNewAcount}>Nova Conta</Text>
            <Text style={styles.labelRegister} >E-mail</Text>
            <TextInput style={styles.inputRegister}/>
            <Text style={styles.labelRegister}>Senha</Text>
            <TextInput style={styles.inputRegister}/>
            <ButtonLogin text="Cadastrar" ></ButtonLogin>
        </View>
    </View>
   );
   
};

export default Register;