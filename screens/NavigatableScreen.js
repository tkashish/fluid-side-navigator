import React, { Component } from 'react';
import { View, Text, Dimensions, Animated, TouchableOpacity, Easing, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const navigationList = ['Home', 'Map', 'Settings',];

class TouchableWithoutOpacity extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={1} style={this.props.style} onPress={this.props.onPress}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

class NavigatableScreen extends Component {

    constructor(props) {
        super(props);
        this.ShowMenuAnim = new Animated.Value(0);
        this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.hide();
            }
        );
    }

    componentWillMount() {
        this.ShowMenuAnim = new Animated.Value(1);
        this.hide();
    }

    show = () => {
        Animated.timing(
            this.ShowMenuAnim, {
                toValue: 1,
                duration: 500,
                easing: Easing.elastic(0.5)
            }).start()
    }

    hide = () => {
        Animated.timing(
            this.ShowMenuAnim, {
                toValue: 0,
                duration: 500,
                easing: Easing.elastic(0.5)
            }).start()
    }

    renderNavigationList = (item) => {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigate(item, this.hide)}>
                <Text style={{ fontSize: Math.floor(SCREEN_WIDTH * 0.08), fontWeight: '300', marginTop: SCREEN_HEIGHT * 0.05 }}>{item}</Text>
            </TouchableWithoutFeedback>
        );
    }

    render() {

        const iconPosition = this.ShowMenuAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [SCREEN_WIDTH, -100]
        });
        const screenLeft = this.ShowMenuAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, SCREEN_WIDTH * 0.7]
        });
        const screenHeight = this.ShowMenuAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [SCREEN_HEIGHT, SCREEN_HEIGHT * 0.7]
        });
        const borderRadius = this.ShowMenuAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, SCREEN_WIDTH / 50]
        });
        const listPosition = this.ShowMenuAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, SCREEN_WIDTH]
        });

        const AnimatedTouchable = Animated.createAnimatedComponent(TouchableWithoutOpacity);

        return (
            <View style={styles.screenStyle}>
                <Animated.View style={{ left: listPosition, paddingTop: SCREEN_HEIGHT * 0.1, paddingLeft: SCREEN_WIDTH * 0.05, width: SCREEN_WIDTH * 0.7 }}>
                    <Text style={{ fontSize: Math.floor(SCREEN_WIDTH * 0.1), fontWeight: 'bold', marginBottom: 30 }}>Company Name Name</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={navigationList}
                        renderItem={({ item }) => this.renderNavigationList(item)}
                        keyExtractor={(item) => item}
                    />
                </Animated.View>
                <AnimatedTouchable
                    style={[styles.containerStyle, this.props.style, { left: screenLeft, height: screenHeight, borderRadius: borderRadius }]}
                    onPress={this.hide}
                >
                    {this.props.children}
                </AnimatedTouchable>
                <Animated.View style={[styles.iconStyle, { left: iconPosition }]}>
                    <Icon
                        name='menu'
                        onPress={this.show}
                        size={SCREEN_HEIGHT * 0.05}
                    />
                </Animated.View>
            </View >
        );
    }
}

const styles = {
    screenStyle: {
        flex: 1,
        left: -SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e6f9ff',
        width: SCREEN_WIDTH * 2
    },
    iconStyle: {
        position: 'absolute',
        top: SCREEN_HEIGHT * 0.05,
        left: 0,
        backgroundColor: '#ccf2ff',
        height: SCREEN_HEIGHT * 0.07,
        width: SCREEN_WIDTH * 0.15,
        borderTopRightRadius: SCREEN_WIDTH / 20,
        borderBottomRightRadius: SCREEN_WIDTH / 20,
        shadowColor: ' #000000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.1,
        elevation: 1,
        paddingRight: SCREEN_WIDTH * 0.02,
        justifyContent: 'center',
        opacity: 100,
    },
    containerStyle: {
        backgroundColor: '#4dd2ff',
        shadowColor: 'black',
        shadowColor: ' #000000',
        shadowOffset: { width: -5, height: 5 },
        shadowOpacity: 0.1,
        elevation: 1,
    },
    scrollViewContent: {
        marginTop: SCREEN_HEIGHT * 0.3,
    },
};

export default NavigatableScreen;
