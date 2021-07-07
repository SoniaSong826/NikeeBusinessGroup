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
	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Business Visa</AppText>
					<AppText style={styles.introduction}>
						The Business Innovation and Investment (Provisional) Visa enables an individual to own and
						manage a business in Australia, to conduct investment activity in Australia or undertake
						entrepreneurial ventures in Australia. With 23+ years expertise in Migration, Education &
						Employment, you will be absolutely in safe hands.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/businessVisaPicture/business_visa_service.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>
							Business Innovation and Investment (Provisional) Visa (Subclass 188)
						</Text>
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
							The Business Innovation and Investment (Provisional) visa (subclass 188) is part of the
							Business Innovation and Investment Programme.{'\n\n'}You must submit an Expression of
							Interest (EOI) through SkillSelect and be nominated by a state or territory government or
							Austrade on behalf of the Australian government before being invited to apply for this visa.
							{'\n\n'}You might be able to get this visa if:{'\n\n'}You are nominated by a state or
							territory government or Austrade on behalf of the Australian government{'\n\n'}You are
							invited to apply{'\n\n'}You (and all your family members) meet certain health and character
							requirements{'\n\n'}You meet the additional requirements for the stream in which you apply.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Business Innovation Stream</Text>
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
							For people with business skills who want to establish, develop and manage a new or existing
							business in Australia. Applicants must be nominated by a state or territory government.
							{'\n\n'}You must:{'\n\n'}Be under 55 years of age, although a state or territory can waive
							this requirement if your proposed business will be of exceptional economic benefit to the
							nominating state or territory.{'\n\n'}Score at least 65 on the points test. Please see the
							Points test tab on this webpage for further information.{'\n\n'}For two out of the four
							fiscal years immediately before you are invited to apply, have had an ownership interest in
							an established business or businesses that had at least AUD500 000 turnover in each of those
							years{'\n\n'}Own at least one of the following percentage of your nominated main business
							{'\n\n'}Have an overall successful business career{'\n\n'}Have a genuine desire to
							continuously own and maintain a management role in a business in Australia.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Investor Stream</Text>
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
							For people who want to make a designated investment of at least AUD1.5million in an
							Australian state or territory and maintain business and investment activity in Australia.
							Applicants must be nominated by a state or territory government.{'\n\n'}Score at least 65 on
							the points test. Please see the Points test tab on this webpage for further information.
							{'\n\n'}Have a high level of management skill in relation to the eligible investment or
							qualifying business activity{'\n\n'}Have at least three years' experience of direct
							involvement in managing one or more qualifying businesses or eligible investments{'\n\n'}
							Have an overall successful record of eligible investment or qualifying business activity
							{'\n\n'}Have a genuine and realistic commitment to continuing your business and investment
							activity in Australia after the original investment has matured{'\n\n'}Have a genuine
							intention to live for at least two years in the state or territory in which you have made a
							designated investment.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>Significant Investor Stream</Text>
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
							Direct investment in residential real estate continues to be prohibited and indirect
							investment in residential property through managed funds is now strictly limited.{'\n\n'}
							Investments must not be used as security or collateral for a loan. More detailed information
							about complying significant investments is available at Austrade.{'\n\n'}Australian
							securities exchange listed assets.{'\n\n'}Australian government or semi-government bonds or
							notes.{'\n\n'}Corporate bonds or notes issued by an Australian exchange listed entity (or
							wholly owned subsidiary of the Australian listed entity) or investment grade rated
							Australian corporate bonds or notes rated by an AFS licenced debt rating agency.{'\n\n'}
							Australian proprietary limited companies.{'\n\n'}Real property in Australia excluding
							residential property.{'\n\n'}Deferred annuities issued by Australian registered life
							companies.{'\n\n'}State or territory government approved philanthropic contribution.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout5} style={styles.BtnBlue}>
						<Text style={styles.title}>Significant Investor Stream</Text>
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
							Direct investment in residential real estate continues to be prohibited and indirect
							investment in residential property through managed funds is now strictly limited.{'\n\n'}
							Investments must not be used as security or collateral for a loan. More detailed information
							about complying significant investments is available at Austrade.{'\n\n'}Australian
							securities exchange listed assets.{'\n\n'}Australian government or semi-government bonds or
							notes.{'\n\n'}Corporate bonds or notes issued by an Australian exchange listed entity (or
							wholly owned subsidiary of the Australian listed entity) or investment grade rated
							Australian corporate bonds or notes rated by an AFS licenced debt rating agency.{'\n\n'}
							Australian proprietary limited companies.{'\n\n'}Real property in Australia excluding
							residential property.{'\n\n'}Deferred annuities issued by Australian registered life
							companies.{'\n\n'}State or territory government approved philanthropic contribution.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout6} style={styles.BtnOrange}>
						<Text style={styles.title}>Entrepreneur Stream</Text>
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
							For people who have a funding agreement from a third party for at least AUD200 000 to
							undertake a complying entrepreneur activity that is proposed to lead to either the
							commercialisation of a product or service in Australia or the development of a business in
							Australia. Applicants must be nominated by a state or territory government.{'\n\n'}Be under
							55 years of age, although a state or territory can waive this requirement if your proposed
							complying entrepreneur activity will be of exceptional economic benefit to the nominating
							state or territory{'\n\n'}Have competent English and be able to provide evidence of this at
							the time you are invited to apply for the visa{'\n\n'}Be undertaking or proposing to
							undertake a complying entrepreneur activity in Australia and have a genuine intention to
							continue this activity{'\n\n'}A Complying Entrepreneur Activity is an activity that relates
							to an innovative idea that will lead to the commercialisation of a product or service in
							Australia, or the development of an enterprise or business in Australia.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/businessVisaPicture/business_visa.jpg')}
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
