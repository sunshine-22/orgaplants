import React from "react";
import { SafeAreaView, View,Text,Image,TouchableOpacity,Modal,TextInput } from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
const Payment=()=>{
    const [modalvisible,setmodalvisible]=useState(false)
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white"}}>
              <View style={{margin:"4%",flexDirection:"row"}}>
                <View>
                    <Ionicons name="home-outline" size={30} color="black" />
                </View>
                <View style={{margin:"2%"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Home</Text>
                    <Text>Karpagam college of Engineering,</Text>
                    <Text>Mayelaripalayam,Coimbatore-641032</Text>
                    <Text>Tamil Nadu,India</Text>
                    <Text style={{marginTop:"3%"}}>Phone Number:+919344810835</Text>
                </View>
                
              </View>
              {/* location service of modal view */}
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
            {/* end location view modal */}
                   
                   
            </View>
            <View style={{margin:"1%",alignItems:"center",position:"absolute",bottom:20,width:"100%"}}>
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={()=>setmodalvisible(true)}>
                    <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Add New Address</Text>
                </TouchableOpacity>
            </View>  
             
        </SafeAreaView>
    )
}

export default Payment;