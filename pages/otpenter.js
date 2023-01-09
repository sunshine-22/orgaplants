
import { View,SafeAreaView,Image,Text, TextInput, TouchableOpacity, Alert} from "react-native";
import style from "./style";
import { useState,useEffect, useRef } from "react";
const OtpEnter=({route,navigation})=>{
    const [otptimer,settimer]=useState(30)
    const [sendnumber,setsendnumber]=useState("")
    const [otp1,setotp1]=useState("")
    const [otp2,setotp2]=useState("")
    const [otp3,setotp3]=useState("")
    const [otp4,setotp4]=useState("")
    const pin1=useRef("")
    const pin2=useRef("")
    const pin3=useRef("")
    const pin4=useRef("")
    useEffect(()=>{
        var countrycode=route.params.usermobile.slice(0,4)
        var invisible="*******"
        var laststr=route.params.usermobile.slice(11)
        const mobile=countrycode+invisible+laststr
        setsendnumber(mobile)
        let interval = setInterval(() => {
            settimer(prev => {
               if(prev === 1 || prev<0)
               {
                clearInterval(interval)
                Alert.alert("Oops!,","Otp Time out Please resend Otp!")
               } 
               return prev - 1
            })
         },1000)

    },[])
    const verifyotp=()=>{
        const otp=otp1+otp2+otp3+otp4
        console.log(otp)
        if(otp=="1234"){
            navigation.reset({index:0,routes:[{name:"Location"}]});
        }
        else{
            Alert.alert("Oops,!","You have entered wrong Otp,Please check...")
        }
    }
      
    return(
        <SafeAreaView>
            <View style={style.imagearea}>
                <Image source={require("./images/logo/logo.png")} style={style.logoimageotp} />
            </View>
            <View style={style.imagearea}>
                <Text style={{fontWeight:"bold",fontSize:20}}>OTP Verification</Text>
                <Text style={{marginTop:"3%",fontSize:20}}>Code has sent to {sendnumber}</Text>
            </View>
            <View style={{margin:"5%",flexDirection:"row"}}>
                <View style={{borderWidth:1,height:55,width:55,margin:"5%",borderRadius:13}}>
                    <TextInput style={{padding:15,fontWeight:"bold",fontSize:20}} keyboardType={"numeric"} maxLength={1} onChangeText={(text)=>{setotp1(text),pin2.current.focus();}} ref={pin1}></TextInput>
                </View>
                <View style={{borderWidth:1,height:55,width:55,margin:"5%",borderRadius:13}}>
                    <TextInput style={{padding:15,fontWeight:"bold",fontSize:20}} keyboardType={"numeric"} maxLength={1} onChangeText={(text)=>{setotp2(text),pin3.current.focus();}} ref={pin2}></TextInput>
                </View>
                <View style={{borderWidth:1,height:55,width:55,margin:"5%",borderRadius:13}}>
                    <TextInput style={{padding:15,fontWeight:"bold",fontSize:20}} keyboardType={"numeric"} maxLength={1} onChangeText={(text)=>{setotp3(text),pin4.current.focus();}} ref={pin3}></TextInput>
                </View>
                <View style={{borderWidth:1,height:55,width:55,margin:"5%",borderRadius:13}}>
                    <TextInput style={{padding:15,fontWeight:"bold",fontSize:20}} keyboardType={"default"} maxLength={1} onChangeText={(text)=>{setotp4(text);}} ref={pin4}></TextInput>
                </View>
            </View>
            <View style={{margin:"5%",flexDirection:"row",justifyContent:"center"}}>
                <TouchableOpacity>
                        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:17,color:"#fc6f4c"}}>Resend</Text>
                </TouchableOpacity>
               
                <Text style={{textAlign:"center",fontSize:17}}>  code in {otptimer} s</Text>
        
            </View>
            <View style={{margin:"1%",alignItems:"center"}}>
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={verifyotp}>
                    <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Verify & Proceed</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    )
}

export default OtpEnter;