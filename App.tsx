import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screen/WelcomeScreen';
import HomeScreen from './src/screen/HomeScreen';
import AreaScreen from './src/screen/AreaScreen';
import ResultScreen from './src/screen/ResultScreen';
import { ShapeProvider } from './src/context/ShapeContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ShapeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Figuras Geométricas' }} />
          <Stack.Screen name="Area" component={AreaScreen} options={{ title: 'Cálculo da Área' }} />
          <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Resultado' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ShapeProvider>
  );
}