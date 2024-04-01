import { View, Text,Image, Button, Pressable, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utils/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
export default function Header(props) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{marginTop:50,padding:20}}>
    <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Flashcard Training</Text>
              <Text style ={styles.modalText}>How to add new flashcards:</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Got It!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        </View>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center', gap: '150%'}}>
            <Text style={{color:Colors.black,fontSize:23,fontFamily:'outfit', width: '50%'}}>Word Training</Text>
            <TouchableOpacity onPress={()=>setModalVisible(true)}><FontAwesomeIcon icon="circle-info" style={{width: '50%', fontSize: 20, fontWeight: 600}}/></TouchableOpacity>
      </View>
      <View style={{marginTop: 50,display:'flex',flexDirection:'column',alignItems:'center',gap:20}}>
        <TouchableOpacity style={styles.easyButton}><Text style={{width: '33%', fontSize: 18, fontWeight: '500'}}>Easy</Text><Text style={styles.easyText}>0 Words</Text><FontAwesomeIcon icon="angle-right" style={styles.easyText}></FontAwesomeIcon></TouchableOpacity>
        <TouchableOpacity style={styles.mediumButton}><Text style={{width: '33%', fontSize: 18, fontWeight: '500'}}>Medium</Text><Text style={styles.mediumText}>0 Words</Text><FontAwesomeIcon icon="angle-right" style={styles.mediumText}></FontAwesomeIcon></TouchableOpacity>
        <TouchableOpacity style={styles.hardButton}><Text style={{width: '33%', fontSize: 18, fontWeight: '500'}}>Hard</Text><Text style={styles.hardText}>0 Words</Text><FontAwesomeIcon icon="angle-right" style={styles.hardText}></FontAwesomeIcon></TouchableOpacity>
      </View>
      <View style ={{marginTop: 10, display:'flex', flexDirection: 'row', gap: 10}}>
        <TouchableOpacity style={styles.newButton} onPress={()=>props.navigation.navigate('TrainingKeywords')}><FontAwesomeIcon icon="calendar"></FontAwesomeIcon><Text style={{width: '33%', fontSize: 18, fontWeight: '500'}}>New</Text><Text style={styles.easyText}>0</Text></TouchableOpacity>
        <TouchableOpacity style ={styles.newButton}><FontAwesomeIcon icon="check"></FontAwesomeIcon><Text style={{width: '33%', fontSize: 18, fontWeight: '500'}}>Done</Text><Text style={styles.easyText}>10</Text></TouchableOpacity>
      </View>
      <View style ={{marginTop: 10, display:'flex', flexDirection: 'row', gap: 10}}>
        <TouchableOpacity style={styles.reviewButton}><Text style={{width: '100%', textAlign: 'center', color: Colors.white, fontSize: 15, fontWeight: '500'}}>Review Now ></Text></TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    easyButton:{
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        width: '100%',
        height: 80,
        backgroundColor: '#bdf0bd',
        borderRadius: 10
    },
    easyText: {
        fontSize: 20,
        flexBasis: 140,
        color: '#8FBC8F'
    }, 
    mediumButton:{
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        width: '100%',
        height: 80,
        backgroundColor: '#bee6ed',
        borderRadius: 10
    },
    mediumText: {

        width: '33%',
        fontSize: 20,
        flexBasis: 140,
        color: '#60879c'
    },
    hardButton:{
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        width: '100%',
        height: 80,
        backgroundColor: '#dcc1e0',
        borderRadius: 10
    },
    hardText: {

        width: '33%',
        fontSize: 20,
        flexBasis: 140,
        color: '#9b6ca3'
    },
    newButton :{
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        width: '48.8%',
        height: 80,
        gap: '33%',
        backgroundColor: 'lightgrey',
        borderRadius: 10
    },
    reviewButton :{
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'center',
        width: '100%',
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
        height: '30%'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
      },
      modalHeader: {
        marginBottom: 20,
        fontSize: 23
      }
})


