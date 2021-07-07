import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Linking,
	ImageBackground,
	ScrollView,
} from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import FollowIcon from '../components/FollowIcon';
import { useFonts } from 'expo-font';
import call from 'react-native-phone-call';
import email from 'react-native-email';
import OpenMap from 'react-native-open-map';
import AppLoading from 'expo-app-loading';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function FollowUsScreen() {
	let [fontsLoaded] = useFonts({
		Atlantica: require('../assets/fonts/FontsFree-Net-Atlantica-Text-trial.ttf'),
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView contentContainerStyle={{flex:1,justifyContent:"center"}}>
					<AppText style={styles.content}>
						Nikee Business Group is a leading Australian consulting firm providing a wide range of
						consultation services across a stream of products to clients from Australia around the world.{' '}
						{'\n\n'}Nikee Business Group was formed by Brian in 1996 and since has grown from its initial
						stature as a small business to being acknowledged as a premiere consulting firm offering a wide
						range of consulting services. We are proud to be recognized as the leaders in our field by our
						clients and professional peers, as well as by reputable businesses and industry champions.{' '}
						{'\n\n'}Over the last 25 years, Nikee Business Group has grown from a startup consulting firm to
						a to large size business within the consulting industry and has attained an excellent reputation
						for personal, quality, integrity and excellence which has strongly assisted in business growth,
						networks and industry recognition. {'\n\n'}As a firm, we believe in the importance of extending
						our reach beyond the office, and we encourage our staff to understand our clients needs. Nikee
						Business Group delivers a range of solutions to realize your business goals, now and in the
						future. Working with thousands of businesses and clients, our Consultants translate this
						experience into online tools, resources and professional consulting services and provide
						practical advice and cost- effective solutions to clients. {'\n\n'}Our consultants understand
						what it takes to build a successful business that has been a trusted name since 1996.
					</AppText>
					<AppText style={styles.slogan}>You have a vision! We have the plan!</AppText>
				</ScrollView>
				<AppText style={styles.blueWords}>
					TRUSTED BY MORE THAN <AppText style={styles.redWords}>16500</AppText> CLIENTS WORLDWIDE SINCE 1996
				</AppText>
				<View style={styles.followButton}>
					<FollowIcon
						iconName="phone"
						onPress={() => call({ number: '396635277', prompt: false }).catch(console.error)}
						color="grassGreen"
					></FollowIcon>
					<FollowIcon
						iconName="facebook"
						onPress={() => Linking.openURL('https://www.facebook.com/Nikee227/')}
						color="blackBlue"
					></FollowIcon>
					<FollowIcon
						iconName="map-marker-radius"
						onPress={() =>
							OpenMap.show({
								latitude: -37.8163076,
								longitude: 144.9626336,
								title: 'Suite 206, Level 2, 277 Collins Street, Melbourne VIC, 3000',
								cancelText: 'Close',
								actionSheetTitle: 'Chose app',
								actionSheetMessage: 'Available applications ',
							})
						}
						color="greenYellow"
					></FollowIcon>
					<FollowIcon
						iconName="email"
						onPress={() => {
							const to = ['nikee@nikeeworld.com'];
							email(to, {
								subject: '',
								body: '',
							}).catch(console.error);
						}}
						color="orange"
					></FollowIcon>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backGround: {
		flex: 1,
	},
	content: {
		fontSize: 15,
		color: colors.black,
		fontFamily: 'Roboto_400Regular',
		padding: 10,
		textAlign: 'justify',
		lineHeight: 22,
	},
	followButton: {
		width: windowWidth,
		position: 'absolute',
		paddingBottom: 5,
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	slogan: {
		fontSize: 30,
		fontFamily: 'Atlantica',
		textAlign: 'center',
	},
	blueWords: {
		fontSize: 20,
		textAlign: 'center',
		position: 'absolute',
		bottom: 70,
		paddingBottom: 5,
		width: windowWidth,
		color: '#2e2961',
		backgroundColor: '#f1bd2c',
	},
	redWords: {
		color: '#bb3206',
		fontSize: 20,
	},
});

export default FollowUsScreen;
