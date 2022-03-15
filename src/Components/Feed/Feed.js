import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Styles';
const Feed = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <View style={styles.post}>
                    <View style={styles.userIcon}>
                        
                    </View>
                    <View >
                        <Text style={styles.userInfo}>Edson Brandon</Text>
                        <Text style={styles.postContent}> Tá muito bom!</Text>
                    </View>
                    <View >
                        <Text style={styles.userNick}>@edintwi</Text>
                    </View>
                </View>
                <View style={styles.statusPost}>
                    <Image source={require('../../../assets/location-icon.png')} style={styles.postIcon}></Image>
                    <Text style={styles.postLocation}>Está em quintal do farofão</Text>
                    <Image source={require('../../../assets/comment-icon.png')} style={styles.postIcon}></Image>
                    <Text style={styles.postComments}>25 </Text>
                    <Image source={require('../../../assets/like-icon.png')} style={styles.postIcon}></Image>
                    <Text style={styles.postLikes}> 50 </Text>
                    <Text style={styles.postTime}>21:45</Text>
                </View>
            </View>
        </View>
    );
};

export default Feed;