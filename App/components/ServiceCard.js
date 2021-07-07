import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Text,
	Dimensions,
	ImageBackground,
	TouchableWithoutFeedback,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../config/colors';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
function ServiceCard({ title, paragraph, imagesrc, onPress }) {
	let [fontsLoaded] = useFonts({
		Roboto_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<ImageBackground style={styles.card} source={imagesrc}>
				<View style={styles.translucence}></View>
				<View style={styles.buttonRow}>
					<View style={styles.inner}>
						<Text numberOfLines={1} style={styles.title}>
							{title}
						</Text>
						<Text style={styles.paragraph}>{paragraph}</Text>
					</View>
					<MaterialCommunityIcons name="menu-right" size={45} color={colors.white}></MaterialCommunityIcons>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
		width: windowWidth,
		alignItems:"center",
	},
	card: {
		height: 170,
		width: windowWidth - 20,
		backgroundColor: colors.white,
		justifyContent: 'center',
		paddingHorizontal: 10,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: colors.black,
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
	},
	title: {
		flexWrap: 'nowrap',
		textAlign: 'left',
		marginBottom: 7,
		fontFamily: 'Roboto_700Bold',
		fontSize: 30,
		color: colors.white,
	},
	paragraph: {
		color: colors.white,
		fontFamily: 'Roboto_400Regular',
		fontSize: 14,
		textAlign: 'justify',
	},
	translucence: {
		height: 170,
		width: windowWidth - 20,
		backgroundColor: 'rgba(52, 52, 52, 0.6)',
		position: 'absolute',
	},
	buttonRow: {
		width: windowWidth - 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: 3,
	},
	inner: {
		width: windowWidth - 40,
		flex: 1,
		justifyContent: 'center',
	},
});

export default ServiceCard;
