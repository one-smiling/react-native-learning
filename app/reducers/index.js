 
import { combineReducers } from 'redux'
import { AppNavigator } from '../navigators/AppNavigator';

const navReducer = (state, action)=> {
    const nextState = AppNavigator.router.getStateForAction(action,state);
    return nextState || state
}

const AppReducer = combineReducers({
  nav:navReducer
});

export default AppReducer