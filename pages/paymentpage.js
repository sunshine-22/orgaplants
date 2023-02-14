import React, { useEffect, useRef, useState } from "react";
import { View,SafeAreaView,Text,Image, TouchableOpacity,Modal, TextInput,ScrollView,Button,Alert,ActivityIndicator,BackHandler } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { Entypo } from '@expo/vector-icons';
import RadioForm from "react-native-simple-radio-button";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import WebView from "react-native-webview";

const Paymentpage=({navigation,route})=>{
    const link=route.params.link
    const [goback,setgoback]=useState(false);
    const webref=useRef(null);
    const gotodash=async ()=>{
        
        let userdata= await AsyncStorage.getItem("useridentity");
        navigation.reset({index:0,routes:[{name:"Dashboard",params:{userdata}}]})

    }
    useEffect(() => {
        const backAction = () => {
            try{
                webref.current.goBack();
                return true;
            }
            catch(err){
                
                return false;

            }
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    return(
        <View style={{flex:1}}>
            <View style={{height:40,backgroundColor:"#fca258"}}>
           
            </View>
            <View style={{backgroundColor:"#fca258",flexDirection:"row"}}>
                <TouchableOpacity style={{margin:"2%",borderRadius:50,marginLeft:"5%"}} onPress={()=>{gotodash()}}>
                    <AntDesign name="home" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{margin:"2%",marginLeft:"auto",marginRight:"5%"}} onPress={()=>{webref.current.reload()}}>
                    <Feather name="refresh-ccw" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <WebView source={{uri:route.params.link}} automaticallyAdjustContentInsets={true} javaScriptEnabled={true} domStorageEnabled={true} startInLoadingState={true} onNavigationStateChange={(navState) => {setgoback( navState.canGoBack)}} ref={webref}></WebView>
         
        </View>
    )
}


export default Paymentpage;