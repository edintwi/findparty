import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native'; 
import styles from './Styles'

const PrefEvents  = () =>{
    return(
    <View Styles={styles.container}>
        <View>
            <Text style={styles.PrefTitle}> Preferências </Text>
        </View>
        <ScrollView style={styles.scrollPrefEvents} horizontal={true} showsHorizontalScrollIndicator={false} > 

            <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    <Text style={styles.textPrefs}>Bar</Text>
                </View>
            </TouchableOpacity>

           <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    <Text style={styles.textPrefs}>Boate</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    <Text style={styles.textPrefs}>Resenha</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    <Text style={styles.textPrefs}>Pool Party</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    <Text style={styles.textPrefs}>Fantasia</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    <Text style={styles.textPrefs}>Show</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity> 
                <View style={styles.preftOptions}>
                    <Text style={styles.textPrefs}>Lual</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
    );
    
};

export default PrefEvents;