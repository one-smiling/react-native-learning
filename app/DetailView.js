
import {View,Text,Button,} from 'react-native'
import React from 'react'

class DetailScreen extends React.Component {

    static navigationOptions = {
        title:'这是详情页'
    };

    static propTypes = {
        // buttonAction:React.PropTypes.func
    };

    render () {
        const {params} = this.props.navigation.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>

        )
    }
}

export default DetailScreen