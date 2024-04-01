import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import user from './../../../assets/Images/userProfile.jpg'
import Colors from '../../Utils/Colors'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export default function KeywordCard(props) {
  return (
    <View style={{padding:20}}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardHeader}>{props?.keyword}</Text>
        <Text style={styles.cardType}>{`- ${props?.type}`}</Text>
        <Text style={styles.cardDefinition}> {props?.definition}</Text>
        <View style={styles.cardButtons}>
          <TouchableHighlight>
            <FontAwesomeIcon icon='dumbbell'></FontAwesomeIcon>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cardContainer:{

  }
})