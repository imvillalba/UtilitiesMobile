import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//NAVEGATION
import 'react-native-gesture-handler';
import { createAppContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


//SCREENS
import Login from './screens/Login';
import Crear from './screens/crear';
import Editar from './screens/editar';
import Pagos from './screens/pagos';
import Dashboard from './screens/Dashboard';
import Registros from './screens/registros';


const Stack = createStackNavigator();
const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name = "Login" component = {Login}/>
            <Stack.Screen name = "Dashboard" component = {Dashboard}/>
            <Stack.Screen name = "Registros" component = {Registros}/>
            <Stack.Screen name = "Crear" component = {Crear}/>
            <Stack.Screen name = "Editar" component = {Editar}/>
            <Stack.Screen name = "Pagos" component = {Pagos}/>
          </Stack.Navigator>

    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
