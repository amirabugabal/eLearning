import { View, Text, ScrollView, Touchable } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/HomeScreen/Header";
import StoriesCard from "../Components/HomeScreen/storiesCard";
import LevelsCard from "../Components/HomeScreen/levelsCard";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import StackNavigation from "../Navigations/StackNavigation";
import { getAllLessons, getLessonById } from "../Services/LessonServices";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function HomeScreen() {
  const navigation = useNavigation(StackNavigation);
  const [lessons,setLessons] = useState([]);

  useEffect(()=>{
    getAllLessons().then((resp)=>setLessons(resp));
  },[])

  handleOnPress=(lessonId)=>{
    getLessonById(lessonId).then((resp)=>{
      navigation.navigate("LessonScreen",{lessonId})
    })

  }

  
  return (
    <View>
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
        <View
          style={{ marginTop: "5%" }}
          
        >
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 12}}
            keyboardShouldPersistTaps='always'
          >
            {lessons?.length > 0 && lessons?.map((lesson, index) => (
              // <TouchableOpacity key={index} onPress={() => navigation.navigate("LessonScreen")}>
              <TouchableOpacity key={index} onPress={()=>handleOnPress(lesson?.id)}>
                <View style={{paddingTop:150,paddingBottom:150}}>
                <StoriesCard title={lesson?.title} description={lesson?.description} />
                </View>

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
    </View>
  );
}
