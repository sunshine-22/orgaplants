import React from "react";
import { useState } from "react";
import { View,ScrollView,Text,Image, TextInput, TouchableOpacity, Alert } from "react-native";
import style from "./style"
import {CountryPicker} from "react-native-country-codes-picker";
import Privacy from "./privacy"
const Home=({navigation})=>{
    const [placevalue,setplacevalue]=useState("Country")
    const [countryCode, setCountryCode] = useState('');
    const [show, setShow] = useState(false);
    const [mobilenumber,setmobilenumber]=useState('')
    const signin=()=>{
        if(countryCode!="" && mobilenumber!="" && mobilenumber.length==10){
            
            const number=countryCode+mobilenumber
            navigation.navigate("OtpEnter",{usermobile:number});
        }
        else{
            Alert.alert("Info","Please, Enter the mobile number to proceed...")
        }

    }
        
    return(
        <ScrollView style={style.backgroundcolor}>
            <View style={style.imagearea}>
                <Image source={require("./images/logo/logo.jpg")} style={style.logoimage}/>
            </View>
            <View style={style.loginscreentext}>
                <Text style={style.logintext}>Shop locally from trusted and reliable stores...</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",margin:"3%"}}>
                <View style={{flex: 1, height: 2, backgroundColor: '#c9c7c7'}} />
                <View>
                    <Text style={{width: 130, textAlign: 'center',fontWeight:"bold",color:"#c9c7c7"}}>Login or Sign up</Text>
                </View>
                <View style={{flex: 1, height: 2, backgroundColor: '#c9c7c7'}} />
            </View>
            <View style={{margin:"5%",flexDirection:"row"}}>
                <TouchableOpacity style={{width:"25%",height:45,}} onPress={()=>setShow(true)}>
                    <View >
                        <Text style={{borderWidth:1,padding:10,borderRadius:13,color:"#c9c7c7",fontWeight:"bold"}}>{placevalue}</Text>
                    </View>
                </TouchableOpacity>
                
                <View style={{width:"75%",height:45,marginLeft:"2%"}}>
                    <TextInput placeholder={"Enter Phone Number"}  style={{borderWidth:1,padding:10,borderRadius:13,fontWeight:"bold",fontSize:15}} maxLength={10}  keyboardType={"phone-pad"} onChangeText={setmobilenumber}></TextInput>
                </View>
            </View>
            <CountryPicker show={show} pickerButtonOnPress={(item) => {setCountryCode(item.dial_code);setShow(false);setplacevalue(item.dial_code);}}/>
            <View style={{margin:"1%",alignItems:"center"}}>
                <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={signin}>
                    <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Send OTP</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:"center",marginTop:"15%"}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Privacy")}}>
                    <Text style={{fontWeight:"bold",color:"#737874",textAlign:"center"}}>Privacy policy Plants chain private limited</Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    )
}

export default Home;