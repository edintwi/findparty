import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EEEEEE',
    },
    logo:{
      color: '#000000',
    },
    formRegister:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    inputRegister:{
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
    labelRegister:{
        fontFamily: 'Poppins_600SemiBold',
        color: 'black',
    },
    labelForm:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginBottom: 50
    }
});

export default styles;