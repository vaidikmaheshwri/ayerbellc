import { View, Text ,FlatList, TouchableOpacity,TouchableHighlight,Image} from 'react-native'
import React from 'react'
const casesList = [
    // {
    //   caseTitle: "It is a long established fact that a reader distracted",
    //   caseId: 1234567890123456,
    // },
    // {
    //   caseTitle: "It is a long established fact that a reader distracted",
    //   caseId: 1234567890123456,
    // },
    // {
    //   caseTitle: "It is a long established fact that a reader distracted",
    //   caseId: 1234567890123456,
    // },
    // {
    //   caseTitle: "It is a long established fact that a reader distracted",
    //   caseId: 1234567890123456,
    // },
    // {
    //   caseTitle: "It is a long established fact that a reader distracted",
    //   caseId: 1234567890123456,
    // },
    // {
    //   caseTitle: "It is a long established fact that a reader distracted",
    //   caseId: 1234567890123456,
    // },
    // {
    //   caseTitle: "It is a long established fact that a reader distracted",
    //   caseId: 1234567890123456,
    // },
  ];
export default function Cases({navigation}) {
  return (
    <View style={{backgroundColor:'white', paddingBottom:10}}>
        {casesList.length ? (
            <FlatList
              style={{ top: 15, paddingLeft: 15 }}
              data={casesList}

              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.push('CaseDetails')}>
                  <View
                    style={{
                      flexDirection: "column",
                      height: 100,
                      width: 360,
                      gap: 15,
                      backgroundColor: "rgba(238, 238, 238, 1)",
                      borderRadius: 15,
                      marginHorizontal: 12,
                      marginBottom: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "rgba(104, 104, 104, 1)",
                        marginHorizontal: 20,
                        top: 20,
                      }}
                    >
                      {item.caseTitle.length > 40
                        ? item.caseTitle.slice(0, 40) + "..."
                        : item.caseTitle}
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        color: "rgba(104, 104, 104, 1)",
                        top: 15,
                        marginLeft: 20,
                      }}
                    >
                      Case Id - {item.caseId}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.index}
            />
          ) : (
            <View style={{height:"100%"}}>
              <Image source={require("../../assets/OBJECTS.png")} style={{top:"15%",alignSelf:'center'}}/>
              
              <View style={{marginTop:"35%",width:"50%",marginLeft:"28%"}}> 
                <Text style={{fontSize:20,textAlign:'center'}}>
                 No Cases Found! it is a long established fact that a reader.
                </Text>
                </View>
            </View>
          )}
    </View>
  )
}