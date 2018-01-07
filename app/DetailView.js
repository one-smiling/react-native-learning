
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
        const {text} = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen {'\n'} {text}</Text>
            </View>

        )
    }
}

export default DetailScreen