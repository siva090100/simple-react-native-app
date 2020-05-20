import React, { Component } from 'react' 
import { View, Text, TextInput,StyleSheet,Button,Alert,ImageBackground,ActivityIndicator } from 'react-native' 
import * as firebase from 'firebase'
//import styles from './styles'
import Firebase from './firebase'


class Home extends Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
    user: null,
    error: '',
  }

 // componentWillMount() {
   // const firebaseConfig = {
     // apiKey: '',
      //authDomain: 'tutor-83dd9.firebaseapp.com',
    //}

    //firebase.initializeApp(firebaseConfig);
  //}

  onPressSignIn() {
    this.setState({
      authenticating: true,
    });

    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => this.setState({
        authenticating: false,
        user,
        error: '',
      }))
      .catch(() => {
        // Login was not successful
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => this.setState({
            authenticating: false,
            user,
            error: '',
          }))
          .catch(() => this.setState({
            authenticating: false,
            user: null,
            error: 'Authentication Failure',
          }))
      })
  }

  onPressLogOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          email: '',
          password: '',
          authenticating: false,
          user: null,
        })
      }, error => {
        console.error('Sign Out Error', error);
      });
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    if (this.state.user !=null ) 
    {  if(this.state.email == 'admin123@admin.com')
       this.props.navigation.navigate("Dashboard")
       else
       this.props.navigation.navigate("UserMenu")
       return (
        <View style={styles.form}>
         <Text>Logged In</Text>
          <Button title = 'Log Out' onPress={() => this.onPressLogOut()}></Button>
        </View>
      )
    }

    return (
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
        <Button title ='Log in' onPress={() => this.onPressSignIn()}></Button>
        <Button title ='Sign Up' onPress={() => this.props.navigation.navigate('Signup')}></Button>
        <Text>{this.state.error}</Text>
      </View>
    )

  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
    );
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

export default Home
