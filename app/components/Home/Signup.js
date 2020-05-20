import React, { Component } from 'react' 
import { View, Text, TextInput,StyleSheet,Button,Alert,ImageBackground,ActivityIndicator } from 'react-native' 
import * as firebase from 'firebase'
//import styles from './styles' 
import Firebase from './firebase'
class Signup extends Component {
    state = {
        email: '',
        password: '',
        authenticating: false,
        user: null,
        error: '',
      }
      signup()
      {
        const { email, password } = this.state;
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => console.log(error))

      }
     render() {
         return(
            <View style={styles.form}>
        <ImageBackground style ={styles.stretch} source = {require('./pic1.jpg')} />
        <TextInput
          placeholder='Enter your email...'
          label='Email'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder='Enter your password...'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        
        <Button title ='Sign Up' onPress={() => this.signup()}></Button>
        <Text>{this.state.error}</Text>
      </View>
            )
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
        },
        form: {
          flex: 1
        },
        stretch: {
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'
        }
      });
      
      export default Signup
