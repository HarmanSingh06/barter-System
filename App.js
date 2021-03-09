import * as React from 'react';
import {View,StatusBar} from 'react-native'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

// Importing Screens and components over here
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator.js'
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import {AppStackNavigator} from './components/AppStackNavigator';
export default class App extends React.Component{
  render(){
    return(
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <AppContainer/>
      </View>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Drawer:{screen: AppDrawerNavigator},
  WelcomeScreen:{screen:WelcomeScreen},
  TabNavigator:{screen:AppTabNavigator},
  StackNavigator:{screen:AppStackNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)