import * as React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

// Importing Screens and components over here
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator.js'
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Drawer:{screen: AppDrawerNavigator},
  WelcomeScreen:{screen:WelcomeScreen},
  TabNavigator:{screen:AppTabNavigator},

})

const AppContainer = createAppContainer(SwitchNavigator)