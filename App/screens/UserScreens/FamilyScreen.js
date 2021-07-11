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
    }
  })


// const renderRow = ({dependent}) => {
//     console.log('dependent', dependent)
//     return <Text>{dependent.DependantGivenName}</Text>
// }

const Item = ({ item }) => (
    <View style={styles.row}>
        <View style={styles.item}>
            <Text style={styles.title}>{item.DependantGivenName}  </Text>
            <Text style={styles.title}>{item.DependantSurName}   </Text>
            <Text>{item.DependantGender}</Text>
        </View>
        <View style={styles.item}>
            <Text>{convertTime(item.DependantDOB)}  </Text>
            <Text>{item.RelationMaster.RelationName}</Text>
        </View>
        <Text>{item.ResidentialCountryDetails.CountryName}</Text>
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

class FamilyScreen extends React.Component {

    // renderRow = ({dependent}) => {
    //     console.log('dependent', dependent)
    //     return <Text>{dependent.DependantGivenName}</Text>
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.props.details}
                    renderItem={renderItem}
                    keyExtractor={item => item.DependantDetailsID}
                />
            </SafeAreaView>
        )
    }
}

export default FamilyScreen;