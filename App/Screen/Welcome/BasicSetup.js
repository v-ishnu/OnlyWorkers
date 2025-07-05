import * as component from 'react-native';
import { useTheme } from '../../function/theme';

const Setup = () => {
    const theme = useTheme();


    return (
        <component.View style={[styles.body, { backgroundColor: theme.background }]}>
            <component.Text style={[styles.HeaderText,{fontSize: theme.fontSize.xl, color: theme.primaryText}]}>
                Helo
            </component.Text>


        </component.View>
    )
};


const { width: ScreenW, height: ScreenH } = component.Dimensions.get('window');

const styles = component.StyleSheet.create({
    body: {
        flex:1,
        paddingVertical: ScreenH*0.045,
        paddingHorizontal: ScreenW*0.07
    },

    HeaderText:{
        fontWeight:600,
        paddingVertical:20,
    }
});


export default Setup;
