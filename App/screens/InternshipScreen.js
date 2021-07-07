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
	Linking,
	ScrollView,
	Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const windowWidth = Dimensions.get('window').width;
export default class Panel extends Component {
	constructor() {
		super();
		this.state = {
			expanded1: false,
			expanded2: false,
			expanded3: false,
			expanded4: false,
			expanded5: false,
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
	changeLayout3 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded3: !this.state.expanded3 });
	};

	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView contentContainerStyle={styles.container}>
					<AppText style={styles.header}>Internship</AppText>
					<AppText style={styles.introduction}>
						With Australian Internships in almost every single discipline from trades to medicine, we’ve got
						you covered! An internship with a perfectly matched role in the right company can open the right
						doors for you in the future.{'\n\n'}Put your right foot forward this year and challenge yourself
						with an industry placement or internship in your chosen career field. Over the last 23 years we
						have successfully placed more than 1500 students in an industry internship placement.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../assets/businessPicture/Business-Advisors.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Shelly - 2018 Marketing Placement</Text>
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
							At first it was quite challenging, but after the first 2 – 3 weeks I started to get the hang
							of things and it was just an amazing experience. Working on real live projects and seeing my
							website project go live for the company was one of my biggest achievements. I now feel well
							equipped to enter the job market and compete with other candidates because I know I have the
							ability to build amazing interactive websites for large scale organisations.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Kamal - 2019 Web Development Placement</Text>
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
							Undertaking an internship really helps you stand out as an international student amongst
							others’ who have just migrated here and have no experience. I undertook a 3 month marketing
							placement and the amount of things I learnt on the job was just incredible. Would highly
							recommend all students to undertake an internship before applying for full time work
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Sandra - 2017 Graphic Design Placement</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded3 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.blackBlue,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							I heard about Nikee Career Counselling through a friend and decided to give it a try. When I
							went for my first ever internship interview in Australia, I felt like I knew what I wanted,
							I was well prepared to talk about my skills and experience and I had a small portfolio of
							work to share with the employer. I received the internship placement and from then on it was
							intense, but I learnt so much in the span of just three months – more than I had learnt in
							my entire degree.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../assets/businessPicture/business_service.jpg')}
					></Image>
					<AppButton
						style={styles.button}
						title={'Apply for the Internship'}
						onPress={() => Linking.openURL('https://www.nikeeworld.com/nikee-careers/')}
					></AppButton>
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
	button: {
		marginHorizontal: 10,
		textAlign: 'center',
        marginBottom:20,
	},
});
