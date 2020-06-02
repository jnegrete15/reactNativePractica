import React, {Component} from 'react';
import {StyleSheet, ImageBackground, Button} from 'react-native';
import Header from './containers/header'
import Body from './containers/body'
import Footer from './containers/footer'

//export ANDROID_SDK=/home/jnegrete/Android/sdk
class Login extends Component {
  
    flatList = () => {
        this.props.navigation.navigate('List')
    }

    constructor(props){
    super(props)
    this.state={
      saludo: 'Saludos clase de apps',
      user: 'Negrete',
      password: '',
      userSuma: 0,
      userName: '',
      logeado: false
    }
  }

  sumarUsuario = () => {
    this.setState({
      userSuma: this.state + 1
    })
  }

  
  render(){
    let {saludo} = this.state
    let {user} = this.state
    let {userName} = this.state

    return(
      <ImageBackground source={require('../../../assets/playa.jpeg')} style={styles.container} >
        <Header/>
        <Body/>
        <Button title="Ejemplo FlatList" style={styles.btnFlatList} onPress={this.flatList}/>
        <Footer/>
      </ImageBackground>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',  
  },
  btnFlatList:{
    marginTop:20,
    width:40,
    height:20
}
  
})

export default Login
