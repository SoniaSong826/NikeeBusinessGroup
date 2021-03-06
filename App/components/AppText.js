import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import colors from '../config/colors';

function AppText({ children, style }) {
	let [fontsLoaded] = useFonts({
		Roboto_700Bold,
		Roboto_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Roboto_700Bold',
		fontSize: 14,
		color: colors.blackBlue,
	},
});
export default AppText;
