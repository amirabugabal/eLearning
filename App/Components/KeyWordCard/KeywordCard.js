import { View, Text,Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import user from './../../../assets/Images/userProfile.jpg'
import Colors from '../../Utils/Colors'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export default function KeywordCard(props) {
  const [playPressed, setPlayPressed] = useState(false);
  const [trainingPressed, setTrainingPressed] = useState(false);

  useEffect(()=>{
    if(playPressed){
      
      setTimeout(()=>{setPlayPressed(false)}, 5000)

    }
  },[playPressed])
  return (
    <View >
      <View style={styles.cardContainer}>
        <View style={{flexDirection:'column', width: '80%'}}>
          <View style={styles.cardHead}>
            <Text style={styles.cardHeader}>{props?.keyword}</Text>
            <Text style={styles.cardType}>{`- ${props?.type}`}</Text>
          </View>
          <Text style={styles.cardDefinition}> {props?.definition}</Text>
        </View>
        <View style={styles.cardButtons}>
          <Pressable style={trainingPressed? styles.cardButtonUpPressed :styles.cardButtonUp} onPress={()=>{trainingPressed?setTrainingPressed(false): setTrainingPressed(true)}}>
            <FontAwesomeIcon icon='dumbbell'></FontAwesomeIcon>
          </Pressable>
          <Pressable style={ playPressed? styles.cardButtonDownPressed :styles.cardButtonDown} onPress={()=>setPlayPressed(true)}>
          <FontAwesomeIcon icon='play'></FontAwesomeIcon>
          </Pressable>

        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cardContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    direction:'rtl'
  },
  cardButtons:{
    flexDirection: 'column',
    alignSelf: 'flex-end',
    width: '20%',
    height: '100%'


  },
  cardButtonUp:{
    backgroundColor: 'lightgrey',
    borderTopEndRadius: 10,
    height: '50%',
    width: '100%',
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1

  },
  cardButtonUpPressed:{
    backgroundColor: '#bdf0bd',
    borderTopEndRadius: 10,
    height: '50%',
    width: '100%',
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1

  },
  cardButtonDown:{
    backgroundColor: 'lightgrey',
    borderBottomEndRadius: 10,
    height: '50%',
    width: '100%',
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  cardHead:{
    flexDirection: 'row'
  },
  cardButtonDownPressed:{
    backgroundColor: '#bdf0bd',
    borderBottomEndRadius: 10,
    height: '50%',
    width: '100%',
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})