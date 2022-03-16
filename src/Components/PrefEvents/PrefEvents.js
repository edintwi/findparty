import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient'; 

const PrefEvents  = () =>{
    return(
    <View Styles={styles.container}>
        
        <View>
            <Text style={styles.PrefTitle}> Preferências </Text>
        </View>
        <ScrollView style={styles.scrollPrefEvents} horizontal={true} showsHorizontalScrollIndicator={false} > 
            <LinearGradient colors={['#000000', '#818181', '#000000']}  style={styles.preftOptions}>
           <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    
                        <Image source={require('../../../assets/beer.png')} style={styles.iconPrefs}></Image>
                        <Text style={styles.textPrefs}>Bar</Text>

                    
                </View>
            </TouchableOpacity>
            </LinearGradient>

            <LinearGradient colors={['#000000', '#818181', '#000000']}  style={styles.preftOptions}>
            <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    <Image source={require('../../../assets/cocktail.png')} style={styles.iconPrefs}></Image>
                    <Text style={styles.textPrefs}>Boate</Text>
                </View>
            </TouchableOpacity>
            </LinearGradient>
            
            <LinearGradient colors={['#000000', '#818181', '#000000']}  style={styles.preftOptions}>
                <TouchableOpacity> 
                    <View style={styles.preftOptions}>
                    <Image source={require('../../../assets/microfone.png')} style={styles.iconPrefs}></Image>
                        <Text style={styles.textPrefs}>Show</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient colors={['#000000', '#818181', '#000000']}  style={styles.preftOptions}>
                <TouchableOpacity> 
                    <View style={styles.preftOptions}>
                    <Image source={require('../../../assets/sunbed.png')} style={styles.iconPrefs}></Image>
                        <Text style={styles.textPrefs}>Pool Party</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>

        </ScrollView>
        
    </View>
    
    );
    
};

export default PrefEvents;