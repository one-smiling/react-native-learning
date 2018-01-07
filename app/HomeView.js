
import {View,Text,Button,} from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import {genItemData} from 'app/NewsList'


const data = genItemData(100)
class HomeScreen extends React.Component {
    static navigationOptions = {
        title:'这是首页'
    }
    render () {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button onPress={this.props.showDetail} title= 'Go to details'/>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    showDetail: () => dispatch(NavigationActions.navigate({ routeName: 'NewsList',params:data })),
})

export default connect(null,mapDispatchToProps)(HomeScreen)

