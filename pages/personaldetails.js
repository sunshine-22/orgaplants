import React from "react";
import { SafeAreaView, View,Text, TextInput,TouchableOpacity} from "react-native";
import style from "./style";
const PersonalDetails=({navigation})=>{
    return(
        <SafeAreaView style={style.backgroundcolor}>
            <View style={{margin:"5%",alignItems:"center"}}>
                <Text style={{fontSize:18,color:"#aba9a9",fontWeight:"bold"}}>Tell us a bit more about yourself..</Text>
            </View>
            <View style={{margin: '5%'}}>
                <Text style={{fontWeight:"bold"}}>Name</Text>
                <TextInput placeholder="Enter your name" style={{borderBottomWidth:1,height:45,padding:6,fontWeight:"bold",borderBottomColor:"#fc6f4c"}}></TextInput>
                <Text style={{fontWeight:"bold",marginTop:"5%"}}>E-mail</Text>
                <TextInput placeholder="Enter your email" style={{borderBottomWidth:1,height:45,padding:6,fontWeight:"bold", borderBottomColor:"#fc6f4c"}}></TextInput>
            </View>
            <View style={{margin:"1%",alignItems:"center"}}>
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={()=>{navigation.reset({index:0,routes:[{name:"Dashboard"}]})}}>
                    <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white",fontSize:18}}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default PersonalDetails;