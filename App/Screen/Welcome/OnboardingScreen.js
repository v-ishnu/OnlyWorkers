import React, { useRef } from 'react';
import * as component from "react-native";
import { useTheme } from "../../function/theme";
import * as Asset from '../../export';
const slides = [
    { title: 'Find Your', richText: 'Dream Job', text2: 'Here!', des: 'Explore all the most exciting job roles based on your interest and study major.', graphics: Asset.OnboardBg },
    { title: 'Tell Us What', richText: 'You Need', text2: '', des: '', graphics: Asset.OnboardBg },
    { title: 'Apply in Seconds,', richText: 'Not Hours', text2: '', des: '', graphics: Asset.OnboardBg },
    { title: 'Be the First', richText: 'to Know', text2: '', des: '', graphics: Asset.OnboardBg },
];

const { width: ScreenW, height: ScreenH } = component.Dimensions.get('window');

const OnboardingScreen = ({navigation}) => {
    const theme = useTheme();
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            const nextIndex = currentIndex + 1;
            scrollViewRef.current.scrollTo({
                x: ScreenW * nextIndex,
                animated: true
            });
            setCurrentIndex(nextIndex);
        } else {
            navigation.navigate('BasicSetup');
        }
    };

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / ScreenW);
        setCurrentIndex(newIndex);
    };

    const funcDisable = () => {
        component.Alert.alert('Function Disabled');
    }

    return (
        <component.View style={[styles.body, { backgroundColor: theme.background }]}>
            <component.View style={styles.header}>
                <component.Text style={[styles.company, { fontSize: theme.fontSize.md+2, color: theme.secondaryText }]}>
                    TrueGig
                </component.Text>

                <component.TouchableWithoutFeedback onPress={funcDisable}>
                    <Asset.InfoIcon color={theme.secondaryText}/>
                </component.TouchableWithoutFeedback>
            </component.View>

            <component.ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {slides.map((slide, index) => (
                    <component.View key={index} style={{ width: ScreenW, paddingHorizontal: 20 }}>
                        <component.View style={styles.graphics}>
                            <slide.graphics width={ScreenW * 0.9} height={ScreenH * 0.4} />
                        </component.View>

                        <component.View style={styles.Header}>
                            <component.Text style={[styles.HeaderText, { fontSize: ScreenW * 0.1, color: theme.primaryText }]}>
                                {slide.title}
                            </component.Text>

                            <component.Text style={[styles.HeaderText, { fontSize: ScreenW * 0.1, color: theme.secondaryText }]}>
                                {slide.richText}
                            </component.Text>

                            {/* Underline======================================= */}
                            <component.View style={[styles.underline, { backgroundColor: theme.secondaryText }]} />

                            <component.Text style={[styles.HeaderText, { fontSize: ScreenW * 0.1, color: theme.primaryText }]}>
                                {slide.text2}
                            </component.Text>

                        </component.View>

                        {slide.des ? (
                            <component.Text style={[styles.description, { color: theme.secondaryText }]}>
                                {slide.des}
                            </component.Text>
                        ) : null}
                    </component.View>
                ))}
            </component.ScrollView>

            <component.View style={styles.indicatorContainer}>
                <component.View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
                    {slides.map((_, index) => (
                        <component.View
                            key={index}
                            style={[
                                styles.indicator,
                                {
                                    backgroundColor: index === currentIndex ? theme.secondaryText : theme.primaryText,
                                    width: index === currentIndex ? 25 : 8
                                }
                            ]}
                        />
                    ))}
                </component.View>

                <component.View style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {currentIndex < slides.length - 1 ? (
                        <component.TouchableWithoutFeedback onPress={handleNext}>
                            <component.Text style={[styles.nextButton, { backgroundColor: theme.btnColor }]}>
                                Next
                            </component.Text>
                        </component.TouchableWithoutFeedback>
                    ) : (
                        <component.TouchableWithoutFeedback onPress={handleNext}>
                            <component.Text style={[styles.nextButton, { backgroundColor: theme.btnColor }]}>
                                Setup
                            </component.Text>
                        </component.TouchableWithoutFeedback>
                    )}
                </component.View>
            </component.View>


        </component.View>
    );
};

const styles = component.StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: ScreenH * 0.05,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    company: {
        fontWeight: 700,
    },
    nextButton: {
        fontWeight: '600',
        fontSize: 16,
        paddingHorizontal: ScreenW * 0.055,
        paddingVertical: ScreenH * 0.015,
        borderRadius: 25,
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    graphics: {
        height: ScreenH * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header: {
        paddingLeft: 20,
        marginBottom: 10,
        flexDirection: 'column'
    },
    HeaderText: {
        fontWeight: 800,
    },
    underline: {
        width: 50,
        paddingVertical: 2,
    },
    description: {
        paddingLeft: 20,
        fontSize: 16,
        lineHeight: 24,
    },
    indicatorContainer: {
        paddingHorizontal: ScreenW * 0.1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    indicator: {
        height: 8,
        borderRadius: 14,
        marginHorizontal: 4,
        transitionProperty: 'width',
        transitionDuration: '300ms',
    },
});

export default OnboardingScreen;
