import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import NavigatableScreen from './NavigatableScreen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// create a component
class Settings extends Component {
    navigateTo = (route, restoreCurrentScreen) => {
        console.log("navigating to " + route);
        if (route == 'screenC') {
            restoreCurrentScreen()
            return
        }
        this.props.navigation.navigate(route)
    }
    render() {
        return (
            <NavigatableScreen navigation={this.props.navigation} navigate={this.navigateTo} style={{ backgroundColor: '#F78E69' }}>
                <View style={{ flex: 1, width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 100 }}>Settings</Text>
                </View>
            </NavigatableScreen>
        );
    }
}

export default Settings;
