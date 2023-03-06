import React, { useEffect,useState } from "react";
import { View,SafeAreaView,TouchableOpacity,Text,Image } from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import Stores from "./stores";
import { useScrollToTop } from "@react-navigation/native";
const FeaturedStore=({navigation,route})=>{
   
    const[featuredstore1,setfeaturedstore1]=useState(0)
    const[featuredstore,setfeaturedstore]=useState(0)
    var displaycategorystore=[]
    const [displaypage,setdisplaypage]=useState(true)
    useEffect(()=>{
        fetch("http://3.7.100.85:8080/get_featuredstore/",{
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
            setfeaturedstore1(responseData)
        })
    },[])
    useEffect(()=>{
        fetch("http://3.7.100.85:8080/get_category_store/",{
            method:"POST",
            mode:"no-cors",
            headers:{
                Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                store_category:route.params.name
            })
        }).then((response)=>response.json())
        .then((responseData)=>{
            if(responseData.message!="failed"){
                if(responseData.length==0){
                    setdisplaypage(false)

                }
                else{
                    setfeaturedstore(responseData)

                }
                
            }
            
            
        })
        
    },[])
    for(let i=0;i<featuredstore.length;i++){
        displaycategorystore.push(
            <TouchableOpacity onPress={()=>navigation.navigate("StoreMenu",{storeid:featuredstore1[i]})} key={i}>
                       
                    <View style={{flexDirection:"row",margin:5}} >
                        <Image source={{uri:featuredstore[i].store_image}} style={{width:150,height:150,borderRadius:10}} />
                        <View style={{marginLeft:10,justifyContent:"center",flex:1}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>{featuredstore[i].store_name}</Text>
                            
                            <View style={{flexDirection:"row"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                            
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>{featuredstore[i].store_ratings}</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>({featuredstore[i].store_review})</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            
                            <Text style={{fontSize:15,fontStyle:"italic",}} numberOfLines={5}>{featuredstore[i].store_description}</Text>
                            
                        </View>
                    </View>
                </TouchableOpacity> 
        )

    }
    return(
        <SafeAreaView style={style.backgroundcolor}>
            {displaypage && (
                <View style={{marginTop:"5%"}}>
                
                {displaycategorystore}
            </View>

            )}
            {!displaypage &&(
                <View>
                    <View style={{alignItems:"center",marginTop:"10%"}}>
                        <Image source={require("./images/stores/empty.gif")} style={{width:"100%",height:300}} />
                    </View>
                </View>
            )}
            

        </SafeAreaView>
        
    )
}

export default FeaturedStore;