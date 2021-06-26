import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import colors from '../config/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppText from './AppText.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function FollowIcon({ iconName, onPress, color = 'blackBlue' }) {
	let [fontsLoaded] = useFonts({
		Roboto_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<View style={styles.iconContainer}>
			<TouchableOpacity
				style={StyleSheet.flatten([{ backgroundColor: colors[color] }, styles.iconCircle])}
				onPress={onPress}
			>
				<MaterialCommunityIcons
					style={styles.icon}
					name={iconName}
					size={35}
					color={colors.white}
				></MaterialCommunityIcons>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	iconContainer: {
		width: 90,
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconCircle: {
		width: 56,
		height: 56,
		borderRadius: 28,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default FollowIcon;
