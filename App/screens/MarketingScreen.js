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
		this.state = {
			expanded1: false,
			expanded2: false,
		};

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	changeLayout1 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded1: !this.state.expanded1 });
	};
	changeLayout2 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded2: !this.state.expanded2 });
	};

	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Marketing</AppText>
					<AppText style={styles.introduction}>
						Our Marketing Team at NJ Productions are passionate about making all your marketing campaigns a
						success with their photographers, videographers and personal designers on working on your
						projects, you can be sure to have unique and engaging social media and digital marketing
						content.{'\n\n'}Looking for some fresh content to blow up everyone’s news feed?{'\n\n'}Not
						getting the traction you need on your social media platforms?{'\n\n'}Not sure what you’re doing
						wrong?{'\n\n'}Not sure what you’re doing wrong?
					</AppText>
					<Image style={styles.pic} source={require('../assets/marketingPicture/marketing.png')}></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Social Media Marketing</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded1 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.blackBlue,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							Our social media packages will help you accelerate your lead generation and streamline your
							workflow. Right from scheduling your daily posts to crafting unique entertaining videos –
							We’ll got all your social media needs covered in one place.{'\n\n'}Crafting + scheduling
							facebook posts{'\n\n'}Crafting + scheduling instagram posts{'\n\n'}Designing linkedin posts
							{'\n\n'}Designing twitter posts{'\n\n'}Editing designing facebook markteing videos{'\n\n'}
							Editing designing instagram videos{'\n\n'}Creating instagram story campaigns{'\n\n'}Creating
							short + long term facebook campaigns.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Digital Marketing</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded2 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.logoGold,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							We offer a range of digital marketing solutions for both small businesses and large
							organisations. Whether you would like to elevate your business’ brand or launch a brand-new
							winner marketing campaign, we’ll create something unique and tailored to suit your business.
							{'\n\n'}Promotional videos{'\n\n'}Corporate videos{'\n\n'}Business fliers{'\n\n'}Business
							brochures{'\n\n'}Logos branding{'\n\n'}Business cards{'\n\n'}Corporate banners artwork
							{'\n\n'}And much more…{'\n\n'}For more information or to book now please visit
							www.njproductions.com.au or{'\n\n'}Email Nicole at njmediaproduction@gmail.com.
						</Text>
					</View>
					<Image style={styles.pic} source={require('../assets/marketingPicture/marketing_service.jpg')}></Image>
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
	text: {
		fontSize: 15,
		color: colors.white,
		fontFamily: 'Roboto_400Regular',
		padding: 10,
		textAlign: 'justify',
		lineHeight: 22,
	},
	title: {
		textAlign: 'left',
		color: colors.white,
		fontFamily: 'Roboto_700Bold',
		fontSize: 18,
	},
	BtnBlue: {
		padding: 10,
		flexDirection: 'row',
		backgroundColor: colors.blackBlue,
		marginHorizontal: 10,
		marginTop: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: colors.black,
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
	},
	BtnOrange: {
		padding: 10,
		flexDirection: 'row',
		backgroundColor: colors.logoGold,
		marginHorizontal: 10,
		alignItems: 'center',
		marginTop: 10,
		justifyContent: 'space-between',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: colors.black,
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
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
