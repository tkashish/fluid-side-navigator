import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import NavigatableScreen from './NavigatableScreen';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
// create a component
class Map extends Component {
    navigateTo = (route, restoreCurrentScreen) => {
        console.log("navigating to " + route);
        if (route == 'Map') {
            restoreCurrentScreen()
            return
        }
        this.props.navigation.navigate(route)
    }
    render() {
        return (
            <NavigatableScreen navigation={this.props.navigation} navigate={this.navigateTo} style={{ backgroundColor: '#76b39d' }}>
                <View style={{ flex: 1, width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 100 }}>Map</Text>
                </View>
            </NavigatableScreen>
        );
    }
}

export default Map;
