import { useScrollToTop } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View,Image,Dimensions } from "react-native";

const SlideShow=()=>{
    var bannerdata=[]
    const windowWidth = Dimensions.get('window').width;
    const bannerwidth=parseInt(windowWidth)-20
    const [banner,setbanner]=useState(<Image source={require("./images/logo/babber1.webp")} style={{height:200,width:bannerwidth,borderRadius:15}}/>)
    useEffect(()=>{
        fetch("http://52.66.225.96/offerbanners/",{
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
            setbanner(<Image source={{uri:bannerdata[randombanner]}} style={{height:200,width:bannerwidth,borderRadius:15}}/>)
        
    }
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View  style={{flexDirection:"row",justifyContent:"center",direction:"rtl"}}>
                <View style={{margin:5,marginright:5,alignItems:"center",justifyContent:"center",alignContent:"center"}} >
                    {banner}
                </View>
                
            </View>
        </ScrollView>
        
    )
}

export default SlideShow;