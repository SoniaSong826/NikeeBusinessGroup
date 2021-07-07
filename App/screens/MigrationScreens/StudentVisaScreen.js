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
			<ImageBackground style={styles.backGround} source={require('../../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Student Visa</AppText>
					<AppText style={styles.introduction}>
						Australia offers a diverse range of study options for international students, with more than
						1,200 institutions and over 22,000 courses to choose from.You can study at all levels of
						education from primary and secondary school, to vocational education and training (VET), from
						English language courses to higher education (including universities).{'\n\n'}No matter what you
						are studying or how long you are studying for, Australia’s laws promote quality education and
						protection for international students.{'\n\n'}Australia has an good international reputation for
						excellence in all areas of education and training.Australian qualification,international
						recognition.{'\n\n'}Australian universities are widely known for the quality of their teaching
						and research. You’ll learn from teachers who are experts in their industries and who can provide
						you with a sound understanding of your chosen field. You’ll develop strong academic skills that
						can be applied to other areas and learn to think creatively and independently.A place where work
						and study meet.{'\n\n'}Australia’s approach to vocational education and training leads the world
						in innovation and quality.{'\n\n'}You’ll have the opportunity to step outside the classroom and
						practice your skills in real and simulated workplaces. This will give you a genuine advantage
						over other graduates and a great place.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/studentVisaPicture/student_visa_service.jpg')}
					></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>Why Study In Australia</Text>
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
							In Australia, you have the freedom to choose a path that suits your particular goals. There
							are thousands of courses on offer.{'\n\n'}Whichever course you choose, you’ll experience a
							unique kind of education. Studying in Australia promotes innovative, creative and
							independent thinking.{'\n\n'}You’ll learn to work as part of a team, to communicate
							effectively with others and to develop the practical skills and intellectual abilities you
							need for global success.{'\n\n'}Most importantly, you’ll learn how to use your initiative.
							Your teachers will encourage you to think of original, practical solutions to real-world
							problems. Upon graduation, your qualification will make you highly sought after by
							Australian and international employers.{'\n\n'}The Australian education system has a strong
							international reputation and is known for its effective structure and innovative policy
							developments. Many other countries, eager to improve their own education systems, turn to
							Australia for advice.{'\n\n'}Australia is also one of the best places to live. It is a
							young, vibrant and friendly country in which students can live, learn and grow. So if you
							want a quality education and a good lifestyle, Australia’s the place to be.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>Visas</Text>
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
							If you want to take advantage of our quality education and training system, you may apply
							for a student visa.{'\n\n'}The Department will only grant you a student visa if your course
							is registered, or is part of a registered course, on a full time basis.{'\n\n'}A registered
							course is one offered by an Australian education provider registered with the Australian
							Government to offer courses to overseas students.{'\n\n'}Only courses under three months’
							duration can be undertaken on a visitor visa or working holiday visa. If you intend to study
							for more than three months, you must apply for a student visa.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout3} style={styles.BtnBlue}>
						<Text style={styles.title}>Applying For Your Student Visa</Text>
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
							You can apply for your student visa as soon as you receive a letter of offer or electronic
							Confirmation of Enrolment (CoE) for your full time course of study.{'\n\n'}There is a range
							of entry requirements that you will need to meet both for you institution application and
							your visa application. This can include:{'\n\n'}Academic requirements.{'\n\n'}English
							language requirements.{'\n\n'}Evidence of funds to support your study.{'\n\n'}Overseas
							student health cover.{'\n\n'}If you're already living or working in Australia, you may still
							be able to apply to study here as an international student.{'\n\n'}Advantages to studying on
							a student visa include:{'\n\n'}you will have access to Australia’s subsidised student health
							cover;{'\n\n'}you will be allowed to study for longer than three months; and{'\n\n'}you can
							apply for permission to work part time.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout4} style={styles.BtnOrange}>
						<Text style={styles.title}>Simplified Streamlined Visa Framework (SSVF) Highlights:</Text>
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
							Two visa classes{'\n\n'}Subclass 500 – Student Visa{'\n\n'}Subclass 590 – Student Guardian
							Visa{'\n\n'}SSVF is implemented from July 1, 2016{'\n\n'}Student Visa (Subclass 500){'\n\n'}
							If you intend to study in Australia, you will need to apply for the Student visa (subclass
							500).{'\n\n'}You can apply for the following types of study on this visa:{'\n\n'}English
							Language Intensive Courses for Overseas Students (ELICOS){'\n\n'}School – primary or
							secondary{'\n\n'}Secondary school exchange program{'\n\n'}Vocational Education and Training
							(VET) courses –a registered VET course or a registered course for the award of an advanced
							diploma{'\n\n'}Higher education courses –a bachelor or associate degree, a graduate
							certificate or graduate diploma, a masters degree by coursework or a higher education
							diploma or advanced diploma{'\n\n'}Postgraduate Research degrees –a masters degree by
							research or a doctoral degree{'\n\n'}Non-award courses – non-award foundation studies
							courses or components of a course that do not lead to an award{'\n\n'}Students sponsored by
							the Department of Foreign Affairs or Trade or the Department of Defence.{'\n\n'}You may be
							able to package your courses if you would like to study more than one course. This is known
							as course packaging.{'\n\n'}Student Guardian Visa (Subclass 590){'\n\n'}If you plan to come
							to Australia to provide care to a student under 18 years, you can apply for the Student
							Guardian visa (subclass 590).{'\n\n'}Core student visa requirements:{'\n\n'}Genuine
							Temporary Entrant{'\n\n'}Enrolment{'\n\n'}Health and Character{'\n\n'}Welfare arrangements
							(where applicable){'\n\n'}Overseas health insurance{'\n\n'}Mandatory online lodgement for
							all student visas under SSVF{'\n\n'}Implications{'\n\n'}Education providers will be
							allocated an immigration risk rating, based on the immigration risk outcomes over the
							previous 12-month period{'\n\n'}The same approach will also be used to allocate an
							immigration risk rating to each country.{'\n\n'}Combined immigration risk outcomes of
							education provider and country of citizenship would be used to guide the level of financial
							capacity and English language proficiency related documentation{'\n\n'}Streamed evidentiary
							requirements:{'\n\n'}Student visa applicant will generally be able to satisfy the Department
							of their financial capacity and English language proficiency by declaration{'\n\n'}This is
							similar to existing streamlined visa processing and Assessment Level (AL) 1 arrangements
							{'\n\n'}DIBP would however retain the discretion to seek additional information about the
							student’s financial capacity and English language proficiency where appropriate{'\n\n'}All
							students will continue to have to meet all other core visa criteria, such as the Genuine
							Temporary Entrant requirement and health and character criteria{'\n\n'}Financial
							Requirements:{'\n\n'}Further evidence only required for ‘regular’ students{'\n\n'}Three
							options to meet financial requirement:{'\n\n'}12 months’ evidence of living, tuition, travel
							and study costs ($19,830{'\n\n'}Annual income{'\n\n'}AASES form{'\n\n'}Funds must be
							genuinely available{'\n\n'}Language Requirements:{'\n\n'}Documentary evidence only required
							for ‘regular’ students{'\n\n'}Two options to meet English requirement{'\n\n'}Evidence of
							acceptable test score{'\n\n'}Exemption category
						</Text>
					</View>

					<Image
						style={styles.pic}
						source={require('../../assets/migrationInsidePicture/studentVisaPicture/student_visa.jpg')}
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
