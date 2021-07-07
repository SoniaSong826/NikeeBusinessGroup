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
			expanded3: false,
			expanded4: false,
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
	changeLayout4 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded4: !this.state.expanded4 });
	};

	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Recruitment and Placement Services</AppText>
					<AppText style={styles.introduction}>
						At Nikee, we understand that finding work in Australia can be extremely difficult. We are the
						“middle-men” who match qualified students looking for jobs with employers seeking local and
						international applicants across our huge database, built over the last 23 years. Since 1996 we
						have helped over 16,000 people throughout our Nikee Business Group network to study and work in
						Australia. We are now in the top 2% of registered migration agents in Australia. We specialise
						in matching job seekers with suitable employers in all regional areas.{'\n'}
						{'\n'}When it comes to finding regional work in Victoria, New South Wales, Western Australia,
						South Australia, Tasmania or the North Territory, we will liaise with our partners and our
						connections in the hidden job market to find you a position that matches your qualifications. We
						work with thousands of businesses Australia wide to enable our students to work in a job that
						they enjoy and one that also matches their needs. In recent years we have had a very high
						success rate with our placements that both match our students skills and fields of expertise and
						that fulfil their needs as well.
					</AppText>
					<Image style={styles.pic} source={require('../assets/employmentPicture/employment.jpg')}></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Attention Employers - Hire Qualified Staff with Ease</Text>
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
							We are always looking to partner with employers from Australia and overseas who take onboard
							qualified international students who have completed a degree, diploma and/or trade
							certificates in Australia. Our in-house interview matching program ensures that employers
							are matched to only the top students who are not only qualified but also share a passion for
							the job.{'\n\n'}The network of partners which we have built over the last 23 years are
							second to none and include all types of businesses and corporations – Large corporations,
							SMEs, local businesses, educational institutions as well as training bodies including
							private colleges, TAFE colleges and universities.{'\n\n'}We will find you candidates who
							match your selection criteria requirements, with the relevant qualifications, the
							personality and the passion for the job. We understand that sourcing exceptional candidates
							is a difficult task so let us look after the tedious work so you can do your job! Contact us
							today if you are looking to hire staff or for partnership enquiries.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>International Student Internships in Australia</Text>
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
							Complete a 12 week professional internship in your industry in Australia. We have a large no
							of positions available and can assist you in finding a long-term reliable company to work
							with in a range of industries including but not limited to: trade occupations, hospitality,
							aged care, engineering, accounting, administration and management.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Program Benefits</Text>
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
							Participate in a 12 week unpaid internship placement in an Australian company.{'\n\n'}
							Bridge the gap between your studies and career.{'\n\n'}Hands-on work experience in real work
							environment.{'\n\n'}Develop your employability skills and work in your industry.
							{'\n\n'}Get a foot in the door with the local job market.{'\n\n'}Increase your chances of
							gaining employment in Australia.{'\n\n'}Build connections in the local market.{'\n\n'}
							Develop and grow your personal brand through networking events.
							{'\n\n'}Practice and advanced your communication skills.{'\n\n'}Build the confidence to sell
							yourself to employers.{'\n\n'}Get Australian references for future jobs in Australia.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>Industries Currently Accepting Students</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded4 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.logoGold,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							Accounting, Auditing, Administration, MYOB{'\n\n'}Technology – Analysis, Design,
							Development, Testing, Networking, Web{'\n\n'}Engineering – Building, Civil, Maintenance,
							Mechanical. Electronics, Electrical{'\n\n'}Hospitality – Customer Service, Leadership,
							Management{'\n\n'}Sales and Marketing – Call center, door to door, events{'\n\n'}Management
							and Leadership, Administration{'\n\n'}Our internship programs help students successfully
							bridge the gap from study to professional employment. The program not only supports students
							in gaining relevant professional experience, but also provide a personalised learning and
							development plan for each student through a formal Training and Evaluation Process.
						</Text>
					</View>

					<Image
						style={styles.pic}
						source={require('../assets/employmentPicture/employment_service.jpg')}
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
