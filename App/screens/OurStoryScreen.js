import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions, ScrollView } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function OurStoryScreen() {
	return (
		<ScrollView style={styles.backGround}>
			<Image style={styles.picture} source={require('../assets/OurStory/about_pic.png')}></Image>
			<View style={styles.box}></View>
			<AppText style={styles.title}>Lord Mayor's Commendation Award</AppText>
			<AppText style={styles.subTitle}>Our Story</AppText>
			<AppText style={styles.contents}>
				Nikee Business Group is proud to be serving Australia since 1996, delivering exceptional results with
				Migration, Education and Employment matters. {'\n'}
				{'\n'}
				{'\n'}Our consultants are senior industry experts in the various fields and are strategically located
				and allow us to serve our clients seamlessly in Australia and across the Americas, Asia Pacific and the
				Middle East. Our global presence and understanding of local culture enables us to deliver optimal
				results to you.
			</AppText>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	backGround: {
		flex: 1,
		backgroundColor: colors.logoGold,
	},
	picture: {
		width: windowWidth,
		position: 'absolute',
	},
	box: {
		height: windowHeight * 0.35,
	},
	title: {
		width: windowWidth * 0.7,
		backgroundColor: 'rgba(52, 52, 52, 0.6)',
		fontSize: 40,
		fontFamily: 'Roboto_700Bold',
		color: colors.white,
		paddingStart: 8,
	},
	subTitle: {
		textAlign: 'center',
		fontSize: 30,
		fontFamily: 'Roboto_400Regular',
		color: colors.white,
		marginVertical: 10,
	},
	contents: {
		textAlign: 'center',
		fontSize: 17,
		fontFamily: 'Roboto_400Regular',
		color: colors.white,
		paddingHorizontal: 5,
	},
});

export default OurStoryScreen;
