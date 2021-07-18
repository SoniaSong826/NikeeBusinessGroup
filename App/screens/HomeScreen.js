import React from 'react';
import { FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import categorydata from '../info/categorydata.json';
import FunctionMenu from '../components/FunctionMenu';
import AppButton from '../components/AppButton';
import NikeeLogo from '../components/NikeeLogo';

const seviceInfo = categorydata;
const imageList = [
	require('../assets/categoryPicture/Migration-Services.jpg'),
	require('../assets/categoryPicture/Education.jpg'),
	require('../assets/categoryPicture/Employment.jpg'),
	require('../assets/categoryPicture/Business-Advisors.jpg'),
	require('../assets/categoryPicture/Marketing-Experts.png'),
	require('../assets/categoryPicture/media-production.jpg'),
	require('../assets/categoryPicture/Technology-Solutions.jpg'),
	require('../assets/categoryPicture/Accounting-Solutions.jpg'),
	require('../assets/categoryPicture/propertymanagement.jpg'),
	require('../assets/categoryPicture/Counselling.jpg'),
	require('../assets/categoryPicture/Professional-Year.jpg'),
	require('../assets/categoryPicture/Internships.jpg'),
	require('../assets/categoryPicture/English-Courses.jpg'),
	require('../assets/categoryPicture/Health-Insurance.jpg'),
];
function HomeScreen({ navigation }) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.png')}>
			<NikeeLogo></NikeeLogo>
			<FunctionMenu navigation={navigation}></FunctionMenu>
			<AppButton
				title={'Contact Us'}
				icon={'phone'}
				icon_color="white"
				icon_size={25}
				style={styles.button}
				onPress={()=>navigation.navigate("Contact Us")}
			></AppButton>
			<FlatList
				contentContainerStyle={styles.flatlist}
				data={seviceInfo}
				keyExtractor={(seviceInfo) => seviceInfo.id.toString()}
				renderItem={({ item }) => (
					<ServiceCard
						style={styles.itemContainer}
						title={item.name.toUpperCase()}
						paragraph={item.description}
						imagesrc={imageList[item.id - 1]}
						onPress={()=>navigation.navigate(item.name)}
					/>
				)}
			></FlatList>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	backGround: {
		flex: 1,
		alignItems: 'center',
		paddingTop:40,
	},
	flatlist: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: 220,
		borderRadius: 25,
	},
});

export default HomeScreen;
