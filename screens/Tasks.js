import { View, Text ,ScrollView,FlatList,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Header from '../components/Header';
const taskslist = [
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
];
export default function Tasks({navigation}) {
  function handleLeftPress(){
    navigation.navigate('Dashboard');
  }
  return (
    <>
    <Header title={"Tasks"} leftImg={"arrowleft"} handleLeftPress={handleLeftPress}/>
    <ScrollView style={{backgroundColor:'white'}}> 
      <View>
      {taskslist.length ? (
            <FlatList
              style={{ top: 15, paddingLeft: 15 }}
              data={taskslist}
              renderItem={({ item }) => (
                <TouchableOpacity
                onPress={()=>navigation.navigate('TaskDetails')}>
                
                  <View
                    style={{
                      flexDirection: "column",
                      height: 150,
                      width: 360,
                      gap: 3,
                      backgroundColor: "rgba(238, 238, 238, 1)",
                      borderRadius: 20,
                      
                      
                      marginBottom: 20,
                      marginHorizontal: 9,
                    }}
                  >
                    <Text style={{ fontSize: 14, fontWeight: "bold", marginHorizontal: 10, paddingTop: 20 }}>
                      {item.taskTitle.length > 45 ? item.taskTitle.slice(0, 120) + "..." : item.taskTitle}
                    </Text>
                    <Text style={{ fontSize: 14, marginHorizontal: 10, paddingBottom: 10 }}>
                      {item.taskDescription.length > 150 ? item.taskDescription.slice(0, 150) + "..." : item.taskDescription}
                    </Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 10, gap: 7 }}>
                      <Image source={require("../assets/dashboardIcons/date.png")} style={{ top: 3 }} />
                      <Text style={{ fontSize: 12 }}>{item.taskDate}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.index}
            />
          ) : null}
      </View>
    
        
    </ScrollView>
    </>
  )
}