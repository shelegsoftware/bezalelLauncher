import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { BackHandler } from 'react-native';
import { useState, useEffect } from 'react';
export default function App() {
  function handleBackButtonClick() {
    //  const navigation=useNavigation()
    BackHandler.exitApp();
      //this.goBack();
      return true;
    }
    
    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
      };
    }, []);
      
    return (
      <>
      
        <WebView
          originWhitelist={['*']}
          source={{uri: 'https://bezalelstudents.shelegcrm.com'}}
          style={{marginTop: 20}}
        />
      </>
    );
}