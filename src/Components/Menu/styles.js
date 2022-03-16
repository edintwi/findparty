import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        width: 335,
        height: 46,
        backgroundColor: '#EDEDED',
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#c4c4c4',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        marginBottom: '2%',
        
        
    },
    iconContainer: {
        marginLeft: 30,
        marginRight: 30,
    },
    menuIcon:{
        width: 30,
        height: 30,
        
        
    }
});

export default styles;