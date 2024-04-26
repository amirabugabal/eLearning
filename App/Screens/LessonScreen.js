import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import pic from "../../assets/Images/bird.jpg";
import Colors from "../Utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import KeywordCard from "../Components/KeyWordCard/KeywordCard";
import Card from "../Components/Card";
import { LessonTabs } from "../Utils/constants";
import { getStoryAudio, getStoryById } from "../Services/LessonServices";
// import CustomAudioPlayer from "../Components/AudioPlayer/CustomAudioPlayer";
export default function LessonScreen(props) {
  const [activeTab, setActiveTab] = useState(LessonTabs.STORY);

  const tabs = [LessonTabs.STORY, LessonTabs.QUIZ, LessonTabs.KEYWORDS, LessonTabs.GRAMMAR];
  const [storyParagraph,setStoryParagraph] = useState();
  const [storySentences, setStorySentences] = useState();
  const [audioSrc, setAudioSrc] = useState();
  useEffect(()=>{
    console.log("props",props?.route?.params?.lessonId)
    getStoryById(props?.route?.params?.lessonId).then((resp)=>setStoryParagraph(resp?.paragraph))
    getStoryAudio(props?.route?.params?.lessonId).then((res)=>setAudioSrc(res))
  },[])
  useEffect(()=>{
    if(storyParagraph){
      setStorySentences(storyParagraph.split(["."]))
      console.log("sentences", storyParagraph.split(["."]))
    }
  },[storyParagraph])
  // useEffect(()=>{
  //   switch (activeTab){
  //     case LessonTabs.STORY:  
  //     if(!storyParagraph){

  //       getStoryById(props?.lessonId).then(resp=>console.log(resp.paragraph))
  //     }
  //     break;

  //   }


  // },[activeTab])

  const renderContent = () => {
    switch (activeTab) {
      case LessonTabs.STORY:
        return (
          <View>
            <View>
              <Text
                style={{
                  color: Colors.black,
                  fontFamily: "outfitBold",
                  fontSize: 20,
                  textAlign: "right",
                }}
              >
                اكتشاف جديد في اللغة العربية
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 10,
                padding: 1,
              }}
            >
              <View style={styles.level_container}>
                <Text style={styles.card_level}>A1</Text>
              </View>

              <MaterialIcons
                name="favorite"
                size={22}
                color="rgba(0, 0, 0, 0.2)"
              />
            </View>
            <View style={{}}>
            <Text style={{}}>
                {storySentences?.map((sentence,index)=>(
                  
                      <TouchableOpacity key={index}  onPress={()=>{}}>
                      <Text style={{}}>{sentence}</Text>
                    </TouchableOpacity>

                ))}
            </Text>
            </View>
          </View>
        );
      case LessonTabs.QUIZ:
        return (
          <View style={{ flexDirection:'column',gap:'40',alignItems: "center" }}>
            <AntDesign name="sound" size={25} color="black" />
            <Text style={{ fontFamily: "outfit", textAlign: "center" , fontSize:'24' }}>
              عدم اهتمام ___ مجالات البحث العلميّ في استخدام اللّغة العربيّة
              كلغةٍ خاصّة في الأبحاث الأكاديميّة والعلميّة
            </Text>
            <View style={{ flexDirection: "column",gap:'10', marginTop: 10 }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>مُعظم</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>بعض</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>شيئ</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case LessonTabs.KEYWORDS:
        return <KeywordCard></KeywordCard>;
      case LessonTabs.GRAMMAR:
        return <Card></Card>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image style={styles.photo} source={pic} resizeMode="cover" />
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
              onPress={() => setActiveTab(tab)}
            >
              <Text style={styles.tabText}>{tab.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text>{renderContent()}</Text>
      </View>
      {/* <CustomAudioPlayer audioUrl={audioSrc}/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  tabsContainer: {
    alignItems: "center",
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
  },
  activeTab: {
    backgroundColor: Colors.lightPrimary,
    borderColor: Colors.lightPrimary,
  },
  tabText: {
    fontSize: 17,
    color: "#333",
  },
  contentContainer: {
    flex: 1,
    marginTop: "10%",
    justifyContent: "flex-start",
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
    borderWidth:'1%',
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
