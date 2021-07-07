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

	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>IELTS AND PTE</AppText>
					<AppText style={styles.introduction}>
						Do you want to study in Australia or gain an Australian visa? Then you may have already heard of
						the IELTS and PTE tests.
					</AppText>
					<Image style={styles.pic} source={require('../assets/IELTSPicture/employment.jpg')}></Image>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.BtnBlue}>
						<Text style={styles.title}>The IELTS Test</Text>
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
							IELTS stand for ‘International English Language Testing System’ and is a language
							proficiency test used to assess international students’ level of English proficiency in a
							country where English is the native language or primary language used. {'\n\n'}The IELTS
							test consists of four key areas:{'\n\n'}Listening – Tests your ability to hear, comprehend
							and detect certain specific information{'\n\n'}Speaking – Tests your ability to respond to
							others, express your ideas, ask questions and your pronunciation of typically used words.
							{'\n\n'}Reading – Tests your ability to comprehend and understand pieces of information
							(graphs, charts, letters, etc.), your ability to speed read and the techniques you use when
							analysing specific readings.{'\n\n'}Writing – Tests your ability to respond to specific
							questions, coherently and concise express your thoughts, arrange and organize content
							effectively and produce written content with a high level of grammatical accuracy.{'\n\n'}
							The average person studies at least 20 hours a week for about six months before sitting
							their IELTS test. What are you doing to help you achieve the highest grades possible in your
							IELTS?{'\n\n'}We provide IELTS coaching and support to help prepare you for your test and
							also offer you the option of speaking with our IELTS partners to get the best deal on your
							IELTS course.
						</Text>
					</View>
					<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.BtnOrange}>
						<Text style={styles.title}>PTE Academic Test</Text>
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
							The PTE Academic Test is the Pearson Test of English for study abroad candidates and for
							those wanting to migrant to Australia. It is an unbiased English test which the Australian
							government accepts as part of your visa application{'\n\n'}The PTE Academic is trusted by
							universities, colleges and governments worldwide as it incorporates artificial intelligence,
							technology and recognition techniques to test your understanding of the English language.
							{'\n\n'}The PTE Academic Test consists of the following areas:{'\n\n'}Part 1:{'\n\n'}
							Speaking Writing (77 – 93 minutes) – Tests your ability to pronounce English words, respond
							to questions, comprehend tasks required, your use of grammar and punctuation and your
							ability to express yourself concisely in written English (essay format).{'\n\n'}Part 2:
							{'\n\n'}Reading (32 – 40 minutes) – Tests your ability to respond to multiple choice
							questions, re-order paragraphs, comprehend complex written pieces and fill in missing
							information.{'\n\n'}Part 3:{'\n\n'}Listening (45 – 57 minutes) – Tests your ability to
							summarise spoken test, identity key information and apply it to questions, identity
							incorrect words and write from dictation.{'\n\n'}Whilst the format of the PTE test is
							challenging, many students feel it’s quite achievable if you have put in the practice and
							the hours required to gain confidence in each area of the test.{'\n\n'}Ready To Start?
							{'\n\n'}Are you ready to put in the hours to get the results? To start your IELTS or PTE
							test preparation give a us call today (03) 9663 5277 or email us at nikee@nikeeworld.com and
							let’s get you started!
						</Text>
					</View>
					<Image style={styles.pic} source={require('../assets/IELTSPicture/ielts_service.jpg')}></Image>
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
