import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Styles';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const handleNewAcount = () =>{
   const auth = getAuth();
   createUserWithEmailAndPassword(auth, 'edintwi@gmail.com', 'senhamaisbraba')
   .then((userCredencial) =>{
    const user = userCredential.user;
   }) .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });

};

const Register = () =>{   
   return(
    <View styles={styles.container}>
        
        <View style={styles.formRegister}>
        <Text style={styles.textLogo} onPress={handleNewAcount}>Fp</Text>
            <Text style={styles.labelForm}>Nova Conta</Text>
            <Text style={styles.labelRegister}>E-mail</Text>
            <TextInput style={styles.inputRegister}/>
            <Text style={styles.labelRegister}>Senha</Text>
            <TextInput style={styles.inputRegister}/>
            <ButtonLogin text="Cadastrar" icon={3} />
        </View>
    </View>
   );
   
};

export default Register;