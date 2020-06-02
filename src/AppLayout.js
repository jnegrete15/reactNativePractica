import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function AppLayout(props){
    return(
        <View style={styles.container}>
            
            <Text style={styles.login}>Login de usuario</Text>
            <Text>Usuario: {props.user}</Text>
            <Text>Contraseña: {props.password}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',  
    },
    login: {
        fontSize: 25
    }
})
export default AppLayout