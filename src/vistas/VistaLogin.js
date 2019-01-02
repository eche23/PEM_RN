/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 /////////////////ABRIR CONSOLA POR URL: localhost:8081/debugger-ui/////////////////////////////////////////

 /////////////////INSTALAR NAVEGACION: npm install --save react-navigation/////////////////////////////////////////


import React, {Component} from 'react';
import {View, ToolbarAndroid, TextInput, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

import VistaRegistro from './VistaRegistro'



export default class VistaLogin extends Component{

    constructor(props){
        super(props)
        this.state = {
            usernameOrigen: 'admin',
            passwordOrigen: '1234'
        }

        this.modificarPassword = this.modificarPassword.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    //declarar variables de la clase
    usernameLeido = ''
    passwordLeido = ''

    //declarar metodos
    modificarPassword(nuevoPassword) {
        if(this.usernameLeido == this.state.usernameOrigen){
            this.setState( {
                passwordOrigen: nuevoPassword
            })
        }
    }

    onClick(queBoton){
        console.log(queBoton)
        if(queBoton == 'Registrar'){
            this.props.navigation.navigate('Registro', {
                username: this.usernameLeido, 
                password: this.passwordLeido
            })
        }
    }


  render() {
    return (
      <View>    
                <ToolbarAndroid
                    style={styles.toolbar}
                    logo={require('../assets/imagen1.png')}
                    title="PEMApp" />
                <View style={styles.bloque}>
               
                    <TextInput
                        underlineColorAndroid={'blue'}
                        style={styles.textEdit_dato}
                        placeholder={'Username'}
                        placeholderTextColor='gray'
                        onChangeText = {(texto) => {this.usernameLeido=texto}}
                        />
                        
                    <TextInput
                        underlineColorAndroid={'blue'}
                        secureTextEntry={true}
                        style={styles.textEdit_dato}
                        placeholder={'Password'}
                        placeholderTextColor='gray'
                        onChangeText = {(texto) => {this.passwordLeido=texto}}
                        />
                    
                    <Button
                        title = {'Entrar'}
                        fontSize = {20}
                        fontWeight = {'normal'}
                        color = {'blue'}
                        buttonStyle={styles.boton}
                        onPress={() => this.onClick('Entrar')}
                    />

                    <Button
                        title = {'Registrar'}
                        fontSize = {20}
                        fontWeight = {'normal'}
                        color = {'blue'}
                        buttonStyle={styles.boton}
                        onPress={() => this.onClick('Registrar')}
                    />

                    <Button
   			            title = {'Cambiar contraseña'}
   			            fontSize = {20}
   			            fontWeight = {'normal'}
   			            color = {'blue'}
   			            buttonStyle={styles.boton}
                        onPress={() => this.modificarPassword(this.passwordLeido)}
    		    />



                </View>
</View>

    );
  }
}

const styles = StyleSheet.create ({
  toolbar: {
      height: 56,
      backgroundColor: '#b4c7e7',
  },
  bloque: {
      marginTop: 48,
  },
  textEdit_dato: {
      marginLeft: 30, 
      marginRight: 30, 
      marginBottom: 10,
      height: 70, 
      fontSize: 20, 
  },
  boton: {
      marginTop: 10,
      backgroundColor: 'transparent',
  }, 
  textoRecuerdame: {
     textAlign: 'center',
     color: 'blue',
     fontSize: 20,
  },
})