import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    row: {
        backgroundColor: '#fff',
        marginVertical: 1,
        padding: 10,
        fontSize: 18
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    secondaryLabel: {
        color: '#999'
    }
  })

const Item = ({ item }) => (
    <View style={styles.row}>
        <Text style={styles.title}>{item.QualificationInstitution} </Text>
        <View style={styles.item}>
            <Text>{item.QualificationCourse}  </Text>
            <Text style={styles.secondaryLabel}>{item.CountryMaster.CountryName}</Text>
        </View>
        <View style={styles.item}>
            <Text>{item.QualificationMaster.QualificationName}   </Text>
            <Text style={styles.secondaryLabel}>{item.QualificationMethod}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.secondaryLabel}>{convertTime(item.QualificationCommencedDate) + ' - ' + convertTime(item.QualificationCompletedDate)}</Text>
        </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

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

class EducationScreen extends React.Component {

    componentDidMount() {
        // console.log('education',this.props.details)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.props.details}
                    renderItem={renderItem}
                    keyExtractor={item => item.QualificationDetailsId}
                />
            </SafeAreaView>
        )
    }
}

export default EducationScreen;