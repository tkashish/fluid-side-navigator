import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatableScreen from './NavigatableScreen';
import BottomNavigation from './BottomNavigation';
const SCREEN_WIDTH = Dimensions.get('window').width;
const { height, width } = Dimensions.get('window');

class Home extends Component {
    navigateTo = (route, restoreCurrentScreen) => {
        console.log("navigating to " + route);
        if (route == 'Home') {
            restoreCurrentScreen()
            return
        }
        this.props.navigation.navigate(route)
    }

    componentWillUnmount() {
        console.log("Home component will  unmount");
    }

    render() {
        return (
            <NavigatableScreen navigation={this.props.navigation} navigate={this.navigateTo}>
                <View style={{ flex: 1, width: SCREEN_WIDTH, alignItems: 'center' }}>
                    <Text style={{ fontSize: 100 }}>Hello</Text>
                    <Text style={{ fontSize: 100 }}>Hello</Text>
                    <BottomNavigation
                        style={{
                            color: '#0000b3'
                        }}
                    >
                        <Icon
                            name='rowing'
                            color='#0000b3'
                            size={height * 0.04}
                            onPress={() => {
                                console.log(width);
                            }}
                        />
                        <Icon
                            name='g-translate'
                            color='#0000b3'
                            size={height * 0.04}
                        />

                        <Icon
                            name='sc-telegram'
                            type='evilicon'
                            color='#0000b3'
                            size={height * 0.04}
                        />
                    </BottomNavigation>
                </View>
            </NavigatableScreen>
        );
    }
}

export default Home;
