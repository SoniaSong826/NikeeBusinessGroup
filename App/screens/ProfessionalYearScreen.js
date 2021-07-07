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

		};

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	changeLayout1 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded1: !this.state.expanded1 });
	};
	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Professional Year</AppText>
					<AppText style={styles.introduction}>
						What is a Professional Year you ask? A ‘Professional Year’ or ‘PYear’ is a job and skills
						training program which allows international students to gain practical work experience in a
						career-related field. Essentially, it’s the stepping-stone from your university studies to full
						time paid employment in your industry.{'\n\n'}Under an ‘Eligible Skilled Occupation’ a student
						who completes this course to a high standard will be eligible for claim five points, according
						to the Australian Department of Home Affairs (DHA). The PYear Program ultimately will increase
						your employability skills and if you are a high achiever, it will place you in an excellent
						position to get a job once you’ve finished studying.{'\n\n'}Before You Can Enrol{'\n\n'}Before
						you can enroll into the Professional Year Program you will have:{'\n\n'}Completed at least two
						years of tertiary education in Australia in your particular discipline{'\n\n'}Hold an Australian
						visa which allows for full work and study rights. (Priority is given to those holding a 485
						Skilled Graduate Visa or Bridging Visa to the graduate visa.{'\n\n'}Meet the minimum English
						language requirements for a Temporary Graduate Visa (485) . (E.g. For the IELTS you need an
						overall score of 6.0 with nothing below 5.0 in each of the category in order to apply){'\n\n'}
						Undertaken an application interview with an accredited provider to ensure your chosen course is
						suitable for you.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../assets/professionalYearPicture/education.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>The Program Structure</Text>
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
							Normally you will study your career related course over one year. Depending on where you
							complete your PY you may have an online or in-person orientation or an induction prior to
							starting. These sessions are usually held 1 – 2 weeks prior to your placement date / course
							commencement date. Be sure to ask us about your orientation date when you visit as these do
							change from time to time.{'\n\n'}With a Nikee PY Placement you will be matched to an
							organization based on your skillset, academic background, employment experience, personality
							and the employer’s key criteria. Once we match you with your ideal placement opportunity,
							you will be notified and soon after called in for an interview and the interviewing stage
							begins.{'\n\n'}Once you are in the program you need to performance at your very best in
							order to pass with flying colours. The higher your marks, the more opportunities you’ll have
							available to you.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../assets/professionalYearPicture/professional_year_service.jpg')}
					></Image>
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
