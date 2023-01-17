import { useScrollToTop } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View,Text, TextInput,TouchableOpacity, Alert,ActivityIndicator} from "react-native";
import style from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
const PersonalDetails=({navigation,route})=>{
  
    const[username,setname]=useState(null)
    const[email,setemail]=useState(null)
    const [isloading,setisloading]=useState(false)
    const savedetails=()=>{
        setisloading(!isloading)
            if(username!=null && email!=null){
                fetch("http://192.168.1.104:8000/updateuser/",{
                    method:"POST",
                    mode:"no-cors",
                    headers:{
                        Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        "username":username,
                        "email":email,
                        "userid":route.params.userid
                    })
                     }).then((response)=>response.json())
                        .then((responseData)=>{
                    if(responseData.message=="failed"){
                        setisloading(!isloading)
                        Alert.alert("Info","Oops!something went wrong while fetching location try again!")
                    }
                    else{
                        setisloading(!isloading)
                        const usernameid=route.params.userid
                        const storedata= async ()=>{
                            await AsyncStorage.setItem('useridentity', usernameid)
                       }
                       storedata();
                        navigation.reset({index:0,routes:[{name:"Dashboard",params:{usernameid}}]})
                        

                        
                    }
                })
                
            }
            else{
                setisloading(false)
                Alert.alert("Info","Please,Fill out all the Fields")
            }
       
    }
    return(
        <SafeAreaView style={style.backgroundcolor}>
            <View style={{margin:"5%",alignItems:"center"}}>
                <Text style={{fontSize:18,color:"#aba9a9",fontWeight:"bold"}}>Tell us a bit more about yourself..</Text>
            </View>
            <View style={{margin: '5%'}}>
                <Text style={{fontWeight:"bold"}}>Name</Text>
                <TextInput placeholder="Enter your name" style={{borderBottomWidth:1,height:45,padding:6,fontWeight:"bold",borderBottomColor:"#fc6f4c"}} onChangeText={(text)=>{setname(text)}}></TextInput>
                <Text style={{fontWeight:"bold",marginTop:"5%"}}>E-mail</Text>
                <TextInput placeholder="Enter your email" style={{borderBottomWidth:1,height:45,padding:6,fontWeight:"bold", borderBottomColor:"#fc6f4c"}} onChangeText={(text)=>{setemail(text)}}></TextInput>
            </View>
            <View style={{margin:"1%",alignItems:"center"}}>
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={savedetails}>
                 {isloading && <ActivityIndicator size={"large"} color="white"/>}
                    <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white",fontSize:18}}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default PersonalDetails;