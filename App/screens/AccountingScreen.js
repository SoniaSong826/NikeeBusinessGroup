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
					<AppText style={styles.header}>Accounting Solutions</AppText>
					<AppText style={styles.introduction}>
						Nikee Accounting Solutions (NAS) was established to assist small businesses and individuals with
						their finances by providing cost effective accounting services and financial advice in
						comparison to complex large firms that deal predominantly with costly corporate tax.{'\n\n'}NAS
						is here to help take the financial stress out of running a business. We love working with
						individuals like you who need ongoing business advice and support on a range of matters
						including business returns, bookkeeping, restructuring, property investment, family trust and so
						on.{'\n\n'}Whether you’re a Sole Trader, Partnership, Company, Individual or Sub-Contractor, the
						team at NAS is here to service all your financial needs. We offer a high standard of service
						with affordable rates so that it is accessible to all. Some of our clients include small
						business owners, tradesmen, sub-contractors, retail stores owners.
					</AppText>
					<Image style={styles.pic} source={require('../assets/accountingPicture/accounting.jpg')}></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Business Restructuring</Text>
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
							Your business structure is the foundation of your business, but as a small business, many
							owners tend to leap into their business because they have a particular skill or talent,
							thinking they can manage their finances on their own. Usually, it’s not until someone is in
							trouble that you reach out for external assistance. Why wait until something goes wrong?
							Start now and build the correct foundations for your business!
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Accounting Services</Text>
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
							Establish a structured, well-performing accounting system which tracks your data accurately
							and puts it in a usable format to help the business owner make educated management
							decisions.{'\n\n'}Creating the right accounting procedures and tools to help you be
							stress-free when it comes to your businesses’ finances.{'\n\n'}Implement proper accounting
							methods from the very beginning to prevent you from falling into legal traps or trouble with
							the ATO{'\n\n'}Auditing your business to ensure you are compliant with current regulations.
							{'\n\n'}Providing you with a specialised accounting professional to look after all your
							financial business needs.{'\n\n'}We’ll look after the numbers, so you can focusing on
							growing your business!
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Financial Advice</Text>
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
							We understand that employing an accountants or advisors will provide you with a valuable
							asset to your business in the long run. By having a professional hand to management your
							financial affairs, you will not only sleep better at night, but you can feel freer to do the
							things you love and leave the numbers to us{'\n\n'}Advisory Services{'\n\n'}Preparation of
							all financial statements as required.{'\n\n'}Analysis of your financial data, payroll, cash
							flow, profit and loss, future forecast financial planning and deep analysis of potential
							threats or weak spots.{'\n\n'}Advise on how to structure your finances for the best possible
							return.{'\n\n'}Assistance with the preparation of financial application.{'\n\n'}
							Implementation of review of accounting and business computer systems.{'\n\n'}Tax planning
							and compliance.{'\n\n'}Capital gains, Goods and Services Tax and other Specialist Tax
							Services including Succession planning, Transition to Retirement Investment Solutions.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>Book-keeping</Text>
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
							We provide our clients with accurate, reliable and timely book-keeping services where you
							will work closely with our accountants and book-keepers. The advantage of this is that you
							will have a oversight of your business finances and a personal extra hand to guide you and
							be your point of contact when needed. We will streamline and simplify your financial
							reporting functions whilst providing you with the correct information to make accurate
							management decisions.{'\n\n'}You will receive{'\n\n'}Quarterly monthly reports for your
							business activity{'\n\n'}A professional accountant to work closely with on all your
							businesses’ financial decisions{'\n\n'}Tailored book-keeping services to suit your
							professional industry and your business’ needs.{'\n\n'}A report on the accounts receivable
							and accounts payable{'\n\n'}Advise on budgeting and planning for the future.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout5} style={styles.BtnBlue}>
						<Text style={styles.title}>Wealth Growth</Text>
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
							Simply launching a business is not enough. You may end up in a position where your growth
							and profits are great but you’re still struggling to pay your BAS at the end of the day.
							Nikee Accounting Services provides you with the support to not only ensure you stay on top
							of your finances, but also to help you build an investment portfolio, passive income or a
							new income streams to help you live a comfortable life.{'\n\n'}Wealth Growth Services
							{'\n\n'}Personalised, professional cashflow analysis tailored to your business or personal
							needs.{'\n\n'}Regular asset viability reports to help you manage your assets and cover new
							purchases.{'\n\n'}Financial reports to support for your bank, loans and mortgaging needs.
							{'\n\n'}Implementation review of accounting and business computer systems.{'\n\n'}Tax
							planning and preparation to prevent you from falling into traps and receiving an
							insurmountable bill at the end of the year.{'\n\n'}Assistance with ATO matters and
							documentation preparation.{'\n\n'}Succession planning, transition to retirement and tailored
							investment solutions help you prepare for your future.{'\n\n'}Proactive accounting solutions
							to taxation compliance and a business plan that adapts with your business.{'\n\n'}We are
							committed to preparing you for the future and look forward to building a long-term
							relationship with you to manage and maintain all your financial matters in a timely and
							effective manner.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../assets/accountingPicture/accounting_service.jpg')}
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
