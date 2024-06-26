import { View, Text,Image } from 'react-native'
import React from 'react'
import user from './../../../assets/Images/userProfile.jpg'
import Colors from '../../Utils/Colors'
export default function Header() {
  return (
    <View style={{marginTop:50,padding:20}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-end',gap:190}}>
      <Image source={user}
        style={{width:50,height:50,borderRadius:88}}></Image>
      <View>
            <Text style={{color:Colors.black,fontSize:23,fontFamily:'outfit'}}>اكتشف العربية</Text>
        </View>
      </View>
    </View>
  )
}