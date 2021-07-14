import React, { useState, useEffect } from 'react';

import { Animated, SafeAreaView, Text, View, ImageBackground, StyleSheet, Image, TextInput, backgroundColor, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();

function Fala7({ route, navigation }) {
  
  
   

    return (    
    <SafeAreaView style={styles.container}>
      <ImageBackground
      style={styles.container}
      source={require("../../assets/Cenario2.jpg")}>    
      <View style={{
            AlignItems: 'center',
            position: 'absolute'
          }}>
      <View style={{flexDirection: 'row'}}>
      

      <Image style={{  height: 200,
            width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
      source={require('../../assets/CaixaDialogo3.png')} />
    
    <View style={{flex:1, flexDirection:'row', position: 'absolute'}}>
        <Text style={{fontSize: 16, color: "black", top:290, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>    Você passa pela porta encontra essa lojinha empoeirada e bagunçada, lotada de </Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>coisas estranhas e livros esquisitos, um pseudo-dragão dorme sobre a bancada,</Text> 
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>sem se importar com a sua chegada.</Text>       
    </View>              
   
   <TouchableOpacity style={{top: 280, position: 'absolute', left: 720}} onPress={() => {navigation.navigate('Fala8' )}}>
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setad.png')} /> 
   </TouchableOpacity>
   <TouchableOpacity style={{top: 275, position: 'absolute', left:-25}} onPress={() => {
          navigation.navigate('Fala5')}}>
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
export default Fala7;