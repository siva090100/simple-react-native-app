import React, {Component } from 'react' 
import { View,Text } from 'react-native' 
import {WebView} from 'react-native-webview'
class Pointers  extends Component {
     render() {
         return(
            <View>
             <Text> Watch this tutotrial</Text>
             <WebView
               style={{ marginTop: 20, width: 320, height: 230 }}
               javaScriptEnabled={true}
               domStorageEnabled={true}
               source={{ uri: "https://www.youtube.com/watch?v=W0aE-w61Cb8" }}
             />
             </View>
            )
      }
    }
    export default Pointers