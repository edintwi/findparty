import React from 'react';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Ranga_400Regular} from '@expo-google-fonts/ranga';
import {Poppins_700Bold, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

import { Routes } from './src/routes';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Ranga_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    
    return <AppLoading/>
  }
    return (
        <Routes/>
    );
}
