

import { createStackNavigator } from '@react-navigation/stack';
import React from "react";

import PDF from '../Screens/PDF.js'
import Fala1 from '../Screens/Fala1'
import Fala2 from '../Screens/Fala2'
import Fala3 from '../Screens/Fala3'
import Fala4 from '../Screens/Fala4'
import Fala5 from '../Screens/Fala5'

import Fala7 from '../Screens/Fala7'
import Fala8 from '../Screens/Fala8'
import Fala9 from '../Screens/Fala9'
import Fala10 from '../Screens/Fala10'
import Fala11 from '../Screens/Fala11'
import Fala12 from '../Screens/Fala12'

import Fala14 from '../Screens/Fala14'
import Fala15 from '../Screens/Fala15'
import Fala16 from '../Screens/Fala16'

import Fala18 from '../Screens/Fala18'
import Fala19 from '../Screens/Fala19'

import Fala21 from '../Screens/Fala21'
import Fala22 from '../Screens/Fala22'
import Fala23 from '../Screens/Fala23'
import Fala24 from '../Screens/Fala24'

import Fala26 from '../Screens/Fala26'
import Fala27 from '../Screens/Fala27'
import Fala28 from '../Screens/Fala28'
import Fala29 from '../Screens/Fala29'
import Fala30 from '../Screens/Fala30'
import Fala31 from '../Screens/Fala31'
import Fala32 from '../Screens/Fala32'
import Fala33 from '../Screens/Fala33'
import Fala34 from '../Screens/Fala34'
import Fala35 from '../Screens/Fala35'
import Fala36 from '../Screens/Fala36'
import Fala37 from '../Screens/Fala37'
import Fala38 from '../Screens/Fala38'
import Fala39 from '../Screens/Fala39'
import Fala40 from '../Screens/Fala40'
import Fala41 from '../Screens/Fala41'
import Fala42 from '../Screens/Fala42'
import Fala43 from '../Screens/Fala43'
import Fala44 from '../Screens/Fala44'
import Fala45 from '../Screens/Fala45'
import Fala46 from '../Screens/Fala46'
import Fala47 from '../Screens/Fala47'
import Fala48 from '../Screens/Fala48'
import Fala49 from '../Screens/Fala49'
import Fala50 from '../Screens/Fala50'



const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator  
    screenOptions={{
        headerShown: false
      }}>
        
      <Stack.Screen name="Fala1" component={Fala1}/>  
      <Stack.Screen name="Fala2" component={Fala2}/>
      <Stack.Screen name="Fala3" component={Fala3}/>
      <Stack.Screen name="Fala4" component={Fala4}/>
      <Stack.Screen name="Fala5" component={Fala5}/>
      
      <Stack.Screen name="Fala7" component={Fala7}/>
      <Stack.Screen name="Fala8" component={Fala8}/>
      <Stack.Screen name="Fala9" component={Fala9}/>
      <Stack.Screen name="Fala10" component={Fala10}/>
      <Stack.Screen name="Fala11" component={Fala11}/>
      <Stack.Screen name="Fala12" component={Fala12}/>
      
      <Stack.Screen name="Fala14" component={Fala14}/>
      <Stack.Screen name="Fala15" component={Fala15}/>
      <Stack.Screen name="Fala16" component={Fala16}/>
      
      <Stack.Screen name="Fala18" component={Fala18}/>
      <Stack.Screen name="Fala19" component={Fala19}/>
     
      <Stack.Screen name="Fala21" component={Fala21}/>
      <Stack.Screen name="Fala22" component={Fala22}/>
      <Stack.Screen name="Fala23" component={Fala23}/>
      <Stack.Screen name="Fala24" component={Fala24}/>
     
      <Stack.Screen name="Fala26" component={Fala26}/>
      <Stack.Screen name="Fala27" component={Fala27}/>
      <Stack.Screen name="Fala28" component={Fala28}/>
      <Stack.Screen name="Fala29" component={Fala29}/>
      <Stack.Screen name="Fala30" component={Fala30}/>
      <Stack.Screen name="Fala31" component={Fala31}/>
      <Stack.Screen name="Fala32" component={Fala32}/>
      <Stack.Screen name="Fala33" component={Fala33}/>
      <Stack.Screen name="Fala34" component={Fala34}/>
      <Stack.Screen name="Fala35" component={Fala35}/>
      <Stack.Screen name="Fala36" component={Fala36}/>
      <Stack.Screen name="Fala37" component={Fala37}/>
      <Stack.Screen name="Fala38" component={Fala38}/>
      <Stack.Screen name="Fala39" component={Fala39}/>
      <Stack.Screen name="Fala40" component={Fala40}/>
      <Stack.Screen name="Fala41" component={Fala41}/>
      <Stack.Screen name="Fala42" component={Fala42}/>
      <Stack.Screen name="Fala43" component={Fala43}/>
      <Stack.Screen name="Fala44" component={Fala44}/>
      <Stack.Screen name="Fala45" component={Fala45}/>
      <Stack.Screen name="Fala46" component={Fala46}/>
      <Stack.Screen name="Fala47" component={Fala47}/>
      <Stack.Screen name="Fala48" component={Fala48}/>
      <Stack.Screen name="Fala49" component={Fala49}/>
      <Stack.Screen name="Fala50" component={Fala50}/>
      <Stack.Screen name="PDF" component={PDF}
       options={({route, navigation}) => (
        {route: {route}, 
        navigation: {navigation}}
    )}
      />   
       
      
    </Stack.Navigator>
  );
}

export { MainStackNavigator };