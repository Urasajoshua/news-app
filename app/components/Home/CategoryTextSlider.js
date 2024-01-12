import React, { useState } from 'react'
import { Text, View ,FlatList,TouchableOpacity,StyleSheet} from 'react-native'
import CategoryList from '../../constants/index'

function CategoryTextSlider() {

    const [active,setActive] =useState(1)

    const onCategoryClick = (id)=>{
        setActive(id)
    }
  return (
    <View style={{marginTop:20}}>
    <FlatList data={CategoryList}
    renderItem={({item})=>(
        <TouchableOpacity onPress={()=> onCategoryClick(item.id)}>
            <Text style={item.id === active ? styles.selectedText: styles.unselectedText }>
                {item.name}
            </Text>
        </TouchableOpacity>
    )}
     horizontal
     showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

const styles = StyleSheet.create({
    unselectedText:{
        marginRight:15,
        fontSize:20,
        fontWeight:'800',
        color:'gray'
    },
    selectedText:{
        marginRight:15,
        fontSize:20,
        fontWeight:'900',
        color:'blue'
    }
})




export default CategoryTextSlider