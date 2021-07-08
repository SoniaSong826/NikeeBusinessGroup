import React from 'react';
import { FlatList, StyleSheet, ImageBackground, Dimensions, Text } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { AppForm, AppFormFieldWithTitle } from '../components/form';
// import ServiceCard from '../components/ServiceCard';
// import categorydata from '../info/categorydata.json';
// import FunctionMenu from '../components/FunctionMenu';
// import AppButton from '../components/AppButton';
import NikeeLogo from '../components/NikeeLogo';

const windowWidth = Dimensions.get('window').width;



class LoginScreen extends React.Component {

    dob;

    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../assets/background.png')}>
                <NikeeLogo></NikeeLogo>
                <AppForm initialValues={{
							fileno: '',
							emailaddress: '',
							mobile: '',
						}}
                        onSubmit={(values) => { console.log("submit")}}>
                    <AppFormFieldWithTitle name="fileno" title="File No" />
                    <AppFormFieldWithTitle name="emailaddress" title="Email Address" />
                    <AppFormFieldWithTitle name="mobile" title="Phone number" />
                    {/* <DatePicker date={dob} onDateChange={ } androidVariant='iosClone' mode='date' /> */}
                </AppForm>
                
            </ImageBackground>
        );
    }
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

export default LoginScreen;