import React from 'react'
import {View, Text,  ScrollView} from 'react-native'

function ListLayout(props){
    
    return(
        <ScrollView>
            <View style={{marginTop: 20, alignItems: 'center', marginBottom: 20}}>
                <Text>{props.data.name}</Text>
                <Text>{props.data.tipo}</Text>
                <Text>{props.data.calificacion}</Text>
                <Text>{props.data.duracion}</Text>
            </View>
        </ScrollView>
    )
}

export default ListLayout