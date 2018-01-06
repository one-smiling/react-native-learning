import {StackNavigator} from 'react-navigation'
import React from 'react';
import { View, Text , Button} from 'react-native';



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

class DetailScreen extends React.Component {

    static navigationOptions = {
        title:'这是详情页'
    }

    render () {

        const {params} = this.props.navigation.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen {params.user}</Text>
            </View>

        )
    }
}

const  RootNavigator = StackNavigator({
    Home:{
        screen:HomeScreen,

    },
    Details: {
        screen: DetailScreen,
    }
});

export default RootNavigator;

