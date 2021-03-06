import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Platform, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';
import Constants from 'expo-constants';
import AppText from '../AppText';
import { FlatList } from 'react-native-gesture-handler';
import PickerItem from '../PickerItem';

function AppPicker({ name, icon, items, placeholder, onSelectItem, PickerItemComponent = PickerItem, selectedItem }) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={Platform.OS === 'android' ? styles.containerAndroid : styles.containerIOS}>
					{icon && (
						<MaterialCommunityIcons name={icon} size={20} color={colors.lightGray} style={styles.icon} />
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons name="chevron-down" size={16} color={colors.lightGray} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<View style={styles.safeArea}>
					<Button title="Close" onPress={() => setModalVisible(false)}></Button>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItemComponent
								value={name}
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							></PickerItemComponent>
						)}
					></FlatList>
				</View>
			</Modal>
		</React.Fragment>
	);
}
const styles = StyleSheet.create({
	containerAndroid: {
		backgroundColor: colors.white,
		borderColor: colors.lightGray,
		borderWidth: 1,
		borderRadius: 7,
		flexDirection: 'row',
		marginTop: 8,
		padding: 14,
		width: '100%',
	},
	containerIOS: {
		backgroundColor: colors.white,
		borderColor: colors.lightGray,
		borderWidth: 1,
		borderRadius: 7,
		flexDirection: 'row',
		marginTop: 8,
		padding: 10,
		width: '100%',
	},
	icon: {
		marginHorizontal: 10,
	},
	text: {
		flex: 1,
		fontFamily: 'Roboto_400Regular',
		color: colors.black,
		fontSize: 14,
	},
	placeholder: {
		flex: 1,
		fontFamily: 'Roboto_400Regular',
		color: colors.lightGray,
		fontSize: 14,
	},
	safeArea: {
		marginTop: Constants.statusBarHeight,
	},
});
export default AppPicker;
