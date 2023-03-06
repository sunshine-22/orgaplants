import React, { useEffect, useState } from "react";
import { SafeAreaView, View,ScrollView,Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyOrders=()=>{
    const [orderhis,setorderhis]=useState(0)
    var displayorder=[]
    useEffect(()=>{
        async function getoredr_history(){
            let userdata= await AsyncStorage.getItem("useridentity");
                fetch("http://3.7.100.85:8080/orderhistory/",{
                    method:"POST",
                    mode:"no-cors",
                    headers:{
                        Accept: 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        userid:userdata
                        
    
                    })
                }).then((response)=>response.json())
                .then((responseData)=>{
                   setorderhis(responseData.orderdata)
                })
        }
        getoredr_history()
    },[])
    for(let i=0;i<orderhis.length;i++){
        displayorder.push(
            <View style={{margin:10,borderWidth:1,height:200,borderRadius:10,backgroundColor:"white",borderColor:"white",padding:10}} key={i}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold"}}>{orderhis[i]._id}</Text>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold",right:0,position:"absolute"}}>Total:{orderhis[i].cart_total}/-</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold",color:"#adadad"}}>Order:{orderhis[i].orderdate}</Text>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold",color:"#adadad"}}>Delivery:{orderhis[i].delivery_date}</Text>
                    </View>
                    <View>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold",color:"#adadad"}}>Delivery Address: {orderhis[i].deliver_address.area},{orderhis[i].deliver_address.landmark},{orderhis[i].deliver_address.district},{orderhis[i].deliver_address.pincode}</Text>
                    
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:5,fontSize:14,fontWeight:"bold"}}>Paymode :{orderhis[i].paymode}</Text>
                        <Text style={{margin:5,fontSize:14,color:"orange",fontWeight:"bold",marginLeft:"auto"}}>Payment:{orderhis[i].payment_success}</Text>
                        
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:5,fontSize:15,color:"blue",fontWeight:"bold"}}>Order :{orderhis[i].orderaccepted}</Text>
                        <Text style={{margin:5,fontSize:15,right:0,position:"absolute",color:"green",fontWeight:"bold"}} >{orderhis[i].delivered}</Text>
                    </View>
                </View>

        )

    }
    return(
        <SafeAreaView>
            <ScrollView style={{backgroundColor:"#e1e3e1"}}>
                
                {displayorder}
        
            </ScrollView>

        </SafeAreaView>
        
    )
}

export default MyOrders;