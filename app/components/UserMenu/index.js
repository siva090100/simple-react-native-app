import React, {Component } from 'react' 
import { Button, View, Text } from 'react-native' 
import styles from './styles'
 
class UserMenu extends Component {
     render() {
      const {button,stretch} = styles
        const {navigation} =  this.props;
         return(
            <View style = {button}>
             <Text>Welcome to the User Menu:{JSON.stringify(navigation.getParam('username'))} </Text>
             <Button title = "Arrays" 
               onPress={() => this.props.navigation.navigate('Arrays')} />
             <Button title = "Strings"
               onPress={() => this.props.navigation.navigate('Strings')} />
               <Button title = "Pointers"
               onPress={() => this.props.navigation.navigate('Pointers')} />
               <Button title = "Functions"
               onPress={() => this.props.navigation.navigate('Functions')} />
               <Button title = "OOPS"
               onPress={() => this.props.navigation.navigate('OOPS')} />
             
             
             </View>
            
      )
         }
    }
export default UserMenu