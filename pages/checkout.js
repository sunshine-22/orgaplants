import React, { useEffect } from "react";
import { View,SafeAreaView,Text,Image, TouchableOpacity,Modal, TextInput,ScrollView,Button,Alert,ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { Entypo } from '@expo/vector-icons';
import RadioForm from "react-native-simple-radio-button";
import style from "./style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Locations from 'expo-location';
const Checkout=({navigation,route})=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const [isloading,setisloading]=useState(false)
    const [paid,setpaid]=useState(false)
    const gotohome= async()=>{
        let userdata= await AsyncStorage.getItem("useridentity");
        navigation.reset({index:0,routes:[{name:"Dashboard",params:{userdata}}]})
    }
    const pay=async ()=>{
        setisloading(true)
        if(usercity.district=="Hosur" || usercity.district=="hosur" || usercity.district=="Krishnagiri" || usercity.district=="krishnagiri"){
            let userdata= await AsyncStorage.getItem("useridentity");
       await fetch("http://52.66.225.96/pay/",{
        method:"POST",
        mode:"no-cors",
        headers:{
            Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            userid:userdata,
            orderid:route.params.orderid,
            paymode:route.params.paymenttype
            

        })
    }).then((response)=>response.json())
    .then((responseData)=>{
       if(responseData.message=="success"){
        setisloading(false)
        setpaid(true)
       }
       else if(responseData.message=="online"){
        setisloading(false)
        let link=responseData.link
       
        navigation.reset({index:0,routes:[{name:"Paymentpage",params:{link}}]})
       }
       else{
        setisloading(false)
        Alert.alert("Info","sorry! your order has been declined!")
       }
    })

        }
    else{
        setisloading(false)
        Alert.alert("Info","Sorry! we are currently not accepting orders at your location")
    }
        
        
    }

    const [usercity,setusercity]=useState(route.params.billaddress)
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#f2f2f2"}}>
            {!paid && (<View>
                <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white"}}>
              <View style={{margin:"2%",flexDirection:"row"}}>
                <View>
                    <Ionicons name="location" size={30} color="#fc6f4c" />
                </View>
                <View style={{margin:"2%"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery To:</Text>
                    <Text>{usercity.area},{usercity.landmark}</Text>
                    <Text>{usercity.district}-{usercity.pincode}</Text>
                    
                </View>
                
              </View>
            </View>
            <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white"}}>
              <View style={{margin:"2%",flexDirection:"row"}}>
              <View>
                <View style={{margin:"2%",flexDirection:"row"}}>
                    <View style={{margin:"1%",width:200}}>
                        
                        <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"10%"}}>Order Id:</Text>
                        <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"10%"}}>Mode of Payment:</Text>
                        <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"10%"}}>Order Date:</Text>
                        <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"10%"}}>Delivery Date:</Text>
                       
                    </View>
                    <View style={{margin:"1%"}}>
                        
                        <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"10%"}} numberOfLines={1}>{route.params.orderid}</Text>
                        <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"10%"}}>{route.params.paymenttype}</Text>
                        <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"10%"}}>{dd + '/'+ mm + '/'  + yyyy}</Text>
                        <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"10%"}}>{(parseInt(dd)+1) + '/'+ mm + '/'  + yyyy}</Text>
                    </View>
                </View>
            
                <View style={{margin:"2%",flexDirection:"row"}}>
                    <View style={{margin:"1%",width:200}}>
                        <Text style={{fontWeight:"bold",fontSize:18}}>Grand Total</Text>
                        
                    </View>
                    <View style={{margin:"1%"}}>
                        <Text style={{fontWeight:"bold",fontSize:18}}>₹{route.params.cart_total+30}/-</Text>
                        
                    </View>
                </View>
            </View>
                
              </View>
             
            </View>
            <View style={{margin:"1%",alignItems:"center"}}>
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={pay}>
                {isloading && <ActivityIndicator size={"large"} color="white"/>}
                    <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Proceed & Checkout</Text>
                </TouchableOpacity>
            </View>
            </View>

            )}
            {paid && (
                <View style={{backgroundColor:"white",flex:1}}>
                    <View style={{alignItems:"center",marginTop:"15%"}}>
                        <Image source={require("./images/stores/conf.png")}  style={{width:200,height:200}}/>
                    </View>
                    <View style={{marginTop:"10%",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={gotohome}>
                            <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Continue Shopping</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            
        </SafeAreaView>
    )
}

export default Checkout;