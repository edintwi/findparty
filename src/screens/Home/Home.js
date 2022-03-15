import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './Styles';

import ListEvents from '../../Components/ListEvents/ListEvents';
import PrefEvents from '../../Components/PrefEvents/PrefEvents';
import Feed from '../../Components/Feed/Feed';

const Home = () => {
    return(
        <ScrollView style={styles.container}>
            
            <ListEvents/>
            <PrefEvents/>
            <Text style={styles.titleFeed}>Feed</Text>
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>
        </ScrollView>
    );
   
};

export default Home;