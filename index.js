import { AppRegistry ,TextInput, StyleSheet} from 'react-native';
import React,{Component} from 'react';
import TestView from 'app/TestView'

class App extends Component {
    render() {
        return(
            <TestView/>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);


