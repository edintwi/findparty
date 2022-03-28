import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#C4C4C4',
       
    },
    TextButtonLogin: {
        color: 'black',
        fontSize: 14,
        padding: 5,
   
    },
    ImgButton: {
        width: 38,
        height: 38,
        borderRightWidth: 1,  
        alignItems: 'center',   
    },
    img:{
        width: 38,
        height: 38,
        marginRight: 5
    }
}
);

export default styles;
