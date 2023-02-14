import React, { useEffect } from "react";
import { SafeAreaView, View,Text,Image,TouchableOpacity,Modal,TextInput, Alert,ScrollView,ActivityIndicator} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import * as Locations from 'expo-location';
import { AntDesign } from '@expo/vector-icons';
const Payment=({route})=>{

    const [modalvisible,setmodalvisible]=useState(false)
    const [addressdata,setaddressadata]=useState(0)
    const [location, setLocation] = useState(null);
    const [isloading,setisloading]=useState(false)
    const [reload,setreload]=useState(false)
    var dispalyaddresses=[]
    const deleteaddress=(deleteid)=>{

        Alert.alert("Info","Are you sure you want to Delete",[
            {
                text:"cancel",
                onPress:()=>console.log("cancel"),
                style:"cancel"
            },
            { text: "OK", onPress: async() => {
                fetch("http://52.66.225.96/delete_user_address/",{
                    method:"POST",
                    mode:"no-cors",
                    headers:{
                        Accept: 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        delete_address:deleteid
                    })
                }).then((response)=>response.json())
                .then((responseData)=>{
                    setreload(!reload)
                    if(responseData.message!="success"){
                        Alert.alert("info","something went wrong!")
                    }
                })
    
            },style:"destructive" }
        ])
    }
    useEffect(()=>{
        fetch("http://52.66.225.96/getuseraddresses/",{
            method:"POST",
            mode:"no-cors",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userid:route.params.userid
            })
        }).then((response)=>response.json())
        .then((responseData)=>{
            setaddressadata(responseData)
            if(responseData.message=="failed"){
                Alert.alert("info","sorry!something went wrong!")
            }
            
        })

    },[modalvisible,reload])
    const selectcurrentlocation=async ()=>{
        setisloading(true)
        let { status } = await Locations.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("info",'Permission to access location was denied');
            return;
        }

      let location = await Locations.getCurrentPositionAsync({});
      setLocation(location);
      fetch("http://52.66.225.96/livelocation/",{
        method:"POST",
        mode:"no-cors",
        headers:{
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "latitude":location.coords.latitude,
            "longitude":location.coords.longitude,
            "userid":route.params.userid
        })
         }).then((response)=>response.json())
            .then((responseData)=>{
        if(responseData.message=="failed"){
            Alert.alert("Info","Oops!something went wrong while fetching location try again!")
            setmodalvisible(false)
            setisloading(false)
        }
        else{
            setisloading(false)
            setmodalvisible(false)

         
            
        }})
    }
    for(let i=0;i<addressdata.length;i++){
        dispalyaddresses.push(
            <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white"}} key={i}>
                <View style={{margin:"4%",flexDirection:"row"}}>
                <View>
                    <Ionicons name="home-outline" size={30} color="black" />
                </View>
                <View style={{margin:"2%"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Home</Text>
                    <Text>{addressdata[i].landmark},{addressdata[i].area}</Text>
                    <Text>{addressdata[i].district},{addressdata[i].pincode}</Text>
                    <Text>{addressdata[i].state},India</Text>
                    <Text style={{marginTop:"3%"}}>Phone Number:{route.params.userid}</Text>
                </View>
                <TouchableOpacity style={{marginLeft:"auto"}} onPress={()=>{deleteaddress(addressdata[i]._id)}}>
                    <View>
                        <AntDesign name="delete" size={25} color="red" />
                    </View>
                </TouchableOpacity>
                
                </View>
    
                 
            </View>
            
        )
    }
    return(
        <View >
            <ScrollView>
                {dispalyaddresses}
                <View style={{marginTop:"15%"}}></View>
            </ScrollView>
        
            <View>
                <View style={{margin:"1%",alignItems:"center",position:"absolute",bottom:0,width:"100%",marginTop:"2%"}}>
                    <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={()=>setmodalvisible(true)}>
                        <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Add New Address</Text>
                    </TouchableOpacity>
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
                                <TouchableOpacity style={{width:"90%",backgroundColor:"white",  borderColor:"white"}} onPress={selectcurrentlocation}>
                                    <Text style={{fontWeight:"bold",color:"#fc6f4c",marginLeft:"3%",paddingTop:5,fontSize:18}}>Use My current Location</Text>
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{marginTop:"3%"}}>
                                {isloading && <ActivityIndicator size={"large"} color="orange"/>}
                                </View>
                        </View>
                    </Modal>
                </View>
            {/* end location view modal */}
              
             
        </View>
    )
}

export default Payment;