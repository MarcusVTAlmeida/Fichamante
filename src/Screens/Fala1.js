import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants';
import * as Print from 'expo-print';
import { RadioButton } from 'react-native-paper';
import { useFonts } from 'expo-font';
import * as Sharing from 'expo-sharing'

import * as ScreenOrientation from 'expo-screen-orientation';

import Swiper from 'react-native-swiper'
 
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})



function Fala1 ({ route, navigation }) {
  const [value, setValue] = React.useState('Anao');
  const [text, onChangeText] = React.useState(); 
  const [loaded] = useFonts({
    LangarRegular: require('../../assets/fonts/Langar-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
    return (
      <Swiper style={styles.wrapper} showsButtons={true}  
      nextButton={
        <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setad.png')} /> 
      }
      prevButton={
        <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
        source={require('../../assets/setae.png')} /> 
      }>        
        
      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Você anda pelas ruas da cidade Vale Púrpura ou Vale Verde, em busca de um</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>endereço que o seu Mestre te deu…</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Segundo ele, esse lugar te ajudaria a se preparar para partir em uma aventura…</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
         <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Depois de uma longa viagem, andar muito tempo se perdendo e vielas e pedir</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>informação com Orcs, Goblins e Elfos, você finalmente encontra o que parece</Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>ser o lugar certo.</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario7.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
         <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Você chega na frente dessa simpática lojinha, que se chama Nina: Fichas, Feitiços</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>e Afins.</Text>        
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario7.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
         <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Você vai em direção a porta para empurrá-la , tem uma plaquinha pendurada na</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>maçaneta escrito "aberto''.</Text>      
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Você passa pela porta encontra essa lojinha empoeirada e bagunçada, lotada de </Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>coisas estranhas e livros esquisitos, um pseudo-dragão dorme sobre a bancada,</Text> 
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>sem se importar com a sua chegada.</Text>   
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
         <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Você anda até a bancada e toca a campainha.</Text>   
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
         <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Plim Plim</Text>     
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
         <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Da porta dos fundos você escuta uma voz de uma menina.</Text>     
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Opa, um segundinho já te atendo.</Text>       
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Eita troço pesado!</Text>       
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>???</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Nina carregando uma pilha de livros com expressão de esforço</Text>           
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>De dentro da porta dos fundos, sai uma jovem Elfa carregando uma pilha</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>de livros mágicos, parecem que podem cair e te esmagar a qualquer momento.</Text>               
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>???</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Olá, uf..., Bem vindo a minha lojinha. Desculpa a , argh…, bagunça, não tem muito</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>movimento por, ai..., aqui.</Text>               
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>???</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Ufa, agora sim…</Text>                    
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>???</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Prazer, meu nome é Nina! Bem, isso você já deve saber por causa do nome da</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>loja hehe! Eu não sou muito boa com nomes. Nina: Ah! E esse é o Calcifer meu fiel</Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>ajudante, segurança da loja e mascote nas horas vagas!</Text>                    
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{ height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>E aí, como eu posso te chamar:</Text>     
        <TextInput style={{ height: 30, width: 400, borderColor: '#FFF', borderWidth: 1, top: 305, left: "12%", fontFamily: 'LangarRegular', position: 'absolute'}}
        color= 'black'
        backgroundColor= '#D9E3F0'
        selectionColor= 'black'
        onChangeText={text => onChangeText(text)}
        value={text}
      />                    
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>       
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
         <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Muito Prazer, {JSON.stringify(text)}</Text>                      
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Bom, mas me fala, em que eu posso te ajudar hoje?</Text>                       
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>ESPERA! UM MESTRE TE MANDOU AQUI? VOCÊ É UM AVENTUREIRO!!</Text> 
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>ISSO É INCRÍVEL!!</Text> 
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Esse é com certeza o meu tipo favorito de trabalho!</Text>                             
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Bom mas vamos começar por partes, o que eu vou te ajudar a criar hoje é a seu</Text> 
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>PERSONAGEM!</Text>                       
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Eu te ajudo com isso preenchendo a sua FICHA DE PERSONAGEM, nela vai conter.</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>todos os dados e informações que você vai precisar para entrar em uma aventura</Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>com ele.</Text>                          
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Criar o seu próprio personagem é a parte mais importante para entrar em uma</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>aventura de RPG, “Role Playing Game” ou Jogo de Interpretação! Você, como jogador, </Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>vai entrar no papel de um aventureiro, o qual você vai poder escolher a aparência,</Text>
        <Text style={{fontSize: 16, color: "black", top: 310, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>personalidade, história e ações, enquanto o seu mestre vai narrar o mundo à sua volta.</Text>                               
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')}/>
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>A ficha é a responsável por conter todo tipo de informação que você vai utilizar</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>durante a história, como força, inteligência, habilidades, itens, dinheiro, armas e</Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>mais o que o seu personagem tem.</Text>                                 
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>No seu caso, o personagem vai ser criado dentro do sistema de Dungeons &</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Dragons, que foi escolhido pelo seu mestre para narrar a história!</Text>                                 
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>O que é um sistema, você me pergunta? Bom, um sistema é um conjunto de regras</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>contendo um universo em que uma história pode ser contada…</Text>                                 
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Ele define todas as regras como, os monstros que existem, que tipo de</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>ataque tem, quanto podem acertar, etc…</Text>                                 
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Ele também define o que você pode escolher para montar seu personagem, como</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>a raça, classe, as armas… Isso tudo visando garantir um jogo equilibrado e uma</Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>história divertida!</Text>                                
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>A partir desse sistema, vamos preencher todas as partes necessárias para jogar</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>com o seu personagem</Text>                                
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Uma parte não vai ser preenchida aqui comigo, essa parte é a backstory ( incluindo</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>nome e gênero), a história do seu personagem antes de entrar na aventura, essa parte deve</Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>deve ser discutida junto com o seu mestre, pra ver se a narrativa do seu personagem</Text>
        <Text style={{fontSize: 16, color: "black", top: 310, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>encaixa com a aventura.</Text>                               
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Mas não se preocupe com isso! A ficha que vamos criar juntos é personalizável,</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>depois você terá acesso a ela e poderá modificar o que quiser.</Text>                       
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Ah, lembrando que aqui faremos uma ficha no nível 1, e conforme o seu</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>personagem for avançando na história, mais experiência ele adquire e mais forte</Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>ele vai se tornando, isso pode ser ajustado na sua ficha manualmente no futuro!</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>O que eu vou te ajudar a preencher são as partes mais técnicas do personagem,</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>elas que definem atributos e coisas do tipo.</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Okay, então o primeiro atributo a ser preenchido são as Raças… </Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Eita, espera aí!Calcifer, puxa o meu painel fazendo um favorzinho.</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>O Pseudodragão puxa da lateral direita da tela um pergaminho gigante e flutuante,</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>tem partículas mágicas magias em volta dele, é nele que vão aparecer as opções a </Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>serem escolhidas.</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Muito Obrigada!, bom assim facilita eu te mostrar as opções não é?</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Cada personagem tem uma raça, a escolha dela ajuda a determinar a identidade  </Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>do seu aventureiro, a aparência física e os talentos naturais que ele tem!</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Algumas raças se dão melhor em algumas tarefas que outras, mas isso não</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>precisa ser determinante, o importante é ser criativo na hora da criação!</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
       <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
       <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Bom, mas chega de papo, hora de escolher!</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
       <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Nina aponta uma varinha para o pergaminho gigante e aparecem as opções de raça:</Text>
       <View style={{
        top: 125, left: -70}}>
      <RadioButton.Group 
      onValueChange={value => setValue(value)} 
      value={value}>       
      <View style={{flexDirection: "row"}}>
      <View >
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Anão</Text>        
        <RadioButton value="Anão"color='yellow' uncheckedColor='grey'/>
      </View>     
      <View style={{left:4}}>
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Draconato</Text>
        <RadioButton value="Draconato" color='yellow' uncheckedColor='grey'/>
      </View >
      <View style={{left:15}}>
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Elfo</Text>
        <RadioButton value="Elfo" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:15}}>
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Gnomo</Text>
        <RadioButton value="Gnomo" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:20}}>
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Halfling</Text>
        <RadioButton value="Halfling" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:25}}>
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Humano</Text>
        <RadioButton value="Humano" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:30}}>
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Meio-Elfo</Text>
        <RadioButton value="Meio-Elfo" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:35}}>
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Meio-Orc</Text>
        <RadioButton value="Meio-Orc" color='yellow' uncheckedColor='grey'/>
      </View>
      <View style={{left:40}}>
        <Text style={{color: "black", fontFamily: 'LangarRegular'}}>Tiefling</Text>
        <RadioButton value="Tiefling" color='yellow' uncheckedColor='grey'/>
      </View>
      </View>
    </RadioButton.Group>
      </View>           
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Apertando uma opção, eu te dou mais detalhes sobre ela. Assim que tiver certeza,</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>aperte o botão. Se precisar voltar mais tarde, aperte no botão retornar do </Text>
        <Text style={{fontSize: 16, color: "black", top: 295, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>diálogo.</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
        <Image style={{  height: 200,
          width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
          source={require('../../assets/CaixaDialogo3.png')} />
        <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>No seu caso, o personagem vai ser criado dentro do sistema de Dungeons &</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>Dragons, que foi escolhido pelo seu mestre para narrar a história!</Text>
      </ImageBackground>

      <ImageBackground style={styles.slide1}  source={require("../../assets/Cenario2.jpg")}>         
      <View >   

      
        
        
<Button title="Resultado" onPress={()=>{
  
  Print.printAsync({
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
      </ImageBackground>

      </Swiper>
    )
  
}
export default Fala1;