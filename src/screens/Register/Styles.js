import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EEEEEE',
    },
    textLogo:{
        fontFamily: 'Ranga_400Regular',
        fontSize: 240
    },
    formRegister:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    inputRegister:{
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 5,
        width: 200,
        height: 50,
        marginBottom:20,

    },
    labelRegister:{
        fontFamily: 'Poppins_600SemiBold',
        marginRight: 150
    },
    labelForm:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginBottom: 50
    }
});

export default styles;