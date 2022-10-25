import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function Previous({route}) {
  const [isUrlDefined, setIsUrlDefined] = useState(false)
  const {url} = route.params

  const _handlePressButtonAsync = async () => {
   await WebBrowser.openBrowserAsync(`${url}`);
  };

  useEffect(()=> {
    if (url != undefined) {
        setIsUrlDefined(true)
        console.log('if');
      } else {
        setIsUrlDefined(false)
        console.log('else');
      }
  }, [])

  return (
    <View style={{flex:1}}>
        <WebView 
        style={styles.container}
        source={{ uri: `${url}` }}
        />

            <TouchableOpacity title="Ouvrir dans le navigateur" onPress={_handlePressButtonAsync} style={{ backgroundColor: "darkcyan", padding: 10, borderRadius: 20, marginHorizontal: 100, alignItems: "center", }} > 
              <Text style={{ color: "white", fontWeight: "bold" }}>Open browser</Text>
              </TouchableOpacity>  
        
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
