import React, { useEffect, useState } from 'react'
import { Text, View ,FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import GlobalApi from '../../services/GlobalApi'

function TopHeadlineSlider() {

    const [newList, setNewList] = useState([])

    useEffect(() => {
        getTopHeadline()
    }, [])

    const getTopHeadline = async () => {
        const result = (await GlobalApi.getTopOnline).data;

        setNewList(result.articles)
    }
    return (
        <View style={{marginTop:15}}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={newList}
            renderItem={({item})=>(
                <TouchableOpacity style={{width:Dimensions.get('screen').width*0.8}}>
                    <Image source={{uri:item.urlToImage}}
                    style={{height:Dimensions.get('screen').width*0.77,borderRadius:10,marginRight:15}}/>
                    <Text style={{marginTop:10,fontSize:24,fontWeight:'800'}} numberOfLines={3}>
                        {item.title}
                    </Text>
                    <Text style={{marginTop:5,color:'blue'}}>
                        {item?.source?.name}
                    </Text>
                </TouchableOpacity>
            )} horizontal/>
        </View>
    )
}

export default TopHeadlineSlider