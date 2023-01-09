import React from "react";
import { SafeAreaView, View,ScrollView,Text } from "react-native";


const MyOrders=()=>{
    return(
        <SafeAreaView>
            <ScrollView style={{backgroundColor:"#e1e3e1"}}>
                <View style={{margin:10,borderWidth:1,height:200,borderRadius:10,backgroundColor:"white",borderColor:"white",padding:10}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold"}}>Order No:wdwdew</Text>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold",right:0,position:"absolute"}}>Total:500/-</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold",color:"#adadad"}}>Order:12.2.2332</Text>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold",color:"#adadad"}}>Delivery:11.23.42</Text>
                    </View>
                    <View>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold",color:"#adadad"}}>Delivery Address: gandhinagar,Dharmapuri,636987</Text>
                    
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:5,fontSize:15,fontWeight:"bold"}}>Paymode :Online</Text>
                        <Text style={{margin:5,fontSize:15,color:"orange",fontWeight:"bold"}}>Payment : Pending</Text>
                        
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:5,fontSize:15,color:"blue",fontWeight:"bold"}}>Order :   Accepted</Text>
                        <Text style={{margin:5,fontSize:15,right:0,position:"absolute",color:"green",fontWeight:"bold"}} >Pending</Text>
                    </View>
                </View>
                
        
            </ScrollView>

        </SafeAreaView>
        
    )
}

export default MyOrders;