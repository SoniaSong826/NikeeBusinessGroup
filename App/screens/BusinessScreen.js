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
	changeLayout4 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded4: !this.state.expanded4 });
	};
	changeLayout5 = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ expanded5: !this.state.expanded5 });
	};
	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Business Advisors</AppText>
					<AppText style={styles.introduction}>
						Nikee Business Group delivers a range of business solutions to assist you in achieving your
						business goals. Our business consultants work with thousands of SMEs and small businesses
						Australia-wide, providing them with the tools, resources and practical advice to help them make
						more efficient; effective management decisions.{'\n\n'}Our consultants understand what it takes
						to build a successful business and have been trusted by Australians since 1996. We analyse your
						business, look into the areas which you would like to focus on and we not only help you grow
						your business but also assist with the fundamentals of recruitment, developing a staff training
						plan, implementing leadership in your teams, business restructuring and provide advice on a
						range of matters.{'\n\n'}Our methods are presented in a straightforward but effective manner so
						any business owner will be able to immediately implement any advice or knowledge shared. Through
						our interaction tracking and management software we can allow accelerate your business growth
						through targeted marketing campaigns, developing a thorough business plan and leveraging
						resources. {'\n\n'}We will provide you with the tools to assist you in developing a coherent and
						structured business plan, and train you, as a business owner, to be able to identify issues
						early and implement optimum solutions at the right times.{'\n\n'}We understand that as a
						business-owners, you are juggling multiple hats at once and may be also struggling with numerous
						issues including shortages of skilled staff and effective resources to help grow the business.
						We want to work together with you to eliminate these problems and build as to identify and
						implement solutions which will generate quick results and provide long term growth to achieve
						their international business goals to import, export or establish a business presence overseas.
						{'\n\n'}Our methods are presented in a straightforward but effective manner so any business
						owner will be able to immediately implement any advice or knowledge shared. Through our
						interaction tracking and management software we can allow accelerate your business growth
						through targeted marketing campaigns, developing a thorough business plan and leveraging
						resources.{'\n\n'}Our Consultants combine practical experience with the latest international
						knowledge and high level connections in both government and business to:{'\n\n'}Connect you to
						international networks and provide the latest market and industry information.Work with you to
						achieve your global business.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../assets/businessPicture/Business-Advisors.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>How We Can Grow Your Business</Text>
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
							Access to country and industry experts to grow your business overseas{'\n\n'}Market
							intelligence{'\n\n'}Market entry strategies{'\n\n'}Distribution partner matching{'\n\n'}
							Market visits{'\n\n'}International trade consulting{'\n\n'}Export documentation{'\n\n'}Trade
							missions{'\n\n'}Events.{'\n\n'}Our plans are flexible and are designed to support the
							largest multi-national corporations to a single individual. With clients in all industry
							segments, we have a deep understanding of their businesses and how changes in laws and
							regulations will impact them.{'\n\n'}Advances in the growing global markets in business,
							management technology are transforming just about every part of our lives, from the way we
							work to the way we manage, communicate and access services{'\n\n'}Innovation is about new
							and existing businesses which can create new products, processes and business models for
							their business growth. Innovation is important to every sector of the economy – from ICT to
							healthcare, education to agriculture, and defence to transport{'\n\n'}Small and Medium
							business owners are often challenged by the industry to handle multiple tasks and wear too
							many hats. Let our consultants advise you on all these challenges so you can be better
							equipped to focus on what you need to do and you are extremely good at – running your
							business.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Business Plans and Reports</Text>
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
							Whether you’re an established or start-up business, it’s important to have a plan to help
							you achieve your goals.{'\n\n'}A business plan outlines your strategy for the next couple of
							years. It may be used to help support an application for business finance or business
							grants, or it could be just for your own use as a roadmap for the growth of your business.
							{'\n\n'}It explains your objectives and the actions required to get your small business from
							where it is now, to where you want it to be.{'\n\n'}The process of writing your plan will
							help you focus, crystallise your ideas and identify priorities, saving both time and effort.
							Your business plan will give you a clear sense of direction and a benchmark enabling you to
							measure progress.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Labour Marketing Testing</Text>
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
							Standard Business Sponsors must, unless exempt, test the local labour market prior to
							nominating an overseas worker.{'\n\n'}Sponsors must then provide information about their
							attempts to recruit Australian workers to the department, the cost of doing so and
							demonstrate how they have determined that there is no suitably qualified and experienced
							Australian citizen or permanent resident to fill the position.{'\n\n'}Subject to Australia's
							international treaty obligations, except where the occupation is protected, exemptions from
							the labour market testing requirement may apply in relation to the required skill level for
							a nominated position.{'\n\n'}Essentially, this means that all ANZSCO Skill Level 1 and 2
							(that is managers and professionals) are exempt from the labour market testing requirement
							with the exception of occupations in the nursing and engineering professions.{'\n\n'}Labour
							market testing is a process which employers must undergo, It is not required for all
							occupations, however we recommend that labour market testing be a core component for all 457
							visa applications{'\n\n'}Labour Market testing is essentially testing the local labour
							market for a specific vacant position prior to lodging a nomination application.{'\n\n'}This
							testing ensures that there is no suitably qualified and experienced Australian citizen,
							permanent resident or ‘eligible temporary visa holder’ readily available to fill that vacant
							position.{'\n\n'}It also supports the employer’s decision of hiring an overseas worker.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>Genuine and Need For Position Reports</Text>
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
							The genuine position requirement provides authority for the department to refuse a
							nomination if there are concerns that the position associated with the nominated occupation
							is not genuine or was created specifically to achieve a migration outcome.{'\n\n'}This is
							intended to ensure that the position is genuinely required by the business and that the 457
							programmer is only being used for legitimate purposes.{'\n\n'}The requirement also provides
							decision-makers with the ability to better scrutinize cases where the authenticity of the
							certifications made by the business in relation to the tasks and skill level of the position
							is questionable.{'\n\n'}A detailed and analytical report in support of the Genuineness of
							the Nominated Position and Need of the Nominee plays a vital role in the success of a
							nomination application.{'\n\n'}The company must demonstrate that the nominated position is a
							genuine position within the company.{'\n\n'}The position is relevant to the nature and scope
							of the business activities of the company and is necessary to the continuing operations of
							the business.{'\n\n'}Our reports are professionally written and many nomination applications
							have been successful due to our detailed reports.{'\n\n'}The most important requirements
							when sponsoring a foreign employee is whether the nominated position is a genuine position
							and if there is a genuine need for a foreign worker within the busines.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout5} style={styles.BtnBlue}>
						<Text style={styles.title}>Salary Reports</Text>
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
							The market rate framework is based on the principle that, to the maximum extent possible
							given their particular circumstances, 457 visa holders should be provided with terms and
							conditions of employment (earnings) which are no less favourable than those provided to an
							Australian worker performing equivalent work.{'\n\n'}The policy imperative of the market
							rates framework is that the 457 visa holder be paid neither under the market rate (with the
							risk that this would entail of overly “cheap” labour), nor over it (which could indicate
							that Australians were being paid inequitable salaries compared to temporary skilled
							migrants).{'\n\n'}Market Salary Reports provide detailed information on the salary range of
							various occupations including market salary research within a wide range of industries.
							{'\n\n'}A Market Salary Report is a report that gathers detailed salary information and
							range for various occupations within a number of industries. It provides useful insights
							into salary forecasts and expectations and recruitment challenges.{'\n\n'}It helps companies
							plan for their human resource needs by providing detailed analysis and research on the
							current salaries of various occupations.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../assets/businessPicture/business_service.jpg')}
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
