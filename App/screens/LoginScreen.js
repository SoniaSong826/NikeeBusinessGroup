import React, {useState} from 'react';
import { View, StyleSheet, ImageBackground, Button, SafeAreaView, Text, Alert} from 'react-native';
import NikeeLogo from '../components/NikeeLogo';
import NetworkController from '../network/NetworkController';
import TabNavigationScreen from './UserScreens/TabNavigationScreen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors'

const LoginScreen = () => {

	const [datePickerVisible, setDatePickerVisible] = useState(false)
	const [response, setResponse] = useState()
	const [fileno, setFileno] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [dob, setDob] = useState('Select your date of birth')

	const showDatePicker = () => {
		setDatePickerVisible(true)
	}

	const hideDatePicker = () => {
		setDatePickerVisible(false)
	}

	const handleDatePicker = (date) => {
		console.warn("A date has been picked: ", date);
		// var year = date.getUTCFullYear();
        // // Minutes part from the timestamp
        // var month = '0' + (date.getUTCMonth() + 1);
        // // Seconds part from the timestamp
        // var day = '0' + date.getUTCDate();

        // // Will display time in 10:30:23 format
        // var formattedTime = day.substr(-2) + '/' + month.substr(-2) + '/' + year

		setDob(date.toLocaleDateString())
    	hideDatePicker();
	}

	const createAlert = () => {
		Alert.alert(
			"Incorrect Information",
			"Please enter a correct information",
			[
			  { text: "OK", onPress: () => console.log("OK Pressed") }
			]
		  );
	}

	const onLoginPress = () => {
		var newFileNo = parseInt(fileno)
		var newEmail = email
		var newMobile = mobile
		var newDate = new Date(dob);
		var year = newDate.getFullYear()
		var month = newDate.getMonth()
		var day = newDate.getDate()
		var utcDate = new Date(Date.UTC(year, month, day))
		console.log(newFileNo)
		console.log(newEmail)
		console.log(newMobile)
		console.log(utcDate.getTime())
		userlogin(newFileNo, utcDate.getTime() / 1000, newMobile, newEmail)
	}

	const userlogin = async (fileno, dob, mobile, email) => {
        const network = new NetworkController()
        const response = await network.loginWithData(fileno, dob, mobile, email)
		console.log(response)
		if (response == undefined) {
			createAlert()
		} else {
			setResponse(response)
		}
        
    }


	if (response == null) { 
		return (
			<ImageBackground style={styles.backGround} source={require('../assets/background.png')}>
				<SafeAreaView>
					<NikeeLogo></NikeeLogo>

					<AppTextInput onChangeText={setFileno} placeholder="File No" value={fileno} keyboardType="numeric" />
					<AppTextInput onChangeText={setEmail} placeholder="Email" value={email}/>
					<AppTextInput onChangeText={setMobile} placeholder="Mobile" value={mobile} keyboardType="numeric"/>
					<View style={styles.container}>
						<Text onPress={showDatePicker} style={styles.calendarText}>{dob}</Text>
					</View>
					<DateTimePickerModal mode='date' isVisible={datePickerVisible} onCancel={hideDatePicker} onConfirm={handleDatePicker} date={new Date("1980-01-01")} display="spinner" />
					<Button style={styles.button} onPress={onLoginPress} title='Login' />
				</SafeAreaView>
			</ImageBackground>
		);
	} else {
		return (
			<TabNavigationScreen response={response}/>
		)
	}
}

// class LoginScreen extends React.Component {

// 	state = {'response': null, 'fileno': '', 'email': '', 'mobile': '', 'dob': '', 'datePickerVisible': false}

// 	showDatePicker = () => {
// 		this.setState({'datePickerVisible': true})
// 	}

// 	hideDatePicker = () => {
// 		this.setState({'datePickerVisible': false})
// 	}

// 	handleDatePicker = () => {
// 		console.warn("A date has been picked: ", date);
//     	hideDatePicker();
// 	}


//     userlogin = async (fileno, dob, mobile, email) => {
//         const network = new NetworkController()
//         const response = await network.loginWithData(fileno, dob, mobile, email)
// 		this.setState({ 'response': response })
//         // console.log(response)
//     }

//     render() {
// 		if (this.state.response == null) { 
// 			return (
// 				<ImageBackground style={styles.backGround} source={require('../assets/background.png')}>
// 					<SafeAreaView>
// 					<NikeeLogo></NikeeLogo>
// 					<Text onPress={this.showDatePicker}>12fsfsfsfsfs3</Text>
// 					<DateTimePickerModal mode='date' isVisible={this.setState.datePickerVisible} onCancel={this.hideDatePicker} onConfirm={(value) => {
// 						this.setState({'dob': value})
// 						console.log(this.state.dob)
// 					}} />
// 					<Button style={styles.button} onPress={() => this.userlogin(2425, 346118400, '0406434951', 'jaswinder020@ymail.com')} title='Login' />
// 					</SafeAreaView>
// 				</ImageBackground>
// 			);
// 		} else {
// 			return (
// 				<TabNavigationScreen response={this.state.response}/>
// 			)
// 		}
					
//     }

// 	onLoginPress = () => {
// 		console.log('on login press')
// 	}
// }

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.darkBlue,
		borderColor: colors.lightGray,
		borderWidth: 1,
		borderRadius: 7,
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 8,
		padding: 10,
		width: '100%',
		height: 50
	},
	calendarText: {
		width: '100%'
	},
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
	text: {
		flex: 1,
		fontSize: 14,
		fontFamily: 'Roboto_400Regular',
		color: '#000',
	}
});

export default LoginScreen;