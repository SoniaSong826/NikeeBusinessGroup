import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FunctionMenu from './App/components/FunctionMenu';
import HomeScreen from './App/screens/HomeScreen';
import {
	useFonts,
	Roboto_700Bold,
	Roboto_400Regular,
	Roboto_100Thin,
	Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import BranchesScreen from './App/screens/BranchesScreen';
import MigrationScreen from './App/screens/MigrationScreen';
import FollowUsScreen from './App/screens/FollowUsScreen';

export default function App() {
	return <FollowUsScreen></FollowUsScreen>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
