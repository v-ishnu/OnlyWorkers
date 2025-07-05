import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Asset from "./Screen/__exportScreen";
import NavBar  from './Component/NavBar';

const Tab = createBottomTabNavigator();

const TabBar = (props) => <NavBar {...props} />;

const TrueGig = () => {
    return (
        <Tab.Navigator tabBar={TabBar}>
            <Tab.Screen name="Home" component={Asset.Home} options={{ headerShown: false }} />
            <Tab.Screen name="Contract" component={Asset.Contract} options={{ headerShown: false }} />
            <Tab.Screen name="Messages" component={Asset.Messages} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Asset.Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default TrueGig;
