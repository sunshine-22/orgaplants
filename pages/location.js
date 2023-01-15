import React, { useState } from "react";
import { SafeAreaView, View ,Text,Image,TouchableOpacity,Modal, TextInput, Alert,ActivityIndicator} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import * as Locations from 'expo-location';
const Location=({navigation,route})=>{
    console.log(route)
    const [modalvisible,setmodalvisible]=useState(false)
    const [location, setLocation] = useState(null);
    const [isloading,setisloading]=useState(false)
    const locationaccess=async ()=>{
        setisloading(!isloading)
        let { status } = await Locations.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("info",'Permission to access location was denied');
            return;
        }

      let location = await Locations.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
      fetch("http://172.20.10.5:8000/livelocation/",{
        method:"POST",
        mode:"no-cors",
        headers:{
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "latitude":location.coords.latitude,
            "longitude":location.coords.longitude,
            "userid":route.params.userkey
        })
         }).then((response)=>response.json())
            .then((responseData)=>{
        if(responseData.message=="failed"){
            setisloading(!isloading)
            Alert.alert("Info","Oops!something went wrong while fetching location try again!")
        }
        else{
            setisloading(!isloading)
            navigation.navigate("PersonalDetails",{userid:route.params.userkey})
            
        }
    })
    }
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
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={locationaccess}>
                    {isloading && <ActivityIndicator size={"large"} color="white"/>}
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