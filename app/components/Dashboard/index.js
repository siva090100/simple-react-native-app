import React, {Component } from 'react' 
import { View,Text,StyleSheet } from 'react-native'

 
class Dashboard extends Component {
   
   
     render() {
        const {navigation} =  this.props;
         return(
            <View style = {styles.head}>
              
              <Text style={styles.heading}> Hi There, This is the place to upload</Text>
              
             </View>
            
         )
     }
    }
const styles = StyleSheet.create({
    heading:  {
        paddingTop:250,
        fontSize :25,
        textAlign : 'center',
        paddingBottom: 4000
    },
    head:
    {
        backgroundColor: 'blue'
    }

});
export default Dashboard