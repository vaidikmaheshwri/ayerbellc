import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Pressable,
  } from 'react-native';
  import React, {useRef, useState} from 'react';

export default function CustomDropdown  ({cases,headingtxt})  {

    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(cases);
    const [selectedCase, setSelectedCase] = useState('');
    
   
    return (
        <View style={{flex: 1, marginBottom:"2%"}}>
      <Pressable
        style={{
          width: '90%',
          height: 50,
          borderRadius: 40,
         
          backgroundColor:'#eeeeee',
          alignSelf: 'center',
          marginTop: "4%",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
         
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{fontSize:18}}>
          {selectedCase == '' ? headingtxt : selectedCase}
        </Text>
        {clicked ? (
          <Image
            source={require('../assets/upload.png')}
            style={{width: 20, height: 20}}
          />
        ) : (
          <Image
            source={require('../assets/dropdown.png')}
            style={{width: 20, height: 20}}
          />
        )}
      </Pressable>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#eeeeee',
            borderRadius: 16,
          }}>
          

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <Pressable
                  style={{
                    width: '100%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                    paddingLeft:10
                  }}
                  onPress={() => {
                    setSelectedCase(item.label);
                    setClicked(!clicked);
                   
                  }}>
                  <Text style={{fontSize:18}}>{item.label}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      ) : null}
    </View>
    )
}
