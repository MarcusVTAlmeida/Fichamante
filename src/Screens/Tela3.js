import React, { useState, useEffect } from 'react';
import { Animated, Button, Text, View, ImageBackground, StyleSheet, Image, TextInput, backgroundColor, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator(); 

function Tela3({ route, navigation }) {
   
    const { text } = route.params;
    const { value } = route.params;

  return (    
    <View style={styles.container}>
    <ImageBackground
    style={styles.container}
    source={require("../../assets/Cenario2.jpeg")}>    
    <View  style={{
          AlignItems: 'center',
          position: 'absolute',
          flexDirection: 'row'
        }}>
    
    <Image style={{  height: 193,
          width: 500, top: '30%', position: 'absolute'}} 
    source={require('../../assets/CaixaDialogo3.png')} />
    
    <View style={{
      width: 150, top: 280, left: 80}}>


    </View>
    <Image style={{  height: 650,
          width: 200, left: '50%', bottom: '1%'}} 
    source={require('../../assets/Personagem2.png')} /> 
   
   <TouchableOpacity style={{top: '25%', position: 'absolute'}} onPress={() => {
        navigation.navigate('Home')}}>
  <Image style={{  height: 50, width: 50}} 
  source={require('../../assets/setae.png')} /> 
  </TouchableOpacity>
   <TouchableOpacity style={{top: '25%', left: '215%', position: 'absolute'}} onPress={() => {
        navigation.navigate('PDF', {value: value, text: text} )}}>
  <Image style={{  height: 50, width: 50}} 
  source={require('../../assets/setad.png')} /> 
  </TouchableOpacity>
  
    </View>
    
 
    </ImageBackground>   
  </View>
);
};
const styles = StyleSheet.create({

container: {
  flex: 1,
  width: '100%',
  height: '100%',
 
}
});
export default Tela3;