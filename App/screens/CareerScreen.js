import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	LayoutAnimation,
	Platform,
	UIManager,
	TouchableOpacity,
	ImageBackground,
	Image,
	ScrollView,
	Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from '../components/AppText';

const windowWidth = Dimensions.get('window').width;
export default class Panel extends Component {
	constructor() {
		super();

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Career Counselling</AppText>
					<AppText style={styles.introduction}>
						Career Counselling, Business Coaching, Interview Coaching In-house Career Experts here to serve
						you. We help you clarify your career direction, discuss all the pathways available to you and
						guide you to make decisions on what you might study or what further training you can do to
						elevate and grow your career.{'\n\n'}Most people visit a doctor to do a health check to see if
						anything is wrong at least once a year, but not enough people do a career check to find out what
						they’re doing right and wrong. If you send through the same resume ten times and get rejected,
						it’s clearly a sign you need to change something. But what exactly do you need to change or is
						it the whole thing that just not up-to the standard? How do you really know what recruiters are
						looking for?{'\n\n'}We take a holistic approach in all our consulting where we speak with you
						about your needs, your plans and your expertise. Usually finding a job isn’t the only thing on a
						person’s mind and there are many other factors which come into play determining whether or not
						you actually get that job.{'\n\n'}We take into consideration not only your academic background,
						but also your ability to speak concisely and coherently, your confidence and how you carry
						yourself, your ability to present, your portfolio (if you have one), how you respond to
						interview questions and much more in our Career Counselling sessions.{'\n\n'}Are you ready to
						find a full-time job? Are you ready to learn techniques to position yourself as the best
						candidate in front of employers?{'\n\n'}Send us an email now nikee@nikeeworld.com and a member
						of our Career Counselling team will be in touch with.
					</AppText>
					<Image style={styles.pic} source={require('../assets/careerPicture/councelling.jpg')}></Image>
				</ScrollView>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backGround: { flex: 1 },
	header: {
		textAlign: 'left',
		color: colors.black,
		fontFamily: 'Roboto_700Bold',
		fontSize: 25,
		padding: 10,
	},
	introduction: {
		fontSize: 16,
		color: colors.black,
		fontFamily: 'Roboto_400Regular',
		paddingHorizontal: 10,
		textAlign: 'justify',
		lineHeight: 22,
	},
	pic: {
		width: windowWidth - 20,
		height: 200,
		margin: 10,
	},
});
