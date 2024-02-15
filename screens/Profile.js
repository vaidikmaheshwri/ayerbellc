import { View, Text,Image ,TouchableOpacity} from "react-native";
import React,{useState} from "react";
import Header from "../components/Header";
import { AntDesign } from '@expo/vector-icons';
import {  } from "react-native-gesture-handler";
import CustomModal from "../components/CustomModal";
const userDetails = {
    name:'John Pearson',
    email: 'johnpearson1234@gmail.com'
}
export default function Profile({ navigation }) {
    const [deletemodalvisible,setdeleteModalVisible]= useState(false);
    const [logoutmodalvisible,setlogoutModalVisible]= useState(false);
  function handleLeftPress() {
    navigation.goBack();
  }
  return (
    <>
      <CustomModal
      description={'Are you sure you want to logout your account?'}
      btn1Name={'Cancel'}
      btn2Name={'Logout'}
      btn1handler={()=>{setlogoutModalVisible(false)}}
      modalvisible={logoutmodalvisible}

     
      />
      <CustomModal
      description={'Are you sure you want to delete your account?'}
      btn1Name={'Cancel'}
      btn2Name={'Delete'}
      btn1handler={()=>{setdeleteModalVisible(false)}}
     modalvisible={deletemodalvisible}
      />

      <Header title={"Profile"} leftImg={"arrowleft"} handleLeftPress={handleLeftPress} />
      <View style={{ backgroundColor: "white", height: "100%" }}>

        <View style={{height:"20%",marginTop:"5%",width:"90%",marginLeft:"5%", position:'relative'}}> 
          <Image source={require('../assets/SplashScreen.png')}  style={{resizeMode:'cover',flex:1,width:"100%" ,position:"relative",borderRadius:20}} />
          <View  style={{flexDirection:"row",position:'absolute',gap:20}} >
            <View style={{ marginTop:"10%",marginLeft:20, flexDirection:'column'}}>
              <Image source={require('../assets/user.png')} style={{width:100,height:100,borderRadius:50}}  />
              <TouchableOpacity style={{backgroundColor:'white', width:40,height:40, borderRadius:20, position:'absolute',top:"70%",left:"60%"}}>
                 <AntDesign name="edit" size={20} color="#32A1ED" style={{top:"18%",left:'20%'}}/>
              </TouchableOpacity>
            </View>
            <View style={{top:"15%"}}>
            <Text style={{color:'white',fontSize:24}}>
                {userDetails.name}
            </Text>
            <Text style={{color:'white',fontSize:12}}>
                {userDetails.email}
            </Text>
          </View>
           </View>

         
        </View>
        
        <TouchableOpacity style={{width:"90%", marginLeft:"5%",marginTop:"5%", borderBottomColor:'#E6E6E6',borderBottomWidth:1,paddingBottom:"3%"}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:22}}>Inquiries</Text>
                <AntDesign name="right" size={22} color="#A1A1A1" style={{marginTop:"2%"}}  />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"90%", marginLeft:"5%",marginTop:"5%", borderBottomColor:'#E6E6E6',borderBottomWidth:1,paddingBottom:"3%"}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:22}}>Privacy & Policy</Text>
                <AntDesign name="right" size={22} color="#A1A1A1" style={{marginTop:"2%"}}  />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"90%", marginLeft:"5%",marginTop:"5%", borderBottomColor:'#E6E6E6',borderBottomWidth:1,paddingBottom:"3%"}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:22}}>Terms & Conditions</Text>
                <AntDesign name="right" size={22} color="#A1A1A1" style={{marginTop:"2%"}}  />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"90%", marginLeft:"5%",marginTop:"5%", borderBottomColor:'#E6E6E6',borderBottomWidth:1,paddingBottom:"3%"}}
        onPress={()=>setdeleteModalVisible(true)}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:22}}>Delete</Text>
                <AntDesign name="right" size={22} color="#A1A1A1" style={{marginTop:"2%"}}  />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"90%", marginLeft:"5%",marginTop:"5%", }}
        onPress={()=>setlogoutModalVisible(true)}>
            <View style={{}}>
                <Text style={{fontSize:22}}>Logout</Text>
                
            </View>
        </TouchableOpacity>
      </View>

    </>
  );
}
