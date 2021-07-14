import React, { useState, useEffect } from 'react';

import { Animated, SafeAreaView, Text, View, ImageBackground, StyleSheet, Image, TextInput, backgroundColor, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { RadioButton } from 'react-native-paper';


const Stack = createStackNavigator();

function Fala46({ route, navigation }) {
  const [value, setValue] = React.useState('Anao');
  const { text } = route.params;
 
   

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
    <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>   Nina aponta uma varinha para o pergaminho gigante e aparecem as opções de raça: 
</Text>
        
    </View>  
    <View style={{
        top: 100, left: 90}}>
      <RadioButton.Group 
      onValueChange={value => setValue(value)} 
      value={value}>       
      <View style={{flexDirection: "row"}}>
      <View >
        <Text style={{color: "black"}}>Anão</Text>        
        <RadioButton value="Anão"color='yellow' uncheckedColor='grey'/>
      </View>     
      <View style={{left:20}}>
        <Text style={{color: "black"}}>Draconato</Text>
        <RadioButton value="Draconato" color='yellow' uncheckedColor='grey'/>
      </View >
      <View style={{left:40}}>
        <Text style={{color: "black"}}>Elfo</Text>
        <RadioButton value="Elfo" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:60}}>
        <Text style={{color: "black"}}>Gnomo</Text>
        <RadioButton value="Gnomo" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:80}}>
        <Text style={{color: "black"}}>Halfling</Text>
        <RadioButton value="Halfling" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:100}}>
        <Text style={{color: "black"}}>Humano</Text>
        <RadioButton value="Humano" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:120}}>
        <Text style={{color: "black"}}>Meio-Elfo</Text>
        <RadioButton value="Meio-Elfo" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:130}}>
        <Text style={{color: "black"}}>Meio-Orc</Text>
        <RadioButton value="Meio-Orc" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:150}}>
        <Text style={{color: "black"}}>Tiefling</Text>
        <RadioButton value="Tiefling" color='yellow' uncheckedColor='grey'/>
      </View>
      </View>
    </RadioButton.Group>
      </View>                      
   
   <TouchableOpacity style={{top: 280, position: 'absolute', left: 720}} onPress={() => {navigation.navigate('Fala47', {value: value, text: text})}}>
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setad.png')} /> 
   </TouchableOpacity>

   <TouchableOpacity style={{top: 275, position: 'absolute', left:-25}} onPress={() => {
          navigation.navigate('Fala45', { text: text})}}>
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
export default Fala46;