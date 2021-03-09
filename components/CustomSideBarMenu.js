import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';
import db from '../config'
export default class CustomSideBarMenu extends Component {
    render() {
        return (
            <View>
                <DrawerItems {...this.props} />
                <TouchableOpacity onPress={() => {
                    firebase.auth().signOut
                    this.props.navigation.navigate("WelcomeScreen")
                }}><Text>LOG OUT</Text></TouchableOpacity>
            </View>
        )
    }
}