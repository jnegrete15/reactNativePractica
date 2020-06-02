import React from 'react'
import {StyleSheet, View, TextInput, Text, Button} from 'react-native'
//import AppLayout from './src/AppLayout'
import Function from '../../../../functions/functions' 

function Body(props){

    

    login = () => {Function.logearse("Hola, te has logueado exitosamente")}

    return(

        <View style={styles.body}>
              
            <View style={{marginBottom:15}}>
                <Text style={{fontSize:30}}>{props.title}</Text>
            </View>
            
            <Text>Usuario</Text>
            <TextInput placeHolder="Usuario" 
            placeholderTextColor="black" maxLength={10} style={styles.input}  
            //onChangeText={(userName) => this.setState({userName})}
            >
            </TextInput>

            <Text>Contraseña</Text>
            <TextInput placeHolder="Contraseña" 
            placeholderTextColor="black" maxLength={10} style={styles.input}  
            //onChangeText={(password) => this.setState({password})}
            >
            </TextInput>

            <Button style={styles.btnLogin} title="login" onPress={login}/>
            
        
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        flex:3,
        alignItems: 'center',
        justifyContent: 'center' 
      },
      input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginTop:10,
        width: 300,
        height:30,
        marginBottom:30
    }, 
    btnLogin:{
        width:200,
        height:20
    }
})

export default Body