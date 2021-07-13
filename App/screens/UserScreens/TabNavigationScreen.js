import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FamilyScreen from './FamilyScreen';
import EducationScreen from './EducationScreen';
import ExperienceScreen from './ExperienceScreen';
import AddressScreen from './AddressScreen';
import PersonalScreen from './PersonalScreen';

const Tab = createBottomTabNavigator();

class TabNavigationScreen extends React.Component {

    componentDidMount() {
        // console.log(this.props.response.data.ApplicantDetails)
    }

    render() {
        return (
              <Tab.Navigator>
                  <Tab.Screen name="Personal" children={() => <PersonalScreen details={this.props.response.data} />} />
                <Tab.Screen name="Family" children={() => <FamilyScreen details={this.props.response.data.ApplicantDetails.DependantDetails}/>} />
                <Tab.Screen name="Education" children={() => <EducationScreen details={this.props.response.data.ApplicantDetails.QualificationDetails}/>} />
                <Tab.Screen name="Experience" children={() => <ExperienceScreen details={this.props.response.data.ApplicantDetails.EmploymentDetails}/>} />
                <Tab.Screen name="Address" children={() => <AddressScreen details={this.props.response.data.ApplicantDetails.AddressDetails} />} />
              </Tab.Navigator>
          );
    }
}

export default TabNavigationScreen;