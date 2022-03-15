import React from 'react';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Ranga_400Regular} from '@expo-google-fonts/ranga'
import SingIn from './src/screens/SingIn/SingIn';
import Home from './src/screens/Home/Home';



export default function App() {
  
  const [fontsLoaded] = useFonts({
    Ranga_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }
    return (
      <Home/>
    );
}
