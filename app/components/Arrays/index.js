import React, {Component } from 'react' 
import { View,Text } from 'react-native' 
import {WebView} from 'react-native-webview'
class DiagnosticTest extends Component {
     render() {
         return(
            <View>
             <Text>Watch this tutorial to learn more about Arrays</Text>
             <WebView
             javaScriptEnabled={true}
             domStorageEnabled={true}
             startInLoadingState={true}
              
             source={{uri: 'https://google.com/'}} 
    
              />
              
             </View>
             
        )
         }
    }
export default DiagnosticTest