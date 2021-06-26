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
			<ImageBackground style={styles.backGround} source={require('../assets/background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Recruitment and Placement Services</AppText>
					<AppText style={styles.introduction}>
						At Nikee, we understand that finding work in Australia can be extremely difficult. We are the
						“middle-men” who match qualified students looking for jobs with employers seeking local and
						international applicants across our huge database, built over the last 23 years. Since 1996 we
						have helped over 16,000 people throughout our Nikee Business Group network to study and work in
						Australia. We are now in the top 2% of registered migration agents in Australia. We specialise
						in matching job seekers with suitable employers in all regional areas.{'\n'}{'\n'}When it comes to
						finding regional work in Victoria, New South Wales, Western Australia, South Australia, Tasmania
						or the North Territory, we will liaise with our partners and our connections in the hidden job
						market to find you a position that matches your qualifications. We work with thousands of
						businesses Australia wide to enable our students to work in a job that they enjoy and one that
						also matches their needs. In recent years we have had a very high success rate with our
						placements that both match our students skills and fields of expertise and that fulfil their
						needs as well.",
					</AppText>
					<Image
						style={styles.pic}
						source={require('../assets/employmentPicture/employment_service.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>How We Help</Text>
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
							Our consultants will give you detailed advice and in-depth career counselling to assist you
							with your specific situation.{'\n'}
							{'\n'}We will help you select not only the most relevant course to study based on your needs
							but will also help you enrol at a discounted cost through our partners.{'\n'}
							{'\n'}We will provide you with all the information and documentation required to make an
							informed decision.{'\n'}
							{'\n'}Our consultants even prepare the forms for you, if you are struggling with your
							English and need that extra support so you can feel relieved and stress-free.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Once You Have Completed Your Studies</Text>
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
							Many international students choose to work in Australia at the completion of their courses.
							Indeed, in some industries and courses it may be crucial to complete a work placement
							orinternship in order to gain professional accreditation in the field.{'\n'}
							{'\n'}Work placements and internships in your industry are crucial in Australia and will
							provide you with a valuable starting point in gaining employment.Whether you plan to
							continue to live and workin Australia or go back to your home country to work, or even a
							combination or both, completing a placement in Australia is highly likely to increasesyour
							chances of getting a better job down the track. Further, work placements and internships
							definitely increases your chances as an international studentof finding an Australian
							employer to sponsor you so that you can obtain a permanent residence status in Australia.
							{'\n'}
							{'\n'}If you ever have the chance to work in Australia, consider yourself quite lucky. Post
							higher education employment in Australia has some of the highestpaying jobs worldwide and
							with wages usually higher than the home countries of most international students, it
							certainly assists students to covertheir tuition fees and loans. Not only can you repay your
							loans, but you will also get an opportunity to send some money back home to family,complete
							further study or even get a return on their substantial investment of studying in Australia.{' '}
							{'\n'}
							{'\n'}The opportunity to work in Australia attracts thousands of international students each
							year, and those fortunate enough to undertake this journey,place themselves well ahead of
							their friends and peers back home.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Australian Qualification International Recognition</Text>
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
							Australia has an international reputation for excellence in all areas of education and
							training with many of our universities holding top rankings worldwide. Depending on the
							course you choose to study in Australia you will have a different number of contact hours
							(face-to-face) time. Nowadays majority of universities have their classes recorded and
							accessible via an online portal, meaning that you may not even need to enter campus if you
							prefer studying through the online method. Most Bachelor courses have classes during the
							day. For Masters courses, some universities offer evening classes, which means you’ll have
							the chance to work a few hours during the day and make some money to cover your tuition
							fees.{'\n'}
							{'\n'}Australia also is a leading country for innovation and growth and encourages a work
							life balance. Australian professors are experts in their industries and most students find
							their teachers a fantastic resource even once they have graduated, helping them meet
							industry professionals and connect with role models in the professional space. Many of
							Australia’s top professors hold international awards, a PhD or exceptionally high
							educational and professional experience.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>Vocational ED</Text>
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
							Australia’s approach to vocational education and training leads the world in innovation and
							quality. You’ll have the opportunity to step outside the classroom and practice your skills
							in real and simulated workplaces, which will give you a huge advantage over other
							graduates."
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout5} style={styles.BtnBlue}>
						<Text style={styles.title}>Why Australia?</Text>
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
							In Australia truly is the land of opportunity. Every university has a range of diverse and
							interesting courses which embrace innovation, technology, business, creativity and much
							more. Studying in Australia will give you the freedom to choose a path that suits you and
							your goals. With thousands of courses on offer you are bound to find something to match your
							needs.{'\n'}
							{'\n'}AWhichever course you choose, you’ll experience a unique kind of education. Studying
							in Australia promotes innovative, creative and independent thinking. Many assessments
							involve independent work as well as team work to help you communicate effectively with
							others and to develop the practical skills and intellectual skills detrimental for your
							global success. You will learn how to be proactive and take initiative. Your teachers will
							encourage you to think of original, practical solutions to real-world problems. Above all, a
							degree from an Australian university is quite highly regarded in most countries worldwide
							and will place you as a top candidate for any job in Australia or even internationally.
							{'\n'}
							{'\n'}AThe Australian education system has a strong international reputation and is known
							for its effective structure and innovative policy developments. Many other countries, eager
							to improve their own education systems, turn to Australia for advice. Australia is also one
							of the best places to live, with our home city Melbourne taking the prize for ‘The World’s
							Most Liveable City’. We are vibrant, multicultural and friendly country in which students
							can not only study and live but also grow into well-rounded individuals both mentally and
							physically. Australia’s the place to be.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout6} style={styles.BtnOrange}>
						<Text style={styles.title}>Visas</Text>
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
							Take advantage of our quality education and training in Australia by applying for a student
							visa and you could be living your dream here in Australia. Visas are granted by the
							Australian Department of Immigration and Citizenship (DIAC). DIAC will grant you a student
							visa if your course is registered, or is part of a registered course, and only if it is
							studied on a full-time basis.{'\n'}
							{'\n'}A registered course is one offered by an Australian education provider registered with
							the Australian Government to offer courses to overseas students. Visit the Commonwealth
							Register of Courses and Institutions for Overseas Students (CRICOS) website for more
							information. On a Visitor or Working Holiday visa you can only study courses under three
							months duration For courses longer than three month you must apply for a student visa.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout7} style={styles.BtnBlue}>
						<Text style={styles.title}>Student Visa Advantages</Text>
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
							Access to Australia’s sub-sidised student health cover.{'\n'}
							{'\n'}Ability to study longer than three months..{'\n'}
							{'\n'}Ability to work part-time.{'\n'}
							{'\n'}As soon as you receive a letter of offer or Confirmation of Enrolment (CoE) from your
							educational institution, you will be able to apply for your student visa. Our local
							Australian office can also give you information on applying including:{'\n'}
							{'\n'}All the facts you need to know before you submit your application{'\n'}
							{'\n'}Most common mistakes students make when applying and how to avoid them{'\n'}
							{'\n'}How to tailor your application to your institution{'\n'}
							{'\n'}All the key documents you will need for your application{'\n'}
							{'\n'}How to have you application processed faster &amp; in the optimal way.
						</Text>
					</View>
					<Image
						style={styles.pic}
						source={require('../assets/educationPicture/service_education2.jpg')}
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
		padding: 10,
		textAlign: 'justify',
		lineHeight: 22,
	},
	pic: {
		width: windowWidth - 20,
		marginHorizontal: 10,
		resizeMode: 'contain',
	},
});
