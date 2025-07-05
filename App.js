import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as screen from './App/Screen/__exportScreen';
import TrueGig from './App/TrueGig';
import { ThemeProvider, useTheme } from './App/function/theme';
import { StatusBar } from 'react-native';



const Stack = createStackNavigator();

export function AppContent() {

  const theme = useTheme();

  return (
    <>
     <StatusBar barStyle={theme.barStyle} backgroundColor="transparent" translucent />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TrueGig" component={TrueGig} />
          <Stack.Screen name="SplashScreen" component={screen.Splash} />
          <Stack.Screen name="OnboardingScreen" component={screen.Onboarding} />
          <Stack.Screen name="BasicSetup" component={screen.Setup}/>
          <Stack.Screen name="HomeScreen" component={screen.Home} />
          <Stack.Screen name="ProfileScreen" component={screen.Profile} />
          <Stack.Screen name="MessageScreen" component={screen.Messages} />
          <Stack.Screen name="ContractScreen" component={screen.Contract} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


export default function App(){
  return (
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  );
};
