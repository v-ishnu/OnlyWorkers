import * as React from "react";
import * as component from "react-native";
import * as Asset from '../export';

const NavBar = ({ navigation, state }) => {

    const tabs = [
        { name: 'Home', icon: Asset.HomeIcon },
        { name: 'Contract', icon: Asset.HomeIcon },
        { name: 'Messages', icon: Asset.HomeIcon },
        { name: 'Profile', icon: Asset.UserIcon },
    ];


    const indicatorPosition = React.useRef(new component.Animated.Value(0)).current;

    const iconWidth = ScreenW * 0.86 / 4;
    const offset = (iconWidth - 35) / 2;

    const animateIndicator = React.useCallback((index) => {
        if (index >= 0 && index <= 3) {
            component.Animated.timing(indicatorPosition, {
                toValue: index * iconWidth + offset,
                duration: 300,
                useNativeDriver: false
            }).start();
        }
    }, [indicatorPosition, iconWidth, offset]);

    React.useEffect(() => {
        animateIndicator(state.index);
    }, [state.index, animateIndicator]);

    return (
        <component.View style={styles.navLayout}>
            {/* Indicator (Animated bar) */}
            {/* <component.Animated.View style={[styles.indicator, { left: indicatorPosition }]} /> */}

            {/* Tab Buttons */}
            {tabs.map((tab, index) => (
                <component.TouchableOpacity key={tab.name} onPress={() => navigation.navigate(tab.name)}>
                    <tab.icon
                        width={45}
                        height={27}
                        color={state.index === index ? "#42C83C" : "gray"}
                        fill={state.index === index ? "#42C83C" : 'transparent'}
                    />
                </component.TouchableOpacity>
            ))};

        </component.View>
    );
};

export default NavBar;

const { width: ScreenW } = component.Dimensions.get('window');

const styles = component.StyleSheet.create({
    navLayout: {
        width: ScreenW * 0.89,
        backgroundColor: '#343434',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        elevation: 5,
        position: 'absolute',
        bottom: 20,
    },
    indicator: {
        position: 'absolute',
        top: 0,
        width: 35,
        height: 5,
        backgroundColor: '#42C83C',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        zIndex: 1,
    },
});
