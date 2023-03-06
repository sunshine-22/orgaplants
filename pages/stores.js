import React, { useEffect, useState } from "react";
import { SafeAreaView, View,Image,TouchableOpacity,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const Stores=({navigation,userlocation})=>{
    const [neatstores,setnearstores]=useState(0)
   
    var displaynearstore=[]

    useEffect(()=>{
        fetch("http://3.7.100.85:8080/get_nearstore/",{
            method:"POST",
            mode:"no-cors",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                store_location:userlocation.district
            })
        }).then((response)=>response.json())
        .then((responseData)=>{
            setnearstores(responseData)
        })

    },[userlocation])
    for(let i=0;i<neatstores.length;i++){
        displaynearstore.push(
            <TouchableOpacity onPress={()=>navigation.navigate("StoreMenu",{storeid:neatstores[i]})} key={i}>
                    <View style={{flexDirection:"row",margin:5,flex:1}} >
                        <Image source={{uri:neatstores[i].store_image}} style={{width:150,height:150,borderRadius:10}} />
                        <View style={{marginLeft:10,justifyContent:"center",flex:1}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>{neatstores[i].store_name}</Text>
                            {/* <View style={{flexDirection:"row",marginTop:10}}>
                                {star}{nonstar}
                                <Text style={{margin:2,fontSize:15}}>({vegetable[i].totalbuy})</Text>
                            </View> */}
                            <View style={{flexDirection:"row"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>{neatstores[i].store_ratings}</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>({neatstores[i].store_review})</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            
                            <Text style={{fontSize:15,fontStyle:"italic",}} numberOfLines={5}>{neatstores[i].store_description}</Text>
                            {/* <Text style={{fontSize:15,fontStyle:"italic",}}>Sold by:Orga Plants</Text> */}
                        </View>
                    </View>

                </TouchableOpacity>

        )

    }
    return(
        <SafeAreaView>
            <View>
                
                {displaynearstore}
                <View style={{marginTop:"10%"}}></View>
            </View>
        </SafeAreaView>
    )
}

export default Stores;