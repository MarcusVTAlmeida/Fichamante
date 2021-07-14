import React, { useState, useEffect } from 'react';
import { Animated, Button, Text, View, ImageBackground, StyleSheet, Image, TextInput, backgroundColor, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { RadioButton } from 'react-native-paper';
import Tela3 from './Tela3'

const Stack = createStackNavigator();

function Tela2({ route, navigation }) {
  const { text } = route.params;
  const [value, setValue] = React.useState('first');

  return (    
    <View style={styles.container}>
      <ImageBackground
      style={styles.container}
      source={require("../../assets/Cenario2.jpeg")}>    
      <View  style={{
            AlignItems: 'center',
            position: 'absolute'
          }}>
      <View style={{flexDirection: 'row'}}>
      
      <Image style={{  height: 193,
            width: 500, top: '30%', position: 'absolute', resizeMode:"contain"}} 
      source={require('../../assets/CaixaDialogo3.png')} />
      
      
      <Text style={{fontSize: 16, color: "white", top: '40%', position: 'absolute', left: 50}}>Olá {JSON.stringify(text)},</Text>
      <Text style={{fontSize: 16, color: "white", top: '43%', position: 'absolute', left: 50}}>Escolha uma raça para comecar:</Text>
      
      <View style={{
        width: 150, top: 280, left: 80}}>
      <RadioButton.Group 
      onValueChange={value => setValue(value)} 
      value={value}>       
      <View style={{flexDirection: "row"}}>
      <View style={{right:20}}>
        <Text style={{color: "white"}}>Raça1</Text>        
        <RadioButton value="Raça1"color='yellow' uncheckedColor='grey'/>
      </View>     
      <View>
        <Text style={{color: "white"}}>Raça2</Text>
        <RadioButton value="Raça2" color='yellow' uncheckedColor='grey'/>
      </View>
      </View>
    </RadioButton.Group>
      </View>
      
      <Image style={{  height: 650,
            width: 200, left: '65%', bottom: '35%', resizeMode:"contain"}} 
      source={require('../../assets/Personagem2.png')} /> 
     
     <TouchableOpacity style={{top: '25%', position: 'absolute'}} onPress={() => {
        navigation.navigate('Home')}}>
    
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
  source={require('../../assets/setae.png')} /> 
  </TouchableOpacity>
  
   <TouchableOpacity style={{top: '25%', left: '215%', position: 'absolute'}} onPress={() => {
        navigation.navigate('PDF'  )}}>
  <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
  source={require('../../assets/setad.png')} /> 
  </TouchableOpacity>
    
      </View>
      
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
   resizeMode:"contain"
   
  }
});
export default Tela2;