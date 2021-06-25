import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const windowWidth = Dimensions.get('window').width;
function NikeeLogo() {
	let [fontsLoaded] = useFonts({
		Atlantica: require('../assets/fonts/FontsFree-Net-Atlantica-Text-trial.ttf'),
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.rowContainer}>
				<Image style={styles.logo} source={require('../assets/nikeeIcon.png')}></Image>
				<View style={styles.columnContainer}>
					<View style={styles.twoTexts}>
						<AppText style={styles.nikee}>Nikee</AppText>
						<AppText style={styles.left}> Business Group</AppText>
					</View>
					<Text style={styles.slogan}>You have a vision! We have the plan!</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rowContainer: {
		width: windowWidth,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
	},
	logo: {
		width: 100,
		height: 100,
	},
	nikee: {
		fontSize: 30,
		fontFamily: 'Atlantica',
		color: colors.lightRed,
	},
	twoTexts: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	left: {
		fontFamily: 'Roboto_700Bold',
		fontSize: 25,
		color: colors.lightRed,
	},
	slogan: {
		fontSize: 15,
		fontWeight: '500',
		fontStyle: 'italic',
		color: colors.lightBlue,
	},
	columnContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default NikeeLogo;
