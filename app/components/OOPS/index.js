import React, {Component } from 'react' 
import { View,Text } from 'react-native' 
import {WebView} from 'react-native-webview'
class OOPS extends Component {
     render() {
         return(
            <View>
             <Text>Watch this tutorial</Text>
             <WebView
               style={{ marginTop: 20, width: 320, height: 230 }}
               javaScriptEnabled={true}
               domStorageEnabled={true}
               startInLoadingState={true}
               source={{ uri: "https://www.youtube.com/watch?v=ZOKLjJF54Xc" }}
             />
             </View>
            )
      }
    }
    export default OOPS