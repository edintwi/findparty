import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    PrefTitle:{
        fontSize: 24,
        marginTop: 5
    },
    scrollPrefEvents:{
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5
    },
    preftOptions:{
        marginRight: 5,
        backgroundColor: '#000000',
        width: 64,
        height: 54,
        borderRadius: 10,
        justifyContent: 'center'
    },
    textPrefs:{
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center'
    }
});

export default styles;