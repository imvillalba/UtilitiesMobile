import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator, Image, ImageBackground, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";



export default class Registros extends React.Component
{

render()
{
const self = this;
return (
    <ImageBackground
    style={{ flex: 1 , opacity:1}}
    source={require('../assets/fondoMobile.png')}>

        <View style={styles.container}>

        <Image source={require('../assets/dashboard.png')} style={styles.LogoUtilities}></Image>
            <Text style={styles.logo}>SERVICIOS REGISTRADOS</Text>
        </View>

        <View style={styles.contenedor}>
            <FlatList
            data={[
                {key: 'RECIBO DE LA LUZ'},
                {key: 'RECIBO DE AGUA'},
                {key: 'RECIBO DE INTERNET'},
                {key: 'RECIBO DE EL GAS'},
                ]}
                renderItem={({item}) => 
                    <Text style={styles.item}>{item.key}</Text>}/>

        </View>
    </ImageBackground>
    );
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#FB5B5A00"
},
contenedor:{
    flex: 1,
    backgroundColor:"#ffffff",
    borderWidth:3,
    borderRadius:5,
    padding:30,
    borderColor:"#5E5E5E",
    marginTop:30,
    marginLeft:60,
    width:300,
},

item:{
    borderWidth:3,
    borderRadius:3,
    padding:10,
    height:80,
    borderColor:"#5E5E5E",
    fontSize:18,
    fontWeight:600,
},

LogoUtilities: {
    marginLeft:60,
    marginTop:100
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
