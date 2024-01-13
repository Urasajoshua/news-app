import React from 'react'
import { View ,Text} from 'react-native'
import CategoryTextSlider from '../components/Home/CategoryTextSlider'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../components/Home/TopHeadlineSlider';

function Home() {
  return (
    <View>
        <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{fontSize:24,fontWeight: 'bold',color:'blue',textAlign:'center'}}>Lastborn News</Text>
        <Ionicons name="notifications" size={24} color="black" />
        </View>
       
       {/* category list */}
        <CategoryTextSlider/>
        {/* top headline slider*/}
        <TopHeadlineSlider/>
        
    </View>
  )
}

export default Home