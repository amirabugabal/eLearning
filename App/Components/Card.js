import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
// import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// You can import from local files

import Colors from "../Utils/Colors";

// or any pure javascript modules available in npm
// import { Card } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card_template}>
        
          <Text style={{fontFamily:'outfitBold',fontSize:'20',textAlign:'right' ,padding:'5%'}}>عود العقابيات</Text>
        
        <View style={styles.text_container}>
          <Text style={styles.card_title}>
            تعود العقابيات إلى أيرلندا بعد 200 عام
          </Text>
          <Text style={styles.card_desc}>
            وُلدت صغار العقاب في أيرلندا لأول مرة منذ أكثر من 200 عام.
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: 1,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_template: {
    width: 350,
    height: 280,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    backgroundColor:Colors.lightPrimary,
    borderRadius:20
    
  },
  card_image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  text_container: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    height: "75%",
    bottom: "0.001%",
    padding: 5,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:Colors.lightPrimary,
    borderWidth:'1'
  },
  card_title: {
    color: Colors.black,
    fontFamily: "outfitSemi",
    fontSize: 18,
    padding: "2%",
    justifyContent: "flex-end",
    textAlign:'right'
  },
  card_desc: {
    color: Colors.black,
    fontFamily: "outfitLight",
    fontSize: 14,
    padding: "2%",
    textAlign:'right'
  },
  card_level: {
    color: Colors.black,
    fontFamily: "outfit",
    fontSize: 14,
    padding: 2,
  },
  lock_container: {
    position: "absolute",
    alignSelf: "center",
    width: "auto",
    height: "auto",
    // bottom: 1,
    top: "3%",
    left: "3.5%",
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 50,
  },
  date: {
    fontSize: 13,
    fontFamily: "outfitLight",
  },
  level_container: {
    // position: "absolute",
    // alignSelf: "center",
    width: "auto",
    height: "auto",
    padding: "1%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 50,
  },
});
