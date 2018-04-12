import React from 'react'
import {TabNavigator,addNavigationHelpers,StackNavigator,NavigationActions} from 'react-navigation'
import {View,Text,Button,} from 'react-native'
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addListener } from '../../src/utils/redux';


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
export const  AppNavigator = StackNavigator({
    TabBar:{screen:TabbarNavigator},
    Home:{screen:HomeScreen},
    NewsList:{screen:NewsList},
    NewsDetail: {screen: DetailScreen}
});

class App extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };
    constructor(props:any) {
        super(props);
        const navigation = addNavigationHelpers({ state: this.props.nav, dispatch: this.props.dispatch });
        navigation.dispatch(NavigationActions.init());
    }

    render() {
        const { dispatch, nav} = this.props;
        return (
          <AppNavigator navigation={addNavigationHelpers({dispatch,state:nav,addListener})}/>
        );
  }
}
const mapStateToProps = (state)=> ({
    nav:state.nav
})

export default connect(mapStateToProps)(App);
