import React, { useState } from "react";
import { SafeAreaView, View ,Text,Image,TouchableOpacity,Modal, TextInput, Alert,ActivityIndicator} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import * as Locations from 'expo-location';
const Location=({navigation,route})=>{

    const [modalvisible,setmodalvisible]=useState(false)
    const [location, setLocation] = useState(null);
    const [isloading,setisloading]=useState(false)
    const [area,setarea]=useState(null)
    const [district,setdistrict]=useState(null)
    const [landmark,setlandmark]=useState(null)
    const [state,setstate]=useState(null)
    const [pincode,setpincode]=useState(null)
    const saveaddress=()=>{
        if(area!=null && district!=null && landmark!=null && state!=null && pincode!=null){
            const mannual_address={
                area:area,
                district:district,
                landmark:landmark,
                state:state,
                pincode:pincode
            }
    
            setmodalvisible(false)
            navigation.navigate("PersonalDetails",{userid:route.params.userkey})

        }
        else{
            Alert.alert("info","please fillout all the required fields")
            setmodalvisible(false)
        }
      
        
    }
    const locationaccess=async ()=>{
        setisloading(!isloading)
        let { status } = await Locations.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("info",'Permission to access location was denied');
            return;
        }

      let location = await Locations.getCurrentPositionAsync({});
      setLocation(location);
   
      fetch("http://192.168.1.104:8000/livelocation/",{
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
                <View style={{backgroundColor:"#ededed",flex:1}}>
                        <View style={{height:150,backgroundColor:"#252324"}} >
                            
                        </View>
                        <View style={{backgroundColor:"#252324"}}>
                            <View style={{backgroundColor:"#ededed",marginTop:5,borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:"row"}}>
                                <View style={{margin:"3%"}}>
                                    <Text style={{fontSize:20,fontWeight:"bold",color:"grey"}}>Enter Address Mannually</Text>
                                </View>
                                <TouchableOpacity style={{margin:"2%",marginLeft:"auto"}} onPress={()=>setmodalvisible(false)}>
                                    <Ionicons name="close" size={34} color="#fc6f4c" />
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:"#ededed"}}>
                                <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10}}>
                                    <TextInput placeholder="Area" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}onChangeText={(text)=>setarea(text)}></TextInput>
                                </View>
                                <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10}}>
                                    <TextInput placeholder="landmark" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}} onChangeText={(text)=>setlandmark(text)}></TextInput>
                                </View>
                                <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10}}>
                                    <TextInput placeholder="City" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}onChangeText={(text)=>setdistrict(text)}></TextInput>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10,width:"45%"}}>
                                        <TextInput placeholder="State" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}} onChangeText={(text)=>setstate(text)}></TextInput>
                                    </View>
                                    <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10,width:"45%"}}>
                                    <TextInput placeholder="Pincode" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}} onChangeText={(text)=>setpincode(text)} keyboardType={"numeric"} maxLength={6}></TextInput>
                                    </View>
                                </View>
                                <View style={{margin:"1%",alignItems:"center",marginTop:"5%"}}>
                                    <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={saveaddress}>
                                        <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Save and Add address</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{margin:"1%",alignItems:"center",marginTop:"5%"}}>
                                    <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,borderColor:"#ededed"}} onPress={locationaccess}>
                                        <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"#fc6f4c"}}>Enable my Current Location</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginTop:"3%"}}>
                                {isloading && <ActivityIndicator size={"large"} color="orange"/>}
                                </View>
                            </View>
                        </View>
                        
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}


export default Location;