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
			expanded6: false,
			expanded7: false,
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
	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Tech Solutions</AppText>
					<AppText style={styles.introduction}>
						Our Tech team provides services in IT, web development, consulting We provide IT development,
						consulting and IT Services with highly qualified professionals, committed to provide efficient,
						cost-effective, on-time solutions.{'\n\n'}We have brought together some of the best
						professionals from well reputed businesses locally and overseas such as Team-IT, My Computer
						India and IMigrate247. A client focused, innovative approach to research and assessment combined
						with a high level of ethics and values makes us the most challenging consulting firm in
						Melbourne.{'\n\n'}We will empower your IT department or become it. We seek long term
						relationships with our customers. We firmly believe that conventional wisdom says that most
						companies need computers to succeed in today’s fiercely competitive business environment.
						{'\n\n'}NTS optimizes the use of technology and brings our network administration and computer
						networking consultants to your business that are reflected in your bottom line. At NTS we begin
						by listening to you explain how your business operates, what are the problems and bottlenecks,
						what needs to be done to make it more efficient – and therefore more profitable.{'\n\n'}Then
						we’ll create a plan – specific to your business – to implement those solutions. We’ll also
						recommend hardware and software, work with you during installation and on training your people,
						and help you get your communications system up and running.{'\n\n'}We’ll also offer you a
						support plan so that we can be available to answer your questions and to help with
						troubleshooting.{'\n\n'}NTS provides end-to-end IT consulting, Software Development, IT Support,
						Business, Systems and Network services.{'\n\n'}Combining deep industry expertise with
						high-powered technology, our consultants deliver premium business solutions to clients.{'\n\n'}
						NTS provides innovative technology solutions to improve business processes and in turn,
						profitability.{'\n\n'}With NTS you can expect to deliver practical business services while
						staying on top of your professional development and expanding your skills and knowledge.{'\n\n'}
						Join us and help make the world smarter – one consulting project at a time.{'\n\n'}Our software
						is based on intelligent techniques to efficiently automate your entire business.{'\n\n'}A decade
						of research into user interface and usage analysis{'\n\n'}Seamless data entry in our software is
						just the start.{'\n\n'}Can be integrated with your existing software ecosystem{'\n\n'}Provide
						you dramatic increase in business efficiency and employee productivity.{'\n\n'}Add to that the
						capability to analyze and access data from anywhere over the internet and you have got a great
						deal of power waiting to be unleashed.
					</AppText>
					<Image style={styles.pic} source={require('../assets/technologyPicture/technology.jpg')}></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>IT Consultancy</Text>
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
							Our Business Consultants are your complete resource for personal, professional and
							experienced small business and technology consulting services.{'\n\n'}We apply big business
							knowledge and experience to a small business owner’s unique needs.{'\n\n'}From providing
							short-term small business advice to becoming your long-term consulting partner, a consultant
							can increase your productivity and let you concentrate on what you do best.{'\n\n'}Our in
							depth management and wid.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Web Development</Text>
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
							Old non-responsive websites are only good for one thing – LOSING POTENTIAL CUSTOMERS.
							Develop an SEO friendly, mobile responsive website in just weeks. Elevate your brand design,
							improve your views and convert web viewers into loyal customers.{'\n\n'}Are you struggling
							with:{'\n\n'}Creating a modern, responsive and interactive website for your customers?
							{'\n\n'}Setting up your SEO and increasing your google ranking organically?{'\n\n'}A lack of
							coding skills to build an amazing and engaging website that you have in mind?{'\n\n'}Copy
							writing and the ability to attract customers with engaging words and content?{'\n\n'}
							Building a login and register page or a members portal for your website?{'\n\n'}Check out
							some of our web development projects:{'\n\n'}www.nikeemigration.com{'\n\n'}
							www.myclient247.com.au{'\n\n'}www.findrbooking.com{'\n\n'}www.njproductions.com.au{'\n\n'}
							www.weddingsbynj.com{'\n\n'}www.sweetutsav.com.au{'\n\n'}www.bananawrap.com{'\n\n'}Ready to
							deliver your brand?Email us today:nikee@nikeeworld.com
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Software Programs</Text>
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
							Have you been wanting to develop a new software for your small business?{'\n\n'}Do you have
							the perfect idea in mind but can’t seem to find the right onshore software developer to make
							it happen?{'\n\n'}We can solve that for you! From accounting softwares that do it all, to
							legal softwares that generate business contracts in just minutes, with Nikee anything is
							possible.{'\n\n'}Here’s some of the things our software developers create for your business:
							{'\n\n'}Account report automation{'\n\n'}Legal contracts automation{'\n\n'}Generate staff
							productivity reports{'\n\n'}Manage leads / new /old /closed clients{'\n\n'}Track and manage
							stock volumes{'\n\n'}Appointment booking / consultation integration{'\n\n'}Streamlined
							e-marketing process{'\n\n'}Upload digital forms / templates for staff{'\n\n'}Automate
							e-newsletters{'\n\n'}Create and send discounts + vouchers to clients{'\n\n'}Optimised
							tracking and utility tools for business owners
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>IT Support Services</Text>
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
							IT Services and Support - We can provide you onsite and remote IT support anywhere in
							Melbourne.{'\n\n'}We have team of certified engineer who can resolve your issue in no time.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout5} style={styles.BtnBlue}>
						<Text style={styles.title}>Cloud Services</Text>
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
							Hosted Exchange Full featured Microsoft exchange server gives you flexibility of corporate
							email system without spending on hardware, software and licensing. Benefits.{'\n\n'}Access
							your email, tasks, calendar from anywhere in the world with internet connection{'\n\n'}
							Access your email, tasks, calendar from mobile devices like iPhone and blackberry{'\n\n'}
							Fixed price to control your IT budget{'\n\n'}Built in antivirus and antispam features gives
							you peace of mind from online threats{'\n\n'}Create delete and modify users and mailbox from
							web based portal.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout6} style={styles.BtnOrange}>
						<Text style={styles.title}>VOIP, DATA and Internet</Text>
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
							VOIP (Voice over IP local and hosted) Slash your phone bills !!! Utilize Voice over Internet
							Protocol (VoIP){'\n\n'}Everyday more and more Enterprises are moving from conventional
							telephone methods to VoIP systems.{'\n\n'}VoIP allows carrying voice and data traffic over
							packet network. It may be Local Area Network or Wide Area Networking including Internet.
							{'\n\n'}We have expertise over deploying VoIP Solutions. We can easily design, develop and
							deploy multi-vendor Phones, PBX for your office environment.{'\n\n'}We rely on our
							experienced team of CCNP (Cisco certified network professional) and CCVP (Cisco certified
							voice professional) employees.{'\n\n'}These phones are effortless to set up, manage, and
							update. You can select from a broad range of services intended to meet your company
							requirements and budget to assist in improving productivity, encourage collaboration, and
							decrease operating costs.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout7} style={styles.BtnBlue}>
						<Text style={styles.title}>Managed Services</Text>
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
							Remote monitoring - We have invested in a state of the art cloud based IT monitoring system
							that constantly feeds IT health and performance information back to our Operations Centre
							over a secure connection.{'\n\n'}Proactive Support - When our monitoring system detects a
							potential IT issue we are instantly alerted and can provide proactive support to address the
							issue before it affects your business.{'\n\n'}Remote Desktop Control Fast and secure access
							to your managed IT systems allows us to instantly respond to IT issues or provide an
							interactive user support or training session. Security and Anti Virus Management{'\n\n'}We
							automatically detect missing security patches or failed antivirus systems. Missing patches
							or antivirus issues can be ad-dressed remotely and out of hours ensuring you are not exposed
							to possible Virus or Hacker attacks.{'\n\n'}Backup monitoring - Our monitoring systems will
							ensure your important business data is being successful backed up as expected.{'\n\n'}Daily
							email alerts can be sent to indicate the success or failure of the backups, Asset Management
							Report and track locations, owners, suppliers, date of purchase, warranty and lease details
							across all of your managed IT devices.{'\n\n'}Get an up-to-date view of the hardware and
							software in use across your business. Track software licensing, installation dates,
							locations and managed device hardware configurations.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../assets/technologyPicture/tech_service.jpg')}
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
