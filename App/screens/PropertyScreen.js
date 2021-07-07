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
					<AppText style={styles.header}>We Offer A Range Of Property Services Including</AppText>
					<AppText style={styles.introduction}>
						Imagine a stress-free property sale. Avoid sale delays and the pressure to discount when you
						speak to our professional property experts.{'\n\n'}Renting properties{'\n\n'}Leasing
						properties{'\n\n'}Buying and selling properties{'\n\n'}Investment properties{'\n\n'}Property
						management{'\n\n'}Whether you’re a newcomer to Australia or you’re simply just looking to enter the
						Australian Property Market, our property advisors can help you find out about the in’s and out’s
						of the entire market. Our strength lies in our people and our ability to cater to your
						needs.{'\n\n'}We specialise in both commercial properties in Melbourne CBD and surrounding suburbs
						and residential properties throughout Victoria. From Carlton to Dandenong, listen to our
						property experts and steer your future in the direction, on the road to success.
					</AppText>
					<Image
						style={styles.pic}
						source={require('../assets/propertyPicture/business.jpg')}
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
