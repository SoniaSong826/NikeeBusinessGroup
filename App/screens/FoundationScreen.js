import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions, ScrollView, ImageBackground } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function FoundationScreen() {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.png')}>
			<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
				<Image style={styles.portrait} source={require('../assets/Brian.jpg')}></Image>
				<ImageBackground style={styles.blueBackground} source={require('../assets/blueBanner.png')}>
					<AppText style={styles.introduction}>
						The Nikee Foundation is our way of supporting new settlers in Australia. From families to
						students, everyone needs someone to give them that one chance to have a bright future. Help us
						support new settlers in Australia today with your donation – remember, even $5 makes a
						difference.
					</AppText>
				</ImageBackground>
				<AppText style={styles.subTitle}>About The Nikee Foundation</AppText>
				<AppText style={styles.contents}>
					The Nikee Foundation was established on the 28th October 2019 by Brian Pereira, director of Nikee
					Business Group. {'\n'}
					{'\n'} Since 1996 Nikee Business Group has supported thousands of migrant families, students and
					individuals to settle and build their lives in Australia.{'\n'}
					{'\n'} Our goal is to help as many new migrants in Australia as possible by providing them with the
					support they need. One hundred percent of your donation will go towards assisting new migrants with
					their education, career and housing needs. {'\n'}
					{'\n'}Join us in our mission to bring families together and help new settlers build a bright future
					in Australia.
				</AppText>
			</ScrollView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backGround: {
		flex: 1,
	},
	portrait: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginVertical: 10,
	},
	blueBackground: {
		paddingVertical: 15,
	},
	introduction: {
		fontSize: 16,
		fontFamily: 'Roboto_400Regular',
		color: colors.white,
		textAlign: 'center',
		paddingHorizontal: 8,
	},
	subTitle: {
		textAlign: 'center',
		fontSize: 25,
		fontFamily: 'Roboto_700Bold',
		color: colors.black,
		marginVertical: 10,
	},
	contents: {
		textAlign: 'center',
		fontSize: 16,
		fontFamily: 'Roboto_400Regular',
		color: colors.black,
		paddingHorizontal: 5,
	},
});

export default FoundationScreen;
