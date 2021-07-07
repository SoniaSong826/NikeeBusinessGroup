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
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

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
			expanded6: false,
			expanded7: false,
			expanded8: false,
			expanded9: false,
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
	changeLayout5 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded5: !this.state.expanded5 });
	};
	changeLayout6 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded6: !this.state.expanded6 });
	};
	changeLayout7 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded7: !this.state.expanded7 });
	};
	changeLayout8 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded8: !this.state.expanded8 });
	};
	changeLayout9 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded9: !this.state.expanded9 });
	};
	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Employer Visa</AppText>
					<AppText style={styles.introduction}>
						Australia is a country of diverse landscapes and diverse cultures. We enjoy a high quality of
						life and Australia provides many opportunities to anyone willing to ‘have a go’. If you like the
						idea of Australia’s climate and lifestyle and are looking for a career challenge in a country
						with lots of opportunities – take the next step to find out more about the visas that permit you
						to work in Australia.A visa that helps to get you to permanent. A visa entitling you to work
						will give you the opportunity to work and live in Australia as a temporary or permanent resident
						which will lead eventually in being a Australian citizen.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/employerVisaPicture/employment.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Temporary Skill Shortage Visa (Subclass 482)</Text>
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
							If you would like to be sponsored between one day to four years, you may be eligible for the
							Temporary Skill Shortage Visa.{'\n\n'}The Temporary Skill Shortage Visa has 3 Streams
							{'\n\n'}Short Term Stream{'\n\n'}Medium Term Stream{'\n\n'}Labour Agreement Stream{'\n\n'}
							Your employer must be approved as a sponsor and nominate your position before you can be
							granted your visa.{'\n\n'}The visa is designed to enable employers to address labour
							shortages by bringing in genuinely skilled workers where they cannot find an appropriately
							skilled Australian{'\n\n'}You can find the list of occupations which identify the different
							streams on the department’s website{'\n\n'}The 482 visa is the most common programme used by
							employers to sponsor overseas workers to work in Australia on a temporary basis. The
							overseas worker can be employed for up to 4 years on this visa.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>482 Visa Benefits For Overseas Workers</Text>
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
							Work in your nominated position in Australia for up to four years{'\n\n'}Bring eligible
							family members with you to work or study in Australia{'\n\n'}Travel in and out of Australia
							as often as you want, subject to your employer’s approval.{'\n\n'}As the holder of the
							medium-term stream visa, you may be eligible to apply for a permanent visa after three years
							of employment in Australia if you satisfy particular criteria.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Employer Nomminated Visa Streams</Text>
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
							Temporary Residence Transition Stream: For the primary holder of a 457/482 visa who has been
							working full-time in Australia with the employer them for at least 2 years (457) or 3 years
							(482) and has been offered a permanent contract in their nominated occupation with the
							sponsoring company.{'\n\n'}Direct Entry Stream: For someone who is ineligible for the
							Transition stream or who is applying from outside Australia, and who can demonstrate that
							they satisfy the requisite Skill and English levels for this visa (which are higher than for
							the Transition stream). The person has also been offered a permanent contract for two years
							or more in their nominated occupation with the sponsoring company.{'\n\n'}Agreement Stream:
							For a person sponsored by an employer through a Labour Agreement. Please consult us for more
							details regarding this stream.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>Benefits And Common Issues 186 Visa</Text>
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
							A 186 visa is often used where an overseas worker is already employed in the business on a
							subclass 457/482 visa, but it should also be considered for hiring new staff because a 186
							visa does not impose sponsorship obligations on the sponsoring employer.{'\n\n'}The
							requirements to obtain the permanent 186 visa can be quite onerous. It is important to seek
							Migration advice to ensure you meet the requirements for an ENS visa as an application
							refusal will result in significant wasted time and costs.{'\n\n'}Some of the common
							difficulties that you may face with a 186 visa application include:{'\n\n'}Showing that the
							business meets the training requirements, particularly if you are applying in the Temporary
							Residence Transition stream{'\n\n'}Obtaining a positive skills assessment for an applicant
							in the Direct Entry stream, as each skills assessing authority has different criteria
							{'\n\n'}Where an applicant does not meet the usual requirements for age, skill level and
							English, demonstrating that exemptions apply.{'\n\n'}We have the years of expertise to
							provide you with strategic advice on how to address all of the requirements for an ENS visa.
							{'\n\n'}We also provide streamlined services so that the process is clear and
							straight-forward on your end.{'\n\n'}Please contact us today if you would like to speak to
							one of our experienced Registered Migration Agents.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout5} style={styles.BtnBlue}>
						<Text style={styles.title}>Regional Sponsored Migration Scheme Visa (Subclass 187)</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded5 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.blackBlue,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							The RSMS is a permanent residency visa for a person who has been offered a permanent role in
							a business located in a regional, remote or low population growth area of Australia.{'\n\n'}
							The RSMS covers all of Australia apart from Sydney, Newcastle, Wollongong, Melbourne,
							Brisbane and the Gold Coast. Check the current DIBP list of RSMS-eligible postcodes.{'\n\n'}
							The RSMS visa is similar to an Employer Nominated Visa , including granting similar rights
							if the applicant is successful.{'\n\n'}The main difference between the two visas is that the
							sponsoring employer’s business and the nominated position must be located in a regional
							area, as discussed above.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout6} style={styles.BtnOrange}>
						<Text style={styles.title}>Sub Class 187 Visa Benefits For Overseas Workers</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded6 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.logoGold,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							Stay in Australia indefinitely{'\n\n'}Work and study in Australia{'\n\n'}Enrol in Medicare,
							Australia's health care scheme{'\n\n'}Apply for Australian citizenship once they are
							eligible{'\n\n'}Sponsor eligible relatives for permanent residence{'\n\n'}Travel to and from
							Australia for five years from the date the visa is granted (after that time, you will need a
							resident return visa or another visa to return to Australia).
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout7} style={styles.BtnBlue}>
						<Text style={styles.title}>The RSMS Visa Three Streams</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded7 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.blackBlue,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							Temporary Residence Transition stream: For the primary holder of a 457 visa who has been
							working full-time in Australia with the regional employer that wishes to sponsor them for at
							least two years, and has been offered a permanent contract for two years or more in their
							nominated occupation with the sponsoring company.{'\n\n'}Direct Entry stream: For someone
							who is ineligible for the Transition stream or who is applying from outside Australia, and
							who can demonstrate that they satisfy the requisite English level for this visa (which is
							higher than for the Transition stream). The person has also been offered a permanent
							contract for two years or more in their nominated occupation with the regional sponsoring
							company. The sponsoring company must obtain a Regional Certifying Body advice and should do
							so prior to lodging the Nomination application.{'\n\n'}Agreement stream: For a person
							sponsored by an employer through a Labour Agreement. Please consult us for more details
							regarding this stream.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout8} style={styles.BtnOrange}>
						<Text style={styles.title}>
							Skilled Employer Sponsored Regional (Provisional) Visa (Subclass 494)
						</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded8 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.logoGold,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							The Sub Class 494 is a Provisional visa for a person who has been offered a job in a
							designated regional area of Australia.{'\n\n'}It covers a wide range of regional areas and
							is regularly updated by the department with its eligible postcodes{'\n\n'}The 494 visa has a
							wider range of occupations covered under the ROL list
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout9} style={styles.BtnBlue}>
						<Text style={styles.title}>Benefits for Overseas Workers</Text>
						<MaterialCommunityIcons
							name="chevron-down"
							size={30}
							color={colors.white}
						></MaterialCommunityIcons>
					</TouchableOpacity>
					<View
						style={{
							height: this.state.expanded9 ? null : 0,
							overflow: 'hidden',
							paddingHorizontal: 5,
							backgroundColor: colors.blackBlue,
							marginHorizontal: 10,
						}}
					>
						<Text style={styles.text}>
							Stay in Australia up to 5 years{'\n\n'}Live, Work and study in designated regional area of
							Australia{'\n\n'}Apply for a Permanent Residence after 3 years of approval of the 494 Visa
							{'\n\n'}Sponsor eligible relatives as dependants{'\n\n'}Travel to and from Australia for
							five years from the date the visa is granted
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/employerVisaPicture/employment_service.jpg')}
					></Image>
					<AppButton
						style={styles.button}
						title={'View More'}
						onPress={() => Linking.openURL('https://www.nikeemigration.com/australian-employer-visa/')}
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
		marginBottom: 20,
	},
});
