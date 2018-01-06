
import {View,Text,Button,} from 'react-native'
import React from 'react'
import { connect } from 'react-redux';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title:'这是首页'
    }
    render () {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button onPress={()=>navigate('Details',{'user':'lucy'})} title= 'Go to details'/>
            </View>
        )
    }
}

