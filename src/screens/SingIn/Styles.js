import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    labelLogin:{
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
    },
    inputLogin:{
        backgroundColor: 'white',
        opacity: 0.50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        width: 215,
        height: 50,
        textAlign: 'left',
        padding: 10,
        fontFamily: 'Poppins_600SemiBold'

    },
    forwardPassword:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10,
        color: 'white',
    },
    moreSingIn:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10,
        color: 'white',
        marginTop: 10
    },
    googleLogin:{
        width: 48,
        height: 48,
    },
    backgroundStyle:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    buttonsView:{
       marginTop: 30,
       alignItems: 'center',
    },
    textRegister:{
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: 10,
    },
    registerClick:{
        fontFamily: 'Poppins_700Bold',
        color: 'white',
        fontSize: 10,
    },
})
export default styles;