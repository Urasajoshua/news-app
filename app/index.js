import { StyleSheet, Text, View ,SafeAreaView} from "react-native";
import Home from "./screen/Home";

export default function Page() {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Home/>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"white",
      paddingTop:20,
      padding:20
      
  }
})