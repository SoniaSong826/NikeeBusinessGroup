import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FunctionMenu from './App/components/FunctionMenu';
import HomeScreen from './App/screens/HomeScreen';
import {
	useFonts,
	Roboto_700Bold,
	Roboto_400Regular,
	Roboto_100Thin,
	Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import AccountingScreen from './App/screens/AccountingScreen';
import BranchesScreen from './App/screens/BranchesScreen';
import BusinessScreen from './App/screens/BusinessScreen';
import CareerApplicationScreen from './App/screens/CareerApplicationScreen';
import CareerScreen from './App/screens/CareerScreen';
import EducationScreen from './App/screens/EducationScreen';
import EmploymentScreen from './App/screens/EmploymentScreen';
import FollowUsScreen from './App/screens/FollowUsScreen';
import FoundationScreen from './App/screens/FoundationScreen';
import HealthScreen from './App/screens/HealthScreen';
import IELTSScreen from './App/screens/IELTSScreen';
import InternshipScreen from './App/screens/InternshipScreen';
import MarketingScreen from './App/screens/MarketingScreen';
import MediaScreen from './App/screens/MediaScreen';
import MigrationScreen from './App/screens/MigrationScreen';
import OurStoryScreen from './App/screens/OurStoryScreen';
import OurTeamScreen from './App/screens/OurTeamScreen';
import ProfessionalYearScreen from './App/screens/ProfessionalYearScreen';
import PropertyScreen from './App/screens/PropertyScreen';
import TechnologyScreen from './App/screens/TechnologyScreen';
import TestimonialsScreen from './App/screens/TestimonialsScreen';
import LoginScreen from './App/screens/LoginScreen';

import BusinessVisaScreen from './App/screens/MigrationScreens/BusinessVisaScreen';
import EmployerVisaScreen from './App/screens/MigrationScreens/EmployerVisaScreen';
import FamilyVisaScreen from './App/screens/MigrationScreens/FamilyVisaScreen';
import SkilledVisaScreen from './App/screens/MigrationScreens/SkilledVisaScreen';
import StudentVisaScreen from './App/screens/MigrationScreens/StudentVisaScreen';
import VisitorVisaScreen from './App/screens/MigrationScreens/VisitorVisaScreen';

import AppLoading from 'expo-app-loading';

export default function App() {
	let [fontsLoaded] = useFonts({
		Roboto_700Bold,
		Roboto_100Thin,
		Roboto_500Medium,
		Roboto_400Regular,
	});
	const Stack = createStackNavigator();
	return !fontsLoaded ? (
		<AppLoading />
	) : (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<>
					<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Accounting" component={AccountingScreen} />
					<Stack.Screen name="Branches" component={BranchesScreen} />
					<Stack.Screen name="Business" component={BusinessScreen} />
					<Stack.Screen name="Career Application" component={CareerApplicationScreen} />
					<Stack.Screen name="Career" component={CareerScreen} />
					<Stack.Screen name="Education" component={EducationScreen} />
					<Stack.Screen name="Employment" component={EmploymentScreen} />
					<Stack.Screen name="Follow Us" component={FollowUsScreen} />
					<Stack.Screen name="Foundation" component={FoundationScreen} />
					<Stack.Screen name="Health Insurance" component={HealthScreen} />
					<Stack.Screen name="IELTS AND PTE" component={IELTSScreen} />
					<Stack.Screen name="Internships" component={InternshipScreen} />
					<Stack.Screen name="Marketing" component={MarketingScreen} />
					<Stack.Screen name="Media" component={MediaScreen} />
					<Stack.Screen name="Migration" component={MigrationScreen} />
					<Stack.Screen name="Our Story" component={OurStoryScreen} />
					<Stack.Screen name="Our Team" component={OurTeamScreen} />
					<Stack.Screen name="Professional Year" component={ProfessionalYearScreen} />
					<Stack.Screen name="Property" component={PropertyScreen} />
					<Stack.Screen name="Technology" component={TechnologyScreen} />
					<Stack.Screen name="Testimonials" component={TestimonialsScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />

					<Stack.Screen name="Business Visa" component={BusinessVisaScreen} />
					<Stack.Screen name="Employer Visa" component={EmployerVisaScreen} />
					<Stack.Screen name="Family Visa" component={FamilyVisaScreen} />
					<Stack.Screen name="Skilled Visa" component={SkilledVisaScreen} />
					<Stack.Screen name="Student Visa" component={StudentVisaScreen} />
					<Stack.Screen name="Visitor Visa" component={VisitorVisaScreen} />
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
