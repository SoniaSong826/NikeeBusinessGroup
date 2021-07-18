import React from "react";
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  Linking
} from "react-native";
import ContactCard from "../components/ContactCard";
import categorydata from "../info/categorydata.json";
import ContactButton from "../components/ContactButton";
import call from "react-native-phone-call";
import email from "react-native-email";
import NikeeLogo from "../components/NikeeLogo";
import AppText from "../components/AppText";
import colors from "../config/colors";

const windowWidth = Dimensions.get("window").width;
const seviceInfo = categorydata;
const staffList = [
    {id:1,name:"Brian",image:require("../assets/staffPhotos/ceo.jpg"),phone:"+61414907705",email:"nikee@nikeeworld.com", message:"+61414907705"}
  ,{id:2,name:"Janeesha",image:require("../assets/staffPhotos/jenisha.jpg"),phone:"+61414003600",email:"Janeesha@nikeeworld.com", message:"+61414003600"}
  ,{id:3,name:"Anushka",image:require("../assets/staffPhotos/Anushka.jpg"),phone:"+61450928349",email:"anushka@nikeeworld.com", message:"+61450928349"}
  ,{id:4,name:"Reception",image:require("../assets/staffPhotos/images.png"),phone:"+61451759969",email:"reception@nikeeworld.com", message:"+61451759969"}

];
function ContactUsScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/background.png")}
    >
      <View style={styles.blueCard}>
        <NikeeLogo></NikeeLogo>
        <AppText style={styles.text}>Book An Appointment</AppText>
        <View style={styles.row}>
          <ContactButton
            icon="phone"
            onPress={() =>
              call({ number: "396635277", prompt: false }).catch(console.error)
            }
          ></ContactButton>
          <ContactButton
            icon="email"
            onPress={() => {
              const to = ["nikee@nikeeworld.com"];
              email(to, {
                subject: "",
                body: "",
              }).catch(console.error);
            }}
          ></ContactButton>
          <ContactButton
            icon="facebook"
            onPress={() =>
              Linking.openURL("https://www.facebook.com/Nikee227/")
            }
          ></ContactButton>
          <ContactButton
            icon="message"
            onPress={() =>
              Linking.openURL("whatsapp://send?text=&phone=61414907705")
            }
          ></ContactButton>
        </View>
      </View>
      <AppText style={styles.textBlack}>Contact With Us</AppText>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={staffList}
        keyExtractor={(staffList) => staffList.id.toString()}
        renderItem={({ item }) => (
          <ContactCard
            name={item.name}
            imagesrc={item.image}
            phone={item.phone.toString()}
            emailTo={item.email}
            message={item.message}
          />
        )}
      ></FlatList>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  blueCard: {
    width: windowWidth,
    alignItems: "center",
    backgroundColor: colors.blackBlue,
    paddingBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
  },
  textBlack: {
    color: colors.black,
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  flatlist: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 220,
    borderRadius: 25,
  },
});

export default ContactUsScreen;
