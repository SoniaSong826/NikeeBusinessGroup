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
						onPress={() => navigation.navigate('Our Story')}
					></FunctionIcon>
					<FunctionIcon
						title="Career"
						iconName="briefcase"
						color="blackBlue"
						onPress={() => navigation.navigate('Career Application')}
					></FunctionIcon>

					<FunctionIcon
						title="Our Team"
						iconName="account-group"
						color="blackBlue"
						onPress={() => navigation.navigate('Our Team')}
					></FunctionIcon>
					<FunctionIcon
						title="Branches"
						iconName="map-marker-multiple"
						color="blackBlue"
						onPress={() => navigation.navigate('Branches')}
					></FunctionIcon>
				</View>
				<View style={styles.menuRow}>
					<FunctionIcon
						title="Testimonials"
						iconName="file-document"
						onPress={() => navigation.navigate('Testimonials')}
					></FunctionIcon>
					<FunctionIcon
						title="Follow Us"
						iconName="at"
						onPress={() => navigation.navigate('Follow Us')}
					></FunctionIcon>
					<FunctionIcon
						title="Foundation"
						iconName="handshake"
						onPress={() => navigation.navigate('Foundation')}
					></FunctionIcon>
					<FunctionIcon
						title="Login"
						iconName="account"
						color="lightRed"
						onPress={() => navigation.navigate('Login')}
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
