import { View, Text,ScrollView ,FlatList,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { AntDesign } from '@expo/vector-icons';
const inquiriesList = [
  {
    image:require('../assets/inquiriesImg.png'),
    name:'Robert john',
    mail: 'richardjohn@gmail.com',
    description:`It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout. The point of  is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.`
  },
  {
    image:require('../assets/inquiriesImg.png'),
    name:'Robert john',
    mail: 'richardjohn@gmail.com',
    description:`It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout. The point of  is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.`
  },
  {
    image:require('../assets/inquiriesImg.png'),
    name:'Robert john',
    mail: 'richardjohn@gmail.com',
    description:`It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout. The point of  is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.`
  },
  {
    image:require('../assets/inquiriesImg.png'),
    name:'Robert john',
    mail: 'richardjohn@gmail.com',
    description:`It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout. The point of  is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.`
  },
  {
    image:require('../assets/inquiriesImg.png'),
    name:'Robert john',
    mail: 'richardjohn@gmail.com',
    description:`It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout. The point of  is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.`
  },

  {
    image:require('../assets/inquiriesImg.png'),
    name:'Robert john',
    mail: 'richardjohn@gmail.com',
    description:`It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout. The point of  is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.`
  },{
    image:require('../assets/inquiriesImg.png'),
    name:'Robert john',
    mail: 'richardjohn@gmail.com',
    description:`It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout. The point of  is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.`
  },
]
export default function Inquiries({navigation}) {
  function handleLeftPress(){
    navigation.navigate('Dashboard');
  }
  return (<>
  <Header title={'Inquiries'} leftImg={"arrowleft"} handleLeftPress={handleLeftPress}  />
   <ScrollView style={{backgroundColor:'white', }}>
      <View style={{paddingBottom:20}}>
      {inquiriesList.length ? (
            <FlatList
              style={{ top: 15, paddingLeft: 15 }}
              data={inquiriesList}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "column",
                      height: 250,
                      width: 360,
                      gap: 20,
                      backgroundColor: "rgba(228, 242, 255, 1)",
                      borderRadius: 20,
                      borderWidth: 1.5,
                      borderColor: "rgba(50, 161, 237, 0.29)",
                      marginBottom: 20,
                      marginHorizontal: 9,
                      paddingTop:30,
                      paddingLeft:15,
                      paddingRight:15
                    }}
                  >
                    <View style={{flexDirection:'row',gap:15}}>
                      <View >
                        <Image source={item.image} style={{width:60,height:60}}/>
                      </View>
                      <View style={{flexDirection:'column',gap:5,top:"2%"}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>
                            {item.name}
                        </Text>
                        <View style={{flexDirection:'row',gap:5}}>
                            <Image source={require('../assets/darkemail.png')}/>
                          <Text style={{top:"-3.5%"}}>
                             {item.mail}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text style={{textAlign:'justify',lineHeight:20}}>
                        {item.description}
                      </Text>
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