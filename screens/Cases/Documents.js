import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import CustomModal from "../../components/CustomModal";

const updateList = [
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
  {
    name: "CriminalReport.pdf",
    time: " 2 hours ago",
  },
];

export default function Documents() {
  const [modalvisible,setModalVisible]=useState(false);
  return (
   <>
   <CustomModal
      description={'Are you sure you want to delete this document?'}
      btn1Name={'Cancel'}
      btn2Name={'Delete'}
      btn1handler={()=>{setModalVisible(false)}}
     modalvisible={modalvisible}
      />

    <ScrollView style={{ backgroundColor: "white",flex:1, }}>
    <View style={{height:'auto',paddingBottom:20}}>
      {updateList.length ? (
        <FlatList
          style={{ top: 15,  }}
          data={updateList}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" ,borderBottomWidth:1,borderColor:'rgba(205, 202, 202, 1)',paddingBottom:20,paddingTop:20,marginLeft:20,marginRight:20}}>
              <View style={{ paddingRight: 15, flexDirection: "column", gap: 4 }}>
                <Ionicons name="document-text-outline" size={35} color="black" style={{ top:10 }} />
              </View>
              <View style={{ width: "55%" ,gap:4}}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                <Text style={{fontSize:14}}>{item.time}</Text>
              </View>
              <View>
                 <TouchableOpacity onPress={()=>setModalVisible(true)}>
                    <MaterialIcons name="cancel" size={35} color="black" style={{ top:10, paddingLeft:60 }} />
                 </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.index}
        />
      ) : null}
    </View>
  </ScrollView>
   </>
   
  )
}