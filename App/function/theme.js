import * as React from 'react';
import { Appearance } from 'react-native';

const ThemeContext = React.createContext();

const darkTheme = {
    mode: 'dark',
    background: '#000',
    text: '#fff',
    // barStyle
    barStyle: 'light-content',

    fontSize: {
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
        xxl: 28,
        xxxl: 32,
    },

    // Text Color
    primaryText: '#F5F7FF',
    secondaryText: '#FCA34D',


    // Button
    btnColor: '#FCA34D'

};


const lightTheme = {
    mode: 'light',
    background: '#fff',
    text: '#000',
    // barStyle
    barStyle: 'dark-content',

    fontSize: {
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
        xxl: 28,
        xxxl: 32,
    },

    // Text Color
    primaryText: '#292B2D',
    secondaryText: '#FCA34D',


    // Button
    btnColor: '#FCA34D'
};



export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState(Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme);

    React.useEffect(() => {
        const subscription = Appearance.addChangeListener((preferences) => {
            const colorScheme = preferences?.colorScheme;
            console.log("Color scheme changed:", colorScheme);
            setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
        });

        return () => subscription.remove();
    }, []);


    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
