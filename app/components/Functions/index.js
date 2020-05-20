import React, {Component } from 'react' 
import { View,Text } from 'react-native' 
import {WebView} from 'react-native-webview'
class Functions extends Component {
     render() {
         return(
            <View>
                <Text>Watch this Tutorial</Text>
             <WebView
               style={{ marginTop: 20, width: 320, height: 230 }}
               javaScriptEnabled={true}
               domStorageEnabled={true}
               source={{ uri: "https://www.youtube.com/watch?v=V9zuox47zr0" }}
             />
             </View>
         )
        }
    }
export default Functions