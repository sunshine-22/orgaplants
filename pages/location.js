import React, { useState } from "react";
import { SafeAreaView, View ,Text,Image,TouchableOpacity,Modal, TextInput} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
const Location=({navigation})=>{
    const [modalvisible,setmodalvisible]=useState(false)
    return(
        <SafeAreaView style={style.backgroundcolor}>
            <View style={{margin:"5%"}}>
                <Text style={{marginTop:"15%",fontWeight:"bold",fontSize:30}}>What's your Location?</Text>
                <Text style={{fontSize:18,color:"#aba9a9"}}>We need your Location to show available stores & products</Text>
            </View>
            <View style={{alignItems:"center"}}>
               <Image source={require("./images/logo/location.webp")} style={{width:"100%",height:400}}/> 
            </View>
            <View style={{margin:"1%",alignItems:"center"}}>
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={()=>{navigation.navigate("PersonalDetails")}}>
                    <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Allow Location access</Text>
                </TouchableOpacity>
            </View>
            <View style={{margin:"1%",alignItems:"center"}}>
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"white",borderColor:"white"}} onPress={()=>setmodalvisible(true)}>
                    <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"#fc6f4c"}}>Enter Location Manually</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,backgroundColor:"white"}}>
                <Modal visible={modalvisible}  animationType="fade">
                    <View style={{margin:"5%"}}>
                        <TouchableOpacity onPress={()=>setmodalvisible(false)}>
                            <Ionicons name="arrow-back" size={45} color="black" />
                        </TouchableOpacity>
                        <View style={{marginTop:"5%"}}>
                            <Text style={{fontWeight:"bold",fontSize:18}}>Enter your Area or apartment name</Text>
                        </View>
                        <View style={{marginTop:"5%",borderWidth:1,height:50,borderRadius:15,flexDirection:"row"}}>
                            <View style={{padding:12}}>
                                <Ionicons name="search" size={24} color="black" />
                            </View>
                           
                            <TextInput placeholder="Try Gandhinagar,Dharmapuri,etc.." style={{padding:12}}></TextInput>
                        </View>
                        <View style={{marginTop:"5%",flexDirection:"row"}}>
                            <View>
                                <Ionicons name="navigate-circle-sharp" size={35} color="#fc6f4c" />
                            </View>
                            <TouchableOpacity style={{width:"90%",backgroundColor:"white",  borderColor:"white"}}>
                                <Text style={{fontWeight:"bold",color:"#fc6f4c",marginLeft:"3%",paddingTop:5,fontSize:18}}>Use My current Location</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}


export default Location;