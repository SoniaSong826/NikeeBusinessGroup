import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import FunctionIcon from './FunctionIcon';

function FunctionMenu({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.menuColumn}>
				<View style={styles.menuRow}>
					<FunctionIcon
						title="Our Story"
						iconName="alpha-n-circle"
						color="blackBlue"
						// onPress={() =>
						// 	navigation.navigate('Category Products', {
						// 		categoryID: 78,
						// 		categoryName: 'Sweets',
						// 	})
						// }
					></FunctionIcon>
					<FunctionIcon
						title="Career"
						iconName="briefcase"
						color="blackBlue"
						// onPress={() =>
						// 	navigation.navigate('Category Products', {
						// 		categoryID: 77,
						// 		categoryName: 'Desserts',
						// 	})
						// }
					></FunctionIcon>

					<FunctionIcon
						title="Our Team"
						iconName="account-group"
						color="blackBlue"
						// onPress={() =>
						// 	navigation.navigate('Category Products', {
						// 		categoryID: 79,
						// 		categoryName: 'Snacks',
						// 	})
						// }
					></FunctionIcon>
					<FunctionIcon
						title="Branches"
						iconName="map-marker-multiple"
						color="blackBlue"
						// onPress={() =>
						// 	navigation.navigate('Category Products', {
						// 		categoryID: 117,
						// 		categoryName: 'Gift Packs',
						// 	})
						// }
					></FunctionIcon>
				</View>
				<View style={styles.menuRow}>
					<FunctionIcon
						title="Testimonials"
						iconName="file-document"
						// onPress={() => navigation.navigate('Locations')}
					></FunctionIcon>
					<FunctionIcon
						title="Follow Us"
						iconName="at"
						// onPress={() => navigation.navigate('Events')}
					></FunctionIcon>
					<FunctionIcon
						title="Foundation"
						iconName="handshake"
						// onPress={() => navigation.navigate('Follow Us')}
					></FunctionIcon>
					<FunctionIcon
						title="Login"
						iconName="account"
						color="lightRed"
						// onPress={() => navigation.navigate('Order Now')}
					></FunctionIcon>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 18,
		justifyContent: 'center',
		alignItems: 'center',
	},
	menuColumn: {
		justifyContent: 'center',
	},
	menuRow: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 4,
	},
	iconContainer: {
		width: 90,
		height: 76,
		marginBottom: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconCircle: {
		width: 56,
		height: 56,
		borderRadius: 28,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		marginTop: 4,
	},
});
export default FunctionMenu;
