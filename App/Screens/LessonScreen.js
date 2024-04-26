import React, { useState } from "react";
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
export default function LessonScreen() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["قصة", "امتحان", "كلمات", "نحو"];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
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
            <View>
              <Text style={{ width: "100%", textAlign: "right" }}>
                بدأ الاهتمام العالميّ في اللّغة العربيّة يظهر منذ مُنتصف القرن
                العشرين للميلاد، وتحديداً في عام 1948م عندما قرّرت مُنظّمة
                اليونسكو اعتماد اللّغة العربيّة كثالث لغةٍ رسميّة لها بعد
                اللّغتين الإنجليزيّة والفرنسيّة، وفي عام 1960م تمّ الاعتراف
                رسميّاً في دور اللّغة العربيّة في جعل المنشورات العالميّة أكثر
                تأثيراً، وفي عام 1973م عُقِدَ المُؤتمر الأوّل لليونسكو في اللّغة
                العربيّة بناءً على مجموعةٍ من الاقتراحات التي تبنّتها العديد من
                الدّول العربيّة، وأدّى ذلك إلى اعتماد اللّغة العربيّة كواحدة من
                اللّغات العالميّة التي تُستخدم في المُؤتمرات الدوليّة.
              </Text>
            </View>
          </View>
        );
      case 1:
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
      case 2:
        return <KeywordCard></KeywordCard>;
      case 3:
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
              onPress={() => setActiveTab(index)}
            >
              <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text>{renderContent()}</Text>
      </View>
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
