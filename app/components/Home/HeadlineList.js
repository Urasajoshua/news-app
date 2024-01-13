import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

function HeadlineList({newList}) {
  return (
    <View style={{marginTop:20}}>
        <FlatList
        data={newList}
        renderItem={({item})=>(
            <View>
                <View style={{height:1,backgroundColor:'gray',marginTop:10}}></View> 
                <TouchableOpacity style={{marginTop:15,display:'flex',flexDirection:'row'}}>
                <Image source={{uri: item.urlToImage}}
                style={{height:130,width:130,borderRadius:10}}/>
                <View style={{marginRight:135,marginLeft:10}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}} numberOfLines={4}>{item.title}</Text>
                    <Text style={{color:'blue',marginTop:6}}>{item?.source?.name}</Text>
                </View>
            </TouchableOpacity>
            
            </View>
        )}/>
    </View>
  )
}

export default HeadlineList