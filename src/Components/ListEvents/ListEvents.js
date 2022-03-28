import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Styles';

const ListEvents = () =>{
    return (
        <View >
            <Text style={styles.textEvents}>Perto De Você</Text>
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.enventsContainer}>
               <TouchableOpacity style={styles.events}>
                        <Image source= {require('../../../assets/evento1.jpg')} style={styles.eventsImg}></Image>
               </TouchableOpacity>
            
               <TouchableOpacity style={styles.events}>
                        <Image source= {require('../../../assets/evento2.jpg')} style={styles.eventsImg}></Image>
               </TouchableOpacity>
               
               <TouchableOpacity style={styles.events}>
                        <Image source= {require('../../../assets/evento3.jpg')} style={styles.eventsImg}></Image>
               </TouchableOpacity>
               
               <TouchableOpacity style={styles.events}>
                        <Image source= {require('../../../assets/evento1.jpg')} style={styles.eventsImg}></Image>
               </TouchableOpacity>    
            </ScrollView>
        </View>
        </View>
    )
};

export default ListEvents;