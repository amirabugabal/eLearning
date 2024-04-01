import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import user from './../../../assets/Images/userProfile.jpg'
import Colors from '../../Utils/Colors'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import KeywordCard from '../KeyWordCard/KeywordCard'
export default function TrainingKeywords(props) {
  return (
    <View style={{padding:20}}>
        <KeywordCard keyword={"hamada"} type={"name"} definition={"ahmed hamada"}/>
    </View>
  )
}
const styles = StyleSheet.create({
  cardContainer:{

  }
})