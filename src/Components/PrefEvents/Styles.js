import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    PrefTitle:{
        fontSize: 24,
        marginTop: 5,
        fontFamily: 'Poppins_600SemiBold'
    },
    scrollPrefEvents:{
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5
    },
    preftOptions:{
        marginRight: 5,

        width: 102,
        height: 129,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPrefs:{
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: 'Poppins_700Bold'
    },
    iconPrefs:{
        width: 63,
        height: 63
    }
});

export default styles;