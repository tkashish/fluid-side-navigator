//import liraries
import React, { Component } from 'react';
import { View, Animated, Dimensions, Easing, TouchableWithoutFeedback, InteractionManager } from 'react-native';

const { height, width } = Dimensions.get('window');
class BottomNavigation extends Component {
    constructor(props) {
        super(props);
        this.bottomNavAnim = new Animated.Value(0);
    }

    guid() {
        s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    onPressIn = () => {
        Animated.sequence([
            Animated.timing(this.bottomNavAnim, {
                toValue: 1,
                duration: 100
            })
        ]).start()
    }

    onPressOut = () => {
        Animated.sequence([
            Animated.timing(this.bottomNavAnim, {
                toValue: 0,
                duration: 100
            })
        ]).start()
    }

    renderIcons() {
        const { style } = this.props
        const l = this.props.children.length
        return this.props.children.map((icon, i) => {
            var s = [styles.iconContainerStyle, { width: width * (0.90 / l) }]
            if (i != this.props.children.length - 1) {
                s = [s, styles.iconContainerBorderStyle, { borderRightColor: `${style.color}` }]
            }
            return (
                <TouchableWithoutFeedback key={i} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
                    <View style={s}>
                        {icon}
                    </View>
                </TouchableWithoutFeedback>
            );
        });
    }

    render() {
        const heightAnim = this.bottomNavAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [height * 0.1, height * 0.085]
        });
        const widthAnim = this.bottomNavAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [width * 0.98, width * 0.95]
        });
        return (
            <Animated.View style={[styles.container, { height: heightAnim, width: widthAnim }]} >
                {this.renderIcons()}
            </Animated.View>
        );
    }
}

// define your styles
const styles = {
    container: {
        position: 'absolute',
        bottom: height * 0.01,
        backgroundColor: '#ffffff',
        height: height * 0.1,
        width: width * 0.98,
        borderBottomLeftRadius: width / 19,
        borderBottomRightRadius: width / 19,
        shadowColor: ' #000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 1,
        paddingTop: height * 0.01,
        paddingBottom: height * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainerBorderStyle: {
        borderRightWidth: 1,
    }
};

export default BottomNavigation;
