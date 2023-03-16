import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator, Image, ImageBackground, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import Login from './Login';
import Crear from './crear';
import Editar from './editar';
import Pagos from './pagos';
import Registros from './registros';




const Menu = createDrawerNavigator();

export default class Dashboard extends React.Component
{

render()
{
const self = this;
return (
    <ImageBackground
    style={{ flex: 1 , opacity:1}}
    source={require('../assets/fondoMobile.png')}>
        <Menu.Navigator>
            <Menu.Screen name="HOME" component={Registros}/>
            <Menu.Screen name="CREAR SERVICIO" component={Crear}/>
            <Menu.Screen name="EDITAR SERVICIO" component={Editar}/>
            <Menu.Screen name="PRÓXIMOS PAGOS" component={Pagos}/>
            <Menu.Screen name="CERRAR SESIÓN" component={Login}/>


        </Menu.Navigator>

    </ImageBackground>
    );
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#FB5B5A00"
},
LogoUtilities: {
    marginLeft:60,
    marginTop:150
},
logo:{
color:"#212121",
fontWeight:"bold",
fontSize:22,
marginLeft: 80,
marginTop: 50,
marginBottom:70,
},

support_scrooll_view: {
flex: 1,
alignItems: 'center',
justifyContent: 'flex-end'
},

inputView:{
width:"85%",
borderRadius:10,
height:1,
marginLeft:30,
marginBottom:30,
justifyContent:"center",
padding:20,
flexDirection: 'row',
alignItems: 'center',
backgroundColor:"#ffffff",
borderWidth:2,
},
inputText:{
height:40,
color:'black',
flex: 1,
paddingTop: 10,
paddingRight: 10,
paddingBottom: 10,
paddingLeft: 25,
},
loginBtn:{
width:"40%",
borderRadius:10,
height:45,
alignItems:"center",
justifyContent:"center",
marginLeft:"50%",
marginTop:40,
marginBottom:10,
backgroundColor:"#1EA49F",
},
loginText:{
color:"#ffffff",
fontWeight:"bold"
},
searchIcon:{
    position: 'absolute',
    left: 20
},
});
