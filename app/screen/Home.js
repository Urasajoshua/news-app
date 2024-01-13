import React from 'react'
import { View ,Text,ScrollView} from 'react-native'
import CategoryTextSlider from '../components/Home/CategoryTextSlider'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../components/Home/TopHeadlineSlider';
import HeadlineList from '../components/Home/HeadlineList';
import { useState,useEffect } from 'react';
import GlobalApi from '../services/GlobalApi';

function Home() {

    const [newList, setNewList] = useState([])

    useEffect(() => {
        getTopHeadline()
    }, [])

    const getTopHeadline = async () => {
        const result = (await GlobalApi.getTopOnline).data;

        setNewList(result.articles)
    }
  return (
    <ScrollView>
        <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{fontSize:24,fontWeight: 'bold',color:'blue',textAlign:'center'}}>Lastborn News</Text>
        <Ionicons name="notifications" size={24} color="black" />
        </View>
       
       {/* category list */}
        <CategoryTextSlider/>
        {/* top headline slider*/}
        <TopHeadlineSlider newList={newList}/>

        {/* headlines */}
        <HeadlineList newList={newList}/>
        
    </ScrollView>
  )
}

export default Home