import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator, Image, ImageBackground, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//COLORS
//import { BackgroundColor,Beige, ElementColor, LetterOnElementColor, LetterOnInput, BackgroundOnInput } from '../utils/colors.js'
//Iconos
import { Ionicons } from '@expo/vector-icons';


export default class Crear extends React.Component
{
    back = () => {
        this.props.navigation.navigate('Dashboard')
    }

render()
{
const self = this;
return (
    <ImageBackground
    style={{ flex: 1 , opacity:1}}
    source={require('../assets/fondoMobile.png')}>
        <View style={styles.container}>
            <Text style={styles.logo}>NUEVO SERVICIO</Text>
            <View style={styles.inputView} >
                    <TextInput
                    style={styles.inputText}
                    keyboardType="email-address"
                    placeholder="Nombre del servicio"
                    placeholderTextColor="#003f5c"
                    
                    returnKeyType="next"
                    value = {""}/>
            </View>
            <View style={styles.inputView} >
                    <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Número cuenta de contrato"
                    placeholderTextColor="#003f5c"
                    value = {""}/>
            </View>
            <View style={styles.inputView} >
            <Ionicons style={styles.searchIcon} name="search-outline" size={20} color="#212121" />
                    <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Empresa del servicio"
                    placeholderTextColor="#003f5c"
                    value = {""}/>
            <Ionicons style={styles.searchIcon2} name="chevron-down-outline" size={20} color="#212121" />
            </View>
            <View style={styles.inputView} >
            <Ionicons style={styles.searchIcon} name="search-outline" size={20} color="#212121" />
                    <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Seleccionar icono"
                    placeholderTextColor="#003f5c"
                    value = {""}/>
            <Ionicons style={styles.searchIcon2} name="chevron-down-outline" size={20} color="#212121" />
            </View>
            <View style={styles.inputView} >
            <Ionicons style={styles.searchIcon} name="search-outline" size={20} color="#212121" />
                    <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Frecuncia de pago"
                    placeholderTextColor="#003f5c"
                    value = {""}/>
            <Ionicons style={styles.searchIcon2} name="chevron-down-outline" size={20} color="#212121" />
            </View>
            
            <TouchableOpacity style={styles.loginBtn} onPress={this.back} >
                <Text style={styles.loginText}> CREAR </Text>
            </TouchableOpacity>
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
LogoUtilities: {
    marginLeft:100,
    marginTop:150
},
logo:{
color:"#212121",
fontWeight:"bold",
fontSize:22,
marginLeft: 130,
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
borderRadius:5,
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
searchIcon2:{
    position: 'absolute',
    right: 20
},
});
