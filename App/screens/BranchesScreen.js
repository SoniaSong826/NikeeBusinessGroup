import React from 'react';
import { FlatList, StyleSheet, ImageBackground } from 'react-native';
import ListItemSeparator from '../components/ListItemSeparator';
import LocationItem from '../components/LocationItem';

const nikeeLocation = [
	{
		id: 1,
		title: 'Head Office',
		address1: 'Suite 206/227 Collins Street',
		address2: 'Melbourne, VIC, 3000',
		tel: '0396635277',
		showTel: '(03) 9663 5277',
		image: require('../assets/nikeeIcon.png'),
		email: 'nikee@nikeeworld.com',
	},
	{
		id: 2,
		title: 'Tasmania',
		address1: 'Suite 6A/113 Main Road',
		address2: 'Moonah, NSW, 7009',
		showTel: '+61 0450 928 349',
		tel: '0450928349',
		image: require('../assets/nikeeIcon.png'),
		email: 'nikee@nikeeworld.com',
	},
	{
		id: 3,
		title: 'Bendigo',
		address1: 'Suite 2/46 Queen Street',
		address2: 'Bendigo, VIC, 3550',
		tel: '0414003600',
		showTel: '+61 0414 003 600',
		image: require('../assets/nikeeIcon.png'),
		email: 'nikee@nikeeworld.com',
	},
	{
		id: 4,
		title: 'Sydney',
		address1: 'Suite 2-6/17 Brumby St',
		address2: 'Seven Hills, NSW, 2147',
		showTel: '+61 0414 907 705',
		tel: '0414907705',
		image: require('../assets/nikeeIcon.png'),
		email: 'nikee@nikeeworld.com',
	},
	{
		id: 5,
		title: 'Mumbai',
		address1: '12 Golden View, Sundar Nagar, Kalina',
		address2: 'Mumbai 400098, India',
		tel: '9892634164',
		showTel: '(91) 98926 34164',
		image: require('../assets/nikeeIcon.png'),
		email: 'nikee@nikeeworld.com',
	},
	{
		id: 6,
		title: 'Navi Mumbai',
		address1: '204 Shubham Chs, 2 D sectoe 20, Airoli',
		address2: 'Navimumbai 400708, India',
		tel: '9819372216',
		showTel: '(91) 98193 72216',
		image: require('../assets/nikeeIcon.png'),
		email: 'nikee@nikeeworld.com',
	},
];

function LocationScreen(props) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/inner-background.png')}>
			<FlatList
				data={nikeeLocation}
				keyExtractor={(nikeeLocation) => nikeeLocation.id.toString()}
				renderItem={({ item }) => (
					<LocationItem
						style={styles.itemContainer}
						title={item.title}
						address1={item.address1}
						address2={item.address2}
						tel={item.tel}
						showTel={item.showTel}
						emailLink={item.email}
						image={item.image}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
			></FlatList>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	backGround: {
		flex: 1,
	},
});

export default LocationScreen;
