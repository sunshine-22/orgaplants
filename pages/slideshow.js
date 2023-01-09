import React from "react";
import { ScrollView, View,Image } from "react-native";

const SlideShow=()=>{
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View  style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl"}}>
                <View style={{margin:5,marginright:5}} >
                    <Image source={require("./images/logo/babber1.jpg")} style={{height:200,width:360,borderRadius:15}}/>
                </View>
                <View style={{margin:5,marginright:5}} >
                    <Image source={require("./images/logo/banner2.jpg")} style={{height:200,width:360,borderRadius:15}}/>
                </View>
            </View>
        </ScrollView>
        
    )
}

export default SlideShow;