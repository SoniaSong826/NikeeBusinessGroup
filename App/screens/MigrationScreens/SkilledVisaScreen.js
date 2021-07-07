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
					<AppText style={styles.header}>Skilled Visa</AppText>
					<AppText style={styles.introduction}>
						Skilled Migration Visa provides one of the best opportunities for skilled workers to live and
						work in Australia. Under the Australian General Skilled Migration program, skilled migrant and
						skilled worker applicants can use their qualifications, work experience and language ability to
						meet the Australian immigration requirements for a permanent Australia visa.Australian visa
						applicants will be selected based on their points test score based upon a number of selection
						criteria.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/skilledVisaPicture/skilled_visa.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Skilled Independent Visa</Text>
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
							Requirements :{'\n\n'}You might be eligible to apply for this visa if invited. When we sent
							your letter of invitation, you must also have:{'\n\n'}Nominated an occupation that is on the
							relevant skilled occupation list{'\n\n'}Obtained a suitable skills assessment for that
							occupation{'\n\n'}Not yet turned 50 years of age{'\n\n'}Achieved the score specified in your
							letter of invitation based on the factors in the points tes{'\n\n'}At least competent
							English.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Skilled Independent Visa 189</Text>
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
							Stay in Australia indefinitely{'\n\n'}Work and study in Australia{'\n\n'}Enrol in Medicare,
							Australia's scheme for health-related care and expenses{'\n\n'}Apply for Australian
							citizenship (if you are eligible){'\n\n'}Sponsor eligible relatives for permanent residence
							{'\n\n'}Travel to and from Australia for five years from the date the visa is granted (after
							that time, you will need a resident return visa or another visa to return to Australia)
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Before You Apply Visa 189</Text>
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
							You must first submit an expression of interest and then be invited through SkillSelect.
							{'\n\n'}If you receive an invitation, you will have 60 days to apply online for the visa.
							During that time, you cannot change the information in your expression of interest.{'\n\n'}
							To submit a complete expression of interest,{'\n\n'}Achieve Competency in English language
							skills and a positive skills assessment for your nominated occupation (or Job Ready program,
							if applicable)in a n.{'\n\n'}Your visa application is likely to require extensive supporting
							documents, as listed in the document checklist. Start compiling your documents early in the
							process, even before you submit your expression of interest.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>The 189 Visa</Text>
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
							The requirements for this visa can be complex and are constantly changing.{'\n\n'}This visa
							allows you to live and work in Australia permanently{'\n\n'}It is important to seek
							Migration advice to ensure you meet the requirements for a skilled visa as an application
							refusal will result in significant wasted time and costs.{'\n\n'}We have the years of
							expertise to provide you with strategic advice on how to address all of the requirements for
							a skilled visa.{'\n\n'}We also provide streamlined services so that the process is clear and
							straight-forward on your end.{'\n\n'}Please contact us today if you would like to speak to
							one of our experienced consultants.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout5} style={styles.BtnBlue}>
						<Text style={styles.title}>Skilled Nomminated Visa 190</Text>
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
							The Skilled Nominated visa (subclass 190) is a permanent residence visa for points-test
							skilled workers who want to work and live in Australia after being nominated by an
							Australian state or territory government agency.{'\n\n'}You can be in or outside Australia
							when you apply and when the visa is granted.{'\n\n'}Requirements :{'\n\n'}You might be
							eligible to apply for this visa if you were invited. When we sent you your letter of
							invitation, you must also have:{'\n\n'}Nominated an occupation that is on the relevant
							skilled occupation list{'\n\n'}Obtained a suitable skills assessment for that occupation
							{'\n\n'}Not yet turned 50 years of age{'\n\n'}Achieved the score specified in your letter of
							invitation based on the factors in the points test{'\n\n'}At least competent English{'\n\n'}
							Been nominated by an Australian state or territory government agency.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout6} style={styles.BtnOrange}>
						<Text style={styles.title}>Subclass 190 Visa Benefits</Text>
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
							This is a permanent residence visa. It lets you and any family members who have also been
							granted this visa:{'\n\n'}Stay in Australia indefinitely{'\n\n'}Work and study in Australia
							{'\n\n'}Enrol in Medicare, Australia's scheme for health-related care and expenses{'\n\n'}
							pply for Australian citizenship (if you are eligible){'\n\n'}Sponsor eligible relatives for
							permanent residence{'\n\n'}Travel to and from Australia for five years from the date the
							visa is granted (after that time, you will need a resident return visa or another visa to
							return to Australia).
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout7} style={styles.BtnBlue}>
						<Text style={styles.title}>Before You Apply For This Visa</Text>
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
							You must first submit an expression of interest and then be invited through SkillSelect. If
							you receive an invitation, you will have 60 days to apply online for the visa. During that
							time, you cannot change the information in your expression of interest.{'\n\n'}A state or
							territory government will examine your expression of interest and decide whether to nominate
							you to apply for a visa based on their own criteria for deciding who to nominate. Each state
							or territory government agency have different processes for nominating expressions of
							interests, some will contact you first and others may wait for you to contact them. You will
							be able to find more information on their websites{'\n\n'}Your visa application is likely to
							require extensive supporting documents, as listed in the document checklist. Start compiling
							your documents early in the process, even before you lodge your expression of interest.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout8} style={styles.BtnOrange}>
						<Text style={styles.title}>How We Can Help!</Text>
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
							The 190 visa would be a good alternative for a skilled person wishing to migrate to
							Australia on a permanent basis, but who does not qualify for a Skilled Independent visa
							(subclass 189).{'\n\n'}We have the years of expertise to provide you with strategic advice
							on how to address all of the requirements for a skilled visa{'\n\n'}We could assist you with
							the following:{'\n\n'}Seeking nomination by a State or Territory Government{'\n\n'}
							developing strategies to maximise your points score.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout9} style={styles.BtnBlue}>
						<Text style={styles.title}>Skilled Regional Visa 489 Benefits</Text>
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
							This visa allows you and your family to:{'\n\n'}Stay in Australia for up to four years
							{'\n\n'}Live, work and study in a specified regional area of Australia{'\n\n'}Travel in and
							out of Australia while the visa is valid.{'\n\n'}This visa provides a pathway to permanent
							residence through the Skilled-Regional (Residence) visa (subclass 887).{'\n\n'}Requirements:
							{'\n\n'}You might be eligible to apply for this visa if invited. When we sent your letter of
							invitation, you must also have:{'\n\n'}Been nominated by an Australian State or Territory
							government agency or sponsored by an eligible relative living in a designated area{'\n\n'}
							Nominated an occupation that is on the relevant skilled occupations list{'\n\n'}A suitable
							skills assessment for that occupation{'\n\n'}Not yet turned 50 years of age{'\n\n'}Achieved
							the score specified in your letter of invitation based on the factors in the points test
							{'\n\n'}At least competent English{'\n\n'}At least competent English{'\n\n'}You can also
							apply for this visa if you hold a provisional visa in subclass 496, 495, 487 or 475.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/skilledVisaPicture/internship_service.jpg')}
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
