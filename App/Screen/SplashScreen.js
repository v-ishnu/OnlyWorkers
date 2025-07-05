import Lottie from 'lottie-react-native';
import * as React from 'react';
import * as component from 'react-native';


const Splash = ({ navigation }) => {

    React.useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('OnboardingScreen'); // or 'Onboarding' if that's what you meant
        }, 1200);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <component.View style={styles.container}>
            <component.StatusBar backgroundColor="transparent" translucent />
            <Lottie
                source={require('../../Assets/Splash/Animation-1727781523173.json')}
                autoPlay
                loop
                style={styles.animation}
            />
        </component.View>
    );
};

export default Splash;


const styles = component.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: '100%',
        height: '100%',
    },
});
