import React, {Component} from 'react'
import {FlatList, View, Text} from 'react-native'
import ListLayout from './components/listLayout'

class Lista extends Component{
    constructor(props){
        super(props)
        this.state = {
            misPeliculas : [ 
                {
                    name: "El conjuro",
                    tipo: "Terror",
                    calificacion: "4.5",
                    duracion: "150 min",
                    key: 0
                },
                {
                    name: "Hombres de negro",
                    tipo: "Acción",
                    calificacion: "4.5",
                    duracion: "137 min",
                    key: 1
                },
                {
                    name: "Avengers: End Game",
                    tipo: "Acción",
                    calificacion: "5.0",
                    duracion: "210 min",
                    key: 2
                },
                {
                    name: "En dónde están los Millers",
                    tipo: "Comedia",
                    calificacion: "4.2",
                    duracion: "95 min",
                    key: 3
                },
                {
                    name: "Aladdin",
                    tipo: "Animada",
                    calificacion: "4.0",
                    duracion: "105 min",
                    key: 4
                }
            ]
        }
    }

    separador = () => {
        return(
            <View style={{
                height: 5,
                width: '100%',
                backgroundColor: 'black',
                 marginVertical: 10
            }
            }>

            </View>
        )
    }

    render(){

        return(
            <FlatList
                data={this.state.misPeliculas}
                renderItem={ ({item}) => <ListLayout data={item} />}
                ItemSeparatorComponent={this.separador}
                ListEmptyComponent={<Text>No hay elemento en la lista</Text>}
            >

            </FlatList>
        )
    }
}

export default Lista



