import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Print from 'expo-print';


import * as Sharing from 'expo-sharing'

import * as ScreenOrientation from 'expo-screen-orientation';
import { useRoute } from '@react-navigation/native';



// You can import from local files
//import AssetExample from './components/AssetExample';


// or any pure javascript modules available in npm


function PDF({ route, navigation }) {
  const { text } = route.params;
  const { value } = route.params;
  
  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    
  });

  
    return (
      
      <View style={styles.container}>   

      
        
        
          <Button title="Resultado" onPress={()=>{
            
           Print.printToFileAsync({
              html: `
              <html>
              <head >              
              <style >
              body {                
                text-align: center;      
              }
              </style>           
              
       
              <div>
    <b style="position: absolute; left:137; top:175">Nome do Jogador</b> 
     <b style="position: absolute; left:137; top:130">${text}</b>
     <b style="position: absolute; right:350; top:130">Raça</b>
     <b style="position: absolute; right:315; top:105">${value}</b>
   			  <img style="width:1125; height:1425"
            src="https://res.cloudinary.com/dib0twra5/image/upload/v1607610022/0001_dhlqgp_gjql2w_1_c5u59f.jpg" />
              
              </div>
            
              </head>
              </html>
        `,
            })
            .then((filepath) => {      
              Sharing.shareAsync(filepath.uri, {
                mimeType: 'application/pdf',
                dialogTitle: 'Here is your pdf',
                UTI: 'com.adobe.pdf',
              })
            })

          }} />
   <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', top:200}} onPress={() => {
          navigation.navigate('Fala1', ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE))}}>
   <Text style={{color:'white'}}>Voltar ao inicio</Text>
    </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default PDF;