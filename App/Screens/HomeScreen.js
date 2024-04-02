import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/HomeScreen/Header";
import StoriesCard from "../Components/HomeScreen/storiesCard";
import LevelsCard from "../Components/HomeScreen/levelsCard";

import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          left: "4%",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
          }}
        >
          Free Stories
        </Text>
        <Ionicons name="gift-outline" size={19} color="black" />
      </View>
      <View style={{ marginTop: "5%" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, gap: 12 }}
        >
          {[...Array(10)].map((_, index) => (
            <StoriesCard key={index} />
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
