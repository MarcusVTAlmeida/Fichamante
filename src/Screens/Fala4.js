import React, { useState, useEffect } from 'react';

import { Animated, Button, Text, View, ImageBackground, StyleSheet, Image, TextInput, backgroundColor, TouchableOpacity, SafeAreaView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();

function Fala4({ route, navigation }) {
  
  
   

    return (    
    <SafeAreaView style={styles.container}>
      <ImageBackground
      style={styles.container}
      source={require("../../assets/Cenario7.jpg")}>    
      <View style={{
            AlignItems: 'center',
            position: 'absolute'
          }}>
      <View style={{flexDirection: 'row'}}>
      <Image style={{  height: 200,
            width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
      source={require('../../assets/CaixaDialogo3.png')} />
    
    <View style={{flex:1, flexDirection:'row'}}>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>    Você chega na frente dessa simpática lojinha, que se chama Nina: Fichas, Feitiços</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>e Afins.</Text>        
    </View>              

   <TouchableOpacity style={{top: 280, position: 'absolute', left: 720}} onPress={() => {
          navigation.navigate('Fala5' )}}>
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setad.png')} /> 
   </TouchableOpacity>
   <TouchableOpacity style={{top: 275, position: 'absolute', left:-25}} onPress={() => {
          navigation.navigate('Fala3' )}}>
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setae.png')} /> 
   </TouchableOpacity>
     
      </View>      
      </View>
      </ImageBackground>   
    </SafeAreaView>
    
  );
  }

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode:"contain",
    backgroundColor:"#000000"
   
  }
});
export default Fala4;