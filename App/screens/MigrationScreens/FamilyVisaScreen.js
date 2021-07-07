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
			<ImageBackground style={styles.backGround} source={require('../../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Partner Visas</AppText>
					<AppText style={styles.introduction}>
						Partner category migration allows for the grant of a visa that permits married partners
						(Opposite sex spouses) and de facto partners (including those in a same-sex relationship) of
						Australian citizens, Australian permanent residents and eligible New Zealand citizens to enter
						and remain permanently in Australia.{'\n\n'}Initially, partners who meet the legal criteria for
						the grant of the visa are granted a temporary visa. Later, a permanent visa may be granted
						following an eligibility period or, if there is a long-standing relationship or children of the
						relationship, soon after grant of the temporary visa.{'\n\n'}Partner category migration also
						allows for the temporary entry to Australia of fiancé(e)s (intended spouses) of Australian
						citizens, permanent residents and eligible New Zealand citizens. As the partner or fiancé(e) of
						an Australian citizen, Australian permanent resident or eligible New Zealand citizen, you do not
						have an automatic right of permanent residence in Australia.{'\n\n'}If you wish to reside
						permanently in Australia, you must first apply for a permanent visa and be assessed against the
						legal criteria for the grant of that visa.{'\n\n'}There are two visa types in the partner
						category:{'\n\n'}a partner visa is for a spouse or de facto partner, including a same-sex
						partner of an Australian sponsor{'\n\n'}a prospective marriage visa is for a fiancé who is
						overseas and plans to marry their Australian sponsor after travelling.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/familyVisaPicture/family_visa.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Partner Visas</Text>
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
							There are two visa types in the partner category:{'\n\n'}Not the holder of a permanent visa
							{'\n\n'}Intending to travel to, enter, or remain in Australia indefinitely.{'\n\n'}A child
							might be eligible for a child visa if they are:{'\n\n'}Under 18 years of age{'\n\n'}Single
							(not married, engaged to be married, or in a de facto relationship){'\n\n'}In certain
							circumstances, a person over 18 years of age might be considered as a child.{'\n\n'}Adoption
							visa options:{'\n\n'}A child might be eligible to apply for an adoption visa if they are:
							{'\n\n'}Under 18 years of age, and{'\n\n'}Single (not married, engaged to be married, or in
							a de facto relationship){'\n\n'}A person who has been adopted, but is over 18 years of age
							cannot apply for this visa.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Parent Visas</Text>
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
							You might be eligible to apply for a parent category visa if:{'\n\n'}You have a child who is
							an Australian citizen, an Australian permanent resident, or an eligible New Zealand citizen
							{'\n\n'}Your child has been living in Australia lawfully for at least 2 years before you
							lodge your visa application{'\n\n'}You have a sponsor{'\n\n'}You meet the Balance of family
							test criteria{'\n\n'}You meet health and character requirements.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Other Family Visas</Text>
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
							The other family category consists of the following three visa types:{'\n\n'}A carer visa is
							for applicants willing and able to give substantial, continuing assistance to an Australian
							relative or member of their family who has a medical condition that impairs their ability to
							attend to the practical aspects of daily life. The need for assistance must be likely to
							continue for at least two years{'\n\n'}An aged dependent relative visa is for single,
							widowed, divorced or formally separated applicants who are dependent on an Australian
							relative{'\n\n'}A remaining relative visa is for applicants who have no near relatives
							outside Australia and are the brother, sister, child or step equivalent of an Australian
							citizen, Australian permanent resident or eligible New Zealand citizen.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/familyVisaPicture/family_visa_service.jpg')}
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
