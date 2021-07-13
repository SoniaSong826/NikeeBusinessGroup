import React, { Component } from 'react';
import { Text, StyleSheet, View, SectionList } from 'react-native';

class PersonalScreen extends React.Component {
  state = {'firstName': '', 'lastName': '', 'dob': '', 'gender': '', 'countryOfBirth': ''}

    componentDidMount() {
        console.log(this.props.details.ApplicantDetails.ContactDetails)
        this.setState({'firstName': this.props.details.ApplicantDetails.ContactDetails.ContactGivenName})
    }

    render() {
        return (
            <View style={styles.container}>
              {/* <View style={} */}
                <Text>{this.state.firstName}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

  export default PersonalScreen