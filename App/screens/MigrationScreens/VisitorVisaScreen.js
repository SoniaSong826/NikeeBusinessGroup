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
			<ImageBackground style={styles.backGround} source={require('../../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Visitor Visa</AppText>
					<AppText style={styles.introduction}>
						There are three visas that you can apply for online to visit Australia for tourism or business
						visitor activities:{'\n\n'}Electronic Travel Authority (subclass 601){'\n\n'}eVisitor (subclass
						651){'\n\n'}Visitor visa (subclass 600){'\n\n'}Tourism includes holidays, recreation and seeing family
						and or friends.{'\n\n'}Business visitor activities may include attending a conference, negotiation
						or an exploratory business visit.{'\n\n'}If you intend to visit for medical treatment or to transit
						through Australia, you should not apply for a Visitor visa.{'\n\n'}If you intend to visit for
						medical treatment you will need to apply for Medical Treatment visa under Australian rule.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/visitorVisaPicture/visitor_visa.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Visitor Visa (Subclass 600)</Text>
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
							This visa lets you visit Australia:{'\n\n'}To visit or for business visitor purposes{'\n\n'}For up
							to three, six or 12 months.{'\n\n'}The base application charge for this visa ranges from AUD135
							to AUD340{'\n\n'}If you hold a certain passport, you might be able to apply for a free or
							cheaper visa.The eVisitor (subclass 651) visa is free. You must be a passport holder of a
							certain country.{'\n\n'}The Electronic Travel Authority (subclass 601) visa has an AUD20 service
							charge. You must be a passport holder of a certain country.{'\n\n'}Requirements{'\n\n'}As a
							visitor{'\n\n'}For business visitor activities{'\n\n'}To visit family{'\n\n'}On a tour with a registered
							travel agent from the People’s Republic of China.{'\n\n'}If you are in Australia you can apply
							for the Tourist stream of the Visitor visa online provided you currently have a valid visa
							that does not have condition 8503 imposed.{'\n\n'}If you are outside Australia only certain
							passport holders can
						</Text>
					</View>

					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/visitorVisaPicture/visitor_visa_service.jpg')}
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
