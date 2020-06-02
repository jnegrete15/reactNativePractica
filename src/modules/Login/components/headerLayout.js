import React from 'react'
import {StyleSheet, View, Image} from 'react-native'

function Header(props){

    return(
        <View style={styles.header}>
            <Image source={require('../../../../assets/ucol.png')} style={styles.logo}/>

        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        margin: 20,
        justifyContent: 'center'
    },
    headerLeft:{
        flex:1
    },
    headerRight:{
        flex:1
    },
    logo:{
        width: 100,
        height: 100
    }
})

export default Header