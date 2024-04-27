import { View, Text, ScrollView, Touchable,StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/HomeScreen/Header";
import StoriesCard from "../Components/HomeScreen/storiesCard";
import LevelsCard from "../Components/HomeScreen/levelsCard";
import Colors from "../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import StackNavigation from "../Navigations/StackNavigation";
import { getAllLessons, getLessonById } from "../Services/LessonServices";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { levels } from "../Utils/constants";
export default function HomeScreen() {
  const navigation = useNavigation(StackNavigation);
  const [lessons, setLessons] = useState([]);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [levels.A1,levels.A2,levels.A3,levels.A4,levels.A5,levels.A6,levels.B1,levels.B2,levels.B3,levels.C1,levels.C2,levels.C3];
  
  useEffect(() => {
    getAllLessons().then((resp) => setLessons(resp));
  }, []);

  handleOnPress = (lessonId) => {
    getLessonById(lessonId).then((resp) => {
      navigation.navigate("LessonScreen", { lessonId });
    });
  };

  return (
    <ScrollView>
      <Header />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          justifyContent: "flex-end",
          right: "1%",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
          }}
        >
          قصص مجانية
        </Text>
        <Ionicons name="gift-outline" size={19} color="black" />
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
          keyboardShouldPersistTaps="always"
        >
          {lessons?.length > 0 &&
            lessons?.map((lesson, index) => (
              // <TouchableOpacity key={index} onPress={() => navigation.navigate("LessonScreen")}>
              <TouchableOpacity
                key={index}
                onPress={() => handleOnPress(lesson?.id)}
              >
                <View
                  style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 30 }}
                >
                  <StoriesCard
                    title={lesson?.title}
                    description={lesson?.description}
                  />
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      
      <View style={styles.tabsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContentContainer}
        >
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tab, activeTab === index && styles.activeTab]}
              onPress={() => setActiveTab(index)}
            >
              <Text style={styles.tabText}>{tab.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      

      <View style={{ marginTop: "5%" }}>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, gap: 12 }}
        >
          {[...Array(10)].map((_, index) => (
            <LevelsCard key={index} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  
  tabsContainer: {
    alignItems: "center",
    paddingLeft:20,
    paddingTop:20,
    paddingBottom:20
  },
  tabsContentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "transparent",
    // backgroundColor:'black'
  },
  activeTab: {
    backgroundColor: Colors.lightPrimary,
    borderColor: 'white',
    borderRadius:20
  },
  tabText: {
    fontSize: 17,
    color: "#333",
  },
  contentContainer: {
    flex: 1,
    marginTop: "10%",
    justifyContent: 'flex-start',
    alignItems: "center",
    padding: 0,
    margin: 0,
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  card_level: {
    color: Colors.black,
    fontFamily: "outfit",
    fontSize: 14,
    padding: 2,
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderColor:Colors.lightPrimary,
    borderWidth:1,
    width:200,
    height:50,
    alignItems:'center'
  },
  buttonText: {
    fontFamily: "outfitSemi",
    fontSize: 16,
    color:Colors.lightPrimary,
    width:'100%',
    textAlign:'center'
  },
});
