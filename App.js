
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import { middleware } from './src/utils/redux';

//src react-navigation官方Demo ReduxExample
// import AppReducer from './src/reducers';
// import AppWithNavigationState from './src/navigators/AppNavigator';

//app 
import AppWithNavigationState from './app/navigators/AppNavigator'
import AppReducer from './app/reducers';

class ReactNativeLearnApp extends React.Component {
    store = createStore(
      AppReducer,
      applyMiddleware(middleware),
    );
    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default ReactNativeLearnApp 
