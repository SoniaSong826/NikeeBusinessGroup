import React from 'react';
import { StyleSheet, ImageBackground, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { AppForm, AppFormFieldWithTitle } from '../components/form';
import NikeeLogo from '../components/NikeeLogo';
import NetworkController from '../network/NetworkController';
import TabNavigationScreen from './UserScreens/TabNavigationScreen';

class LoginScreen extends React.Component {

	state = {'response': null}

    userlogin = async (fileno, dob, mobile, email) => {
        const network = new NetworkController()
        const response = await network.loginWithData(fileno, dob, mobile, email)
		this.setState({ 'response': response })
        // console.log(response)
    }

    render() {
		if (this.state.response == null) { 
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
					</AppForm>
					<Button style={styles.button} onPress={() => this.userlogin(2425, 346118400, '0406434951', 'jaswinder020@ymail.com')} title='Login' />
				</ImageBackground>
			);
		} else {
			return (
				<TabNavigationScreen response={this.state.response}/>
			)
		}
					
    }

	onLoginPress = () => {
		console.log('on login press')
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