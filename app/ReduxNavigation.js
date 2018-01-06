import {TabNavigator,addNavigationHelpers,StackNavigator} from 'react-navigation'
import {View,Text,Button,} from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import React from 'react'


import TestView from 'app/TestView'



class DetailScreen extends React.Component {

    static navigationOptions = {
        title:'这是详情页'
    }
    render () {
        const {params} = this.props.navigation.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>

        )
    }
}


//底部的tabBar导航
const TabbarNavigator = TabNavigator({
        Home:{screen:HomeScreen},
        Details:{screen:DetailScreen}
    },
    {
    initialRouteName: 'Home'
    }
);

//整个应用的路由栈
const AppNavigator = StackNavigator({
    Home:{screen:HomeScreen},

    NewsDetail: {
        screen: TestView
    }
});


const navReducer = (state, action)=> {

    const nextState = AppNavigator.router.getStateForAction(action,state);

    return nextState || state
}

const appReducer = combineReducers({
    nav:navReducer
});


class  App extends React.Component {
    render () {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch:this.props.dispatch,
                state:this.props.nav
            })}/>
        )
    }
}
const mapStateToProps = (state)=> ({
    nav:state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)

const store = createStore(appReducer)

class  Root extends React.Component {
    render () {
        return(
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }
}

export default  Root;