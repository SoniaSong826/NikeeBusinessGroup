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

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	render() {
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
				<ScrollView style={styles.container}>
					<AppText style={styles.header}>Health Insurance</AppText>
					<AppText style={styles.introduction}>
						Migrating to a new country can be quite overwhelming! There are so many things to think about –
						like where can I get a job? Where can I find affordable housing? Which insurance providers cover
						all my needs? How much will I be spending on excess? What do I need to cover without breaking my
						budget?{'\n\n'}At Nikee we simplify this entire process for you and break it down through our
						Matched Health Insurance program. Based on the type of visa you are on, the length of your stay
						in Australia, your personal health needs and your budget, we’ll match you with the Health
						Insurance provider that is the best for you.{'\n\n'}At Nikee we simplify this entire process for you
						and break it down through our Matched Health Insurance program. Based on the type of visa you
						are on, the length of your stay in Australia, your personal health needs and your budget, we’ll
						match you with the Health Insurance provider that is the best for you.{'\n\n'}If you are a student,
						we will find you the best health insurance for someone on a student visa. If you have a young
						family, we’ll match you with an insurance provider that covers as much as possible to keep you
						out of trouble when the kids get sick – you don’t want to be having to pay huge bills out of
						your pocket!{'\n\n'}Don’t fall for new or dodgy insurance providers. Don’t get tricked into paying
						more than you actually need to.{'\n\n'}Speak to us about an Insurance Health Check today and find
						out about all your options and how you can take advantage of the same deals the locals get from
						Australia’s Top Health Insurance.
					</AppText>
					<Image style={styles.pic} source={require('../assets/healthPicture/health.jpg')}></Image>
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
