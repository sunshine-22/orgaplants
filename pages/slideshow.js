import { useScrollToTop } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View,Image } from "react-native";

const SlideShow=()=>{
    const [banner,setbanner]=useState(<Image source={require("./images/logo/babber1.jpg")} style={{height:200,width:355,borderRadius:15}}/>)
    var bannerdata=[]
    useEffect(()=>{
        fetch("http://192.168.1.104:8000/offerbanners/",{
            method:"GET",
            mode:"no-cors",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response)=>response.json())
        .then((responseData)=>{
            for(let i=0;i<responseData.length;i++){
                bannerdata.push(
                responseData[i].offerbanner
            )

            }
            
            
            
        })
    },[])
    useEffect(() => {
        const interval = setInterval(() => {
          slide();
        }, 10000);
        return () => clearInterval(interval);
      }, []);
    function slide(){
            var randombanner=Math.floor(Math.random() * bannerdata.length)
            setbanner(<Image source={{uri:bannerdata[randombanner]}} style={{height:200,width:355,borderRadius:15}}/>)
        
    }
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View  style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl"}}>
                <View style={{margin:5,marginright:5}} >
                    {banner}
                </View>
                
            </View>
        </ScrollView>
        
    )
}

export default SlideShow;