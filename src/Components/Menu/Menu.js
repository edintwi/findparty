import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';

const Menu = () => {
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={require('../../../assets/home.png')} style={styles.menuIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={require('../../../assets/search.png')} style={styles.menuIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={require('../../../assets/profile.png')} style={styles.menuIcon}/>
            </TouchableOpacity>
        </View>
    );
};

export default Menu;