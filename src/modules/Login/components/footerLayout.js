import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

function Footer(props){

    return(
    <View style={styles.footer}>
        <View> 
            <Text>{props.comunidad}</Text>
        </View>

        <View>
            <Text>{props.contactanos}</Text>
        </View>

        <View>
        <Image source={require('../../../../assets/ucol.png')} style={{width:50, height:50}}/>
        </View>
    </View>
    )
}

const styles= StyleSheet.create({
    footer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-around'
      }
})

export default Footer