import React, { useState, useEffect } from 'react';

import { Animated, Button, Text, View, ImageBackground, StyleSheet, Image, TextInput, backgroundColor, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Tela2 from './Tela2'



const Stack = createStackNavigator();

function Home({ route, navigation }) {
  
  const [text, onChangeText] = React.useState();
 
   

    return (    
    <View style={styles.container}>
      <ImageBackground
      style={styles.container}
      source={require("../../assets/Cenario.jpeg")}>    
      <View style={{
            AlignItems: 'center',
            position: 'absolute'
          }}>
      <View style={{flexDirection: 'row'}}>
      <Image style={{  height: 193,
            width: 500, top: '30%', position: 'absolute', resizeMode:"contain"}} 
      source={require('../../assets/CaixaDialogo3.png')} />

      <Text style={{fontSize: 16, color: "white", top: '33%', position: 'absolute', left: 50}}>Brique </Text>
      <Text style={{fontSize: 16, color: "white", top: '40%', position: 'absolute', left: 50}} >uuu</Text>
     
     <TextInput style={{ height: 30, width: 400, borderColor: 'white', borderWidth: 1, top: 280, left: 50}}
        color= 'black'
        backgroundColor= 'white'
        selectionColor= 'black'
        onChangeText={text => onChangeText(text)}
        value={text}
      />
    
      <Image style={{  height: 610,
            width: 200, left: '30%', bottom: '19%', resizeMode:"contain"}} 
      source={require('../../assets/Personagem.png')} /> 

       

   <TouchableOpacity style={{top: '25%', left: 150}} onPress={() => {
          navigation.navigate('Tela2'  )}}>
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setad.png')} /> 
</TouchableOpacity>
<TouchableOpacity style={{top: 275, position: 'absolute', left:-25}} onPress={() => {
          navigation.navigate('Fala6')}}>
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setae.png')} /> 
   </TouchableOpacity>

      </View>
      
      </View>
      </ImageBackground>   
    </View>
    
  );
  }

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode:"contain"
   
  }
});
export default Home;