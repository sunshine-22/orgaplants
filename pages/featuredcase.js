import React, { useEffect, useState } from "react";
import { ScrollView, View,Image, TouchableOpacity,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const FeaturedCase=({navigation})=>{
    const [featuredstore,setfeaturedstore]=useState(0)
    var displayfeaturedstore=[]
   useEffect(()=>{
    fetch("http://52.66.225.96/get_featuredstore/",{
        method:"POST",
        mode:"no-cors",
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            auth_token:"Theonewhodetermines"
        })
    }).then((response)=>response.json())
    .then((responseData)=>{
        setfeaturedstore(responseData)
    })

   },[])
    for(let i=0;i<featuredstore.length;i++){
        displayfeaturedstore.push(
            <TouchableOpacity key={i} onPress={()=>navigation.navigate("StoreMenu",{storeid:featuredstore[i]})}>
                    <View style={{margin:5,marginright:5,borderWidth:2,borderRadius:15,borderColor:"#c9c9c9",width:200}} >
                        
                        <Image source={{uri:featuredstore[i].store_image}} style={{height:150,width:196,borderTopRightRadius:15,borderTopLeftRadius:15}}/>
                        <View>
                            <Text style={{margin:2,fontWeight:"bold",fontSize:15,textAlign:"center"}} numberOfLines={1}>{featuredstore[i].store_name}</Text>
                            <View style={{flexDirection:"row-reverse",justifyContent:"center"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>{featuredstore[i].store_ratings}</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>({featuredstore[i].store_review})</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            <Text style={{fontSize:15,fontStyle:"italic",textAlign:"auto",margin:5}} numberOfLines={1}>{featuredstore[i].store_description}</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>

        )
    }
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View  style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl"}}>
                
                
                {displayfeaturedstore}
                
            </View>
        </ScrollView>
    )
}

export default FeaturedCase;