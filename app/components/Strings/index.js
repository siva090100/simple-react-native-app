import React, {Component } from 'react' 
import { View,Text } from 'react-native' 
import {WebView} from 'react-native-webview'
class Strings extends Component {
     render() {
         return(
            <View>
             <Text>Watch this tutorial to know more about Strings</Text>
             <WebView
               style={{ marginTop: 20, width: 320, height: 230 }}
               javaScriptEnabled={true}
               domStorageEnabled={true}
               source={{ uri: "https://www.youtube.com/watch?v=dAxQkg9IXP8" }}
             />
             </View>
            
         )
     }
    }
export default Strings