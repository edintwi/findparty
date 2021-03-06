import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height:100,
    },
    postContainer:{
        borderTopWidth: 1,
        borderColor: '#C4C4C4',
        width: '100%',
        height:100,
        
    },
    post:{
        flexDirection: 'row',
        marginTop: 5,
    },
    userNick:{
        marginLeft: 5,
        color: '#C4C4C4',
        marginTop: 5,
    },
    userInfo:{
        marginTop: 5,
    },
    userIcon:{
        width: 52,
        height: 52,
        borderRadius: 50,
        backgroundColor: '#C4C4C4',
        marginRight: 5,
        marginLeft: 5,
    },
    statusPost:{
        flexDirection: 'row',
        marginTop: 15,
        
    },
    postIcon:{
        width:20,
        height:20,
        marginRight:5,
        marginLeft: 5,
    },
    postTime:{
        paddingLeft: 10
    },
    postLocation:{
        marginRight: 10
    },
    postContent:{
        marginTop: 5,
        marginLeft: -2
    },
});

export default styles;