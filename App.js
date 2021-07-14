import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { MainStackNavigator } from './src/Navigator/MainStack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
      </NavigationContainer>
  );
}