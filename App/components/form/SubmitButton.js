import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';
import colors from '../../config/colors';
import AppText from '../AppText';

function SubmitButton({ title, style, ...otherProps }) {
	const { handleSubmit } = useFormikContext();
	return (
		<TouchableOpacity style={styles.button} onPress={handleSubmit}>
			<AppText style={styles.text}>{title}</AppText>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		margin: 10,
	},
  text:{
    color: colors.blackBlue,
    fontSize:23,
  }
});
export default SubmitButton;
