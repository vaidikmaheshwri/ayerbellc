import { View, Text ,TouchableOpacity,StyleSheet,Modal} from 'react-native'
import React from 'react'
import {  } from 'react-native-gesture-handler'

export default function CustomModal({description,btn1Name,btn2Name,btn1handler,btn2handler,modalvisible}) {
  return (
    <Modal transparent={true} visible={modalvisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{top:"25%",alignSelf:'center',width:"90%",marginLeft:"-1%"}}>
            <Text style={{fontSize:22,fontWeight:'bold',textAlign:'center'}}>{description}</Text>
            <View style={{flexDirection:'row',top:"10%",gap:10,marginLeft:"5%"}}>
            <TouchableOpacity  onPress={btn1handler} style={{width:"45%",borderColor:"#32A1ED",borderRadius:8,borderWidth:1,height:40}}>
              <Text style={{color:'#32A1ED', textAlign:'center', fontSize:18,padding:3}} >{btn1Name}</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={btn2handler} style={{width:"45%",backgroundColor:'#32A1ED',borderColor:"#32A1ED",borderRadius:8,borderWidth:1,height:40}}>
              <Text style={{color:'white', textAlign:'center', fontSize:18,padding:3}}>{btn2Name}</Text>
            </TouchableOpacity>
            </View>
            </View>
            
            
          </View>
        </View>
      </Modal>
  )
}
const styles = StyleSheet.create({
    centeredView:{
        height:"100%",
        width:"100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalView: {
        height: "30%",
        
        width: "90%",
        backgroundColor: "white",
        position: "absolute",
        marginLeft: "5%",
        top: "20%",
        borderRadius: 46,
        flex: 1,
        flexDirection: "column",
        
      },
})