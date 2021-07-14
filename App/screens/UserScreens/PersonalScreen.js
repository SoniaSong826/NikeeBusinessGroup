import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

const TextWithTitle = ({title, text}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

function convertTime(time) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(time * 1000);
  // Hours part from the timestamp
  var year = date.getUTCFullYear();
  // Minutes part from the timestamp
  var month = '0' + (date.getUTCMonth() + 1);
  // Seconds part from the timestamp
  var day = '0' + date.getUTCDate();

  // Will display time in 10:30:23 format
  var formattedTime = day.substr(-2) + '/' + month.substr(-2) + '/' + year
  return formattedTime
}

class PersonalScreen extends React.Component {
  state = {'firstName': '', 'lastName': '', 'dob': '', 'gender': '', 'countryOfBirth': '', 'mobile': '', 'email': '', 'address': '', 'passport': '', 'issue': '', 'expire': ''}
    componentDidMount() {
        console.log(this.props.details.ApplicantDetails.ContactDetails)
        let detail = this.props.details.ApplicantDetails.ContactDetails
        this.setState({'firstName': detail.ContactGivenName})
        this.setState({'lastName': detail.ContactSurName})
        this.setState({'dob': convertTime(detail.ContactDOB)})
        this.setState({'gender': detail.ContactGender})
        this.setState({'countryOfBirth': this.props.details.ApplicantDetails.CountryofBirth.CountryName})
        this.setState({'mobile': detail.ContactMobile1})
        this.setState({'email': detail.ContactEmail1})
        var address = detail.ContactStreet + ', ' + detail.ContactSubUrb + ', ' + detail.ContactState + ', ' + detail.CountryMaster.CountryName
        this.setState({'address': address })
        this.setState({'passport': this.props.details.ApplicantDetails.PassportNumber})
        this.setState({'issue': convertTime(this.props.details.ApplicantDetails.PassportIssueDate)})
        this.setState({'expire': convertTime(this.props.details.ApplicantDetails.PassportExpiryDate)})

    }

    render() {
        return (
            <View style={styles.container}>
              <ScrollView>
                <TextWithTitle title='First Name' text={this.state.firstName} />
                <TextWithTitle title='Last Name' text={this.state.lastName} />
                <TextWithTitle title='Date of Birth' text={this.state.dob} />
                <TextWithTitle title='Gender' text={this.state.gender} />
                <TextWithTitle title='Country of Birth' text={this.state.countryOfBirth} />
                <TextWithTitle title='Mobile' text={this.state.mobile} />
                <TextWithTitle title='Email' text={this.state.email} />
                <TextWithTitle title='Address' text={this.state.address} />
                <TextWithTitle title='Passport No' text={this.state.passport} />
                <TextWithTitle title='Issue Date' text={this.state.issue} />
                <TextWithTitle title='Expiry Date' text={this.state.expire} />
              </ScrollView>
            </View>
        );
    }
}



const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    marginVertical: 1,
    padding: 10,
    fontSize: 18
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  title: {
    color: '#999'
  }
  })

  export default PersonalScreen