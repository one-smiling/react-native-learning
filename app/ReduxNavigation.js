import {TabNavigator,addNavigationHelpers,StackNavigator,NavigationActions} from 'react-navigation'
import {createReduxBoundAddListener,createReactNavigationReduxMiddleware,} from 'react-navigation-redux-helpers';
import {View,Text,Button,} from 'react-native'
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import React from 'react'
import HomeScreen from 'app/HomeView'
import DetailScreen from 'app/DetailView'
import NewsList from 'app/NewsList'

//底部的tabBar导航
const TabbarNavigator = TabNavigator({
        Home:{screen:HomeScreen},
        Details:{screen:DetailScreen},
        TabBarNewsList:{screen:NewsList}
    },
    {
    initialRouteName: 'Home'
    }
);

//整个应用的路由栈
const AppNavigator = StackNavigator({
    TabBar:{screen:TabbarNavigator},
    Home:{screen:HomeScreen},
    NewsList:{screen:NewsList},
    NewsDetail: {screen: DetailScreen}

});


const navReducer = (state, action)=> {
    const nextState = AppNavigator.router.getStateForAction(action,state);
    return nextState || state
}

const appReducer = combineReducers({
    nav:navReducer
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class  App extends React.Component {
    render () {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch:this.props.dispatch,
                state:this.props.nav,
                addListener,
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