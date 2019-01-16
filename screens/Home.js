import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatableScreen from './NavigatableScreen';
import BottomNavigation from './BottomNavigation';
import { MapView } from 'expo';

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
                <View style={{ flex: 1, width, alignItems: 'center' }}>
                    {/* <FlatList
                        data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'ggggggggggggg' }]}
                        renderItem={({ item }) => <Text style={{ fontSize: 100 }}>{item.key}</Text>}
                    /> */}
                    <MapView
                        style={{ flex: 1, width: width }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <BottomNavigation
                        style={{
                            color: '#0000b3'
                        }}
                    >
                        <Icon
                            name='rowing'
                            color='#0000b3'
                            size={height * 0.04}
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
