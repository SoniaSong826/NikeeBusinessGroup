import React from 'react';
import { FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import migrationdata from '../info/migrationdata.json';

const windowWidth = Dimensions.get('window').width;
const seviceInfo = migrationdata;
const imageList = [
	require('../assets/migrationPicture/Student-Visa.jpg'),
	require('../assets/migrationPicture/Skilled-Visas.jpg'),
	require('../assets/migrationPicture/Employer-Visa.jpg'),
	require('../assets/migrationPicture/Business-Visa.jpg'),
	require('../assets/migrationPicture/Family-Visas.jpg'),
	require('../assets/migrationPicture/Visitor-Visa.jpg'),
];
function MigrationScreen(props) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/background.png')}>
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
						//onPress = {}
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

export default MigrationScreen;
