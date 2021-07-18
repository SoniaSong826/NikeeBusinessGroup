import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Linking,
  Text,
  Dimensions,
} from "react-native";
import AppLoading from "expo-app-loading";
import colors from "../config/colors";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import AppText from "./AppText";
import ContactButton from "./ContactButton";
import call from "react-native-phone-call";
import email from "react-native-email";

const windowWidth = Dimensions.get("window").width;
function ContactCard({ name, imagesrc, phone, emailTo, message }) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={imagesrc}></Image>
      </View>
      <View>
        <AppText style={styles.title}>{name}</AppText>
        <View style={styles.row}>
          <ContactButton
            icon="phone"
            onPress={() =>
              call({ number:  phone , prompt: false }).catch(console.error)
            }
            color="blackBlue"
          ></ContactButton>
          <ContactButton
            icon="email"
            color="blackBlue"
            onPress={() => {
              const to = [emailTo];
              email(to, {
                subject: "",
                body: "",
              }).catch(console.error);
            }}
          ></ContactButton>
          <ContactButton
            icon="message"
            color="blackBlue"
            onPress={() =>
              Linking.openURL("whatsapp://send?text=&phone=" + { message })
            }
          ></ContactButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 5,
    width: windowWidth,
    alignItems: "center",
  },
  imgContainer: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 50,
    overflow: "hidden",
  },
  img: {
    height: 100,
    width: 100,
  },
  title: {
    paddingLeft: 10,
    flexWrap: "nowrap",
    textAlign: "left",
    marginBottom: 7,
    fontFamily: "Roboto_700Bold",
    fontSize: 21,
    color: colors.black,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ContactCard;
