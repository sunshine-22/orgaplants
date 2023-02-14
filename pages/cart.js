import React, { useEffect } from "react";
import { View,SafeAreaView,Text,Image, TouchableOpacity,Modal, TextInput,ScrollView,Button,Alert,ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { Entypo } from '@expo/vector-icons';
import RadioForm from "react-native-simple-radio-button";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Locations from 'expo-location';
const Cart=({route,navigation})=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const [usercity,setusercity]=useState(route.params.delivery_location)
    const [cart_data,set_cart_data]=useState(0)
    const [isloading,setisloading]=useState(false)
    const [isloading1,setisloading1]=useState(false)
    const [mannualaddress,setmannualaddress]=useState(false)
    const [paymentmode,setpaymentmode]=useState(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>Payment Options</Text></View>)
    const [paymentvisible,setpaymentvisible]=useState(false)
    const [paymenttype,setpaymenttype]=useState(null)
    const [googlepay,setgooglepay]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [paytm,setpaytm]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [phonepay,setphonepay]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [upi,setupi]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [cod,setcod]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [area,setarea]=useState(null)
    const [district,setdistrict]=useState(null)
    const [landmark,setlandmark]=useState(null)
    const [state,setstate]=useState(null)
    const [pincode,setpincode]=useState(null)
    const [cart_total,set_cart_total]=useState(0)
    const [cartdelete_stat,set_cart_delete_stat]=useState(false)
    var display_cart=[]
    const checkout=async()=>{
        setisloading1(true)
        if(cart_data.length>0 && paymenttype!=null){
            let userdata= await AsyncStorage.getItem("useridentity");
            fetch('http://52.66.225.96/orderid/',{
                method:"POST",
                mode:"no-cors",
                headers:{
                    Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    userid:userdata,
                    orderdate:dd + '/'+ mm + '/'  + yyyy,
                    delivery_date:(parseInt(dd)+1) + '/'+ mm + '/'  + yyyy,
                    paymode:paymenttype,
                    cart_total:cart_total+30,
                    billaddress:usercity

                })
            }).then((response)=>response.json())
            .then((responseData)=>{
                if(responseData.message=='success'){
                    setisloading1(false)
                    console.log(responseData)
                    // navigation.navigate('Checkout',{billaddress:usercity,paymenttype:paymenttype,cart_total:cart_total,orderid:responseData.orderid,userid:userdata})
                    navigation.reset({
                        index: 0,
                        routes: [{name:"Checkout",params:{billaddress:usercity,paymenttype:paymenttype,cart_total:cart_total,orderid:responseData.orderid,userid:userdata}}],
                      })
                   

                }
                else{
                    setisloading1(false)
                    Alert.alert("info","sorry! something went wrong!")
                }
            })
            
        }
        else{
            setisloading1(false)
            Alert.alert("info","Please Add something to checkout! or select Payment Method")
        }
    }
    const delete_cart=(deleteid)=>{
        Alert.alert("Info","Are you sure you want to Delete",[
            {
                text:"cancel",
                onPress:()=>console.log("cancel"),
                style:"cancel"
            },
            { text: "OK", onPress: async() => {
                fetch("http://52.66.225.96/delete_cart/",{
                    method:"POST",
                    mode:"no-cors",
                    headers:{
                        Accept: 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        delete_address:deleteid
                    })
                }).then((response)=>response.json())
                .then((responseData)=>{
                    if(responseData.message!="success"){
                        Alert.alert("info","something went wrong!")
                    }
                    set_cart_delete_stat(true)
                })
    
            },style:"destructive" }
        ])
    }
    useEffect(()=>{
       async function get_cart_data(){
        let userdata=await AsyncStorage.getItem("useridentity");
           fetch("http://52.66.225.96/get_cart/",{
            method:"POST",
            mode:"no-cors",
            headers:{
                Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userid:userdata
            })
           }).then((response)=>response.json())
           .then((responseData)=>{
            if(responseData.message=="failed"){
                Alert.alert("Info","Sorry something went wrong!")
            }
            else{
                set_cart_data(responseData.message)
                set_cart_total(responseData.total)

            }
           })

        }
        get_cart_data();
    },[cartdelete_stat])
    const selectcurrentlocation=async ()=>{
        setisloading(true)
        let { status } = await Locations.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("info",'Permission to access location was denied');
            return;
        }

        let location = await Locations.getCurrentPositionAsync({});
        let userdata= await AsyncStorage.getItem("useridentity");
        fetch("http://52.66.225.96/livelocation/",{
            method:"POST",
            mode:"no-cors",
            headers:{
                Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "latitude":location.coords.latitude,
                "longitude":location.coords.longitude,
                "userid":userdata
            })
            }).then((response)=>response.json())
                .then((responseData)=>{
            if(responseData.message=="failed"){
                setisloading(false)
                Alert.alert("Info","Oops!something went wrong while fetching location try again!")
                setmannualaddress(false)
                
            }
            else{
                setisloading(false)
                setusercity(responseData)
                setmannualaddress(false)
                
               

            
                
        }})
    }
    const saveaddress=()=>{
        if(area!=null && district!=null && landmark!=null && state!=null && pincode!=null){
            const mannual_address={
                area:area,
                district:district,
                landmark:landmark,
                state:state,
                pincode:pincode
            }
            setusercity(mannual_address)
            setmannualaddress(false)

        }
        else{
            Alert.alert("info","please fillout all the required fields")
            setmannualaddress(false)
        }
      
        
    }
    const selgooglepay=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setpaymenttype("Google_Pay")
        setpaytm(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setupi(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setcod(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"blue",textAlign:"center"}}>Pay Using G-Pay </Text></View>)

    }
    const selpaytm=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymenttype("Paytm")
        setpaytm(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setupi(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setcod(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#1fdbf0"}}>Pay Using Paytm</Text></View>)
        
    }
    const selphonepe=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymenttype("PhonePe")
        setpaytm(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setupi(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setcod(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#8e11f5"}}>Pay By PhonePe</Text></View>)
        
        
    }
    const selupi=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymenttype("UPI")
        setpaytm(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setupi(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setcod(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>Pay using UPI</Text></View>)
        
        
    }
    const selcod=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymenttype("Cash on Delivery")
        setpaytm(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setupi(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setcod(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>Pay Using COD</Text></View>)
        
    }
    const Billing=(
        <View>
            <View style={{margin:"2%",flexDirection:"row"}}>
                <View style={{margin:"1%",width:200}}>
                    <Text style={{fontWeight:"bold",fontSize:13}}>Item Total</Text>
                    <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"5%"}}>Delivery Charges for 15km</Text>
                    <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"7%"}}>Govt.taxes and Store Charges</Text>
                </View>
                <View style={{margin:"1%"}}>
                    <Text style={{fontWeight:"bold",fontSize:13,}}>₹{cart_total}/-</Text>
                    <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"15%"}}>₹15.00</Text>
                    <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"31%"}}>₹15.00</Text>
                </View>
            </View>
           
            <View style={{margin:"2%",flexDirection:"row"}}>
                <View style={{margin:"1%",width:200}}>
                    <Text style={{fontWeight:"bold",fontSize:18}}>Grand Total</Text>
                    
                </View>
                <View style={{margin:"1%"}}>
                    <Text style={{fontWeight:"bold",fontSize:18}}>₹{cart_total+30}</Text>
                    
                </View>
            </View>
        </View>
    )
    for(let i=0;i<cart_data.length;i++){
        
        display_cart.push(
            <View key={i}>
                    
                    <View style={{margin:"2%",height:90,flexDirection:"row",borderBottomWidth:1,borderColor:"grey"}}>
                        <View style={{margin:"2%",width:"65%"}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>{cart_data[i].Product_Name}({cart_data[i].Quantity})</Text>
                            <Text style={{fontSize:15,marginTop:3}}>Quantity: {cart_data[i].count}</Text>
                            <Text style={{fontSize:15,marginTop:3}}>Brand: {cart_data[i].Brand}</Text>
                        </View>
                        <View>
                            <View style={{margin:"2%",height:30,borderColor:"red",borderWidth:1,borderRadius:10,marginTop:7,backgroundColor:"red"}}>
                                <View style={{width:70}}>
                                    <TouchableOpacity onPress={()=>{delete_cart(cart_data[i]._id)}}>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Text style={{fontWeight:"bold",fontSize:15,color:"white"}}>Remove</Text>
                                        </View>
                                    </TouchableOpacity>
                                
                                </View>

                               
                                
                            </View>
                            <View style={{margin:"2%"}}>
                                <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>₹{cart_data[i].total_price}/-</Text>
                            </View>
                        </View>
                        
                         
                    </View>
                    
                </View>
            
        )
    }
    return(
       <SafeAreaView style={{flex:1,backgroundColor:"#f2f2f2"}}>
            <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white"}}>
              <View style={{margin:"2%",flexDirection:"row"}}>
                <View>
                    <Ionicons name="location" size={30} color="#fc6f4c" />
                </View>
                <View style={{margin:"2%"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery at Home</Text>
                    <Text>{usercity.area},{usercity.landmark}</Text>
                    <Text>{usercity.district}-{usercity.pincode}</Text>
                    
                </View>
                <TouchableOpacity onPress={()=>setmannualaddress(true)} style={{marginLeft:"auto"}}>
                    <Text style={{fontWeight:"bold",color:"#fc6f4c"}}>Change</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
                <View style={{margin:"2%",backgroundColor:"white",borderRadius:10}}>
                    <SimpleAccordion viewInside={Billing} title={"Billing Summary"} bannerStyle={{backgroundColor:"white",borderRadius:10}}/>
                </View>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{margin:"2%",backgroundColor:"white",borderRadius:10}} >
                    <View style={{margin:"3%"}}>
                        <Text style={{fontWeight:"bold",fontSize:20}}>Your Order</Text>
                    </View>
                {display_cart}
            </View>   
            </ScrollView>
           
            <View style={{flexDirection:"row",backgroundColor:"white",marginLeft:"2%",marginRight:"2%",borderRadius:10}}>
                <TouchableOpacity style={{margin:"3%",height:45,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,width:"40%"}} onPress={()=>{setpaymentvisible(true)}}>
                    {paymentmode}
                </TouchableOpacity>
                <TouchableOpacity style={{margin:"3%",height:45,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,width:170,backgroundColor:"red",width:"50%"}} onPress={checkout}>
                {isloading1 && <ActivityIndicator size={"large"} color="white"/>}
                    <View>
                        <Text style={{fontWeight:"bold",fontSize:15,padding:10,color:"white"}}>Checkout item-₹{cart_total+30}</Text>
                    </View>

       

                </TouchableOpacity>
                

            </View>
            <Modal visible={mannualaddress} animationType={"fade"}>
            <View style={{backgroundColor:"#ededed",flex:1}}>
                        <View style={{height:150,backgroundColor:"#252324"}} >
                            
                        </View>
                        <View style={{backgroundColor:"#252324"}}>
                            <View style={{backgroundColor:"#ededed",marginTop:5,borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:"row"}}>
                                <View style={{margin:"3%"}}>
                                    <Text style={{fontSize:20,fontWeight:"bold",color:"grey"}}>Enter Address Mannually</Text>
                                </View>
                                <TouchableOpacity style={{margin:"2%",marginLeft:"auto"}} onPress={()=>setmannualaddress(false)}>
                                    <Ionicons name="close" size={34} color="#fc6f4c" />
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:"#ededed"}}>
                                <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10}}>
                                    <TextInput placeholder="Area" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}onChangeText={(text)=>setarea(text)}></TextInput>
                                </View>
                                <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10}}>
                                    <TextInput placeholder="landmark" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}} onChangeText={(text)=>setlandmark(text)}></TextInput>
                                </View>
                                <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10}}>
                                    <TextInput placeholder="City" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}onChangeText={(text)=>setdistrict(text)}></TextInput>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10,width:"45%"}}>
                                        <TextInput placeholder="State" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}} onChangeText={(text)=>setstate(text)}></TextInput>
                                    </View>
                                    <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10,width:"45%"}}>
                                    <TextInput placeholder="Pincode" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}} onChangeText={(text)=>setpincode(text)} keyboardType={"numeric"} maxLength={6}></TextInput>
                                    </View>
                                </View>
                                <View style={{margin:"1%",alignItems:"center",marginTop:"5%"}}>
                                    <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={saveaddress}>
                                        <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Save and Add address</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{margin:"1%",alignItems:"center",marginTop:"5%"}}>
                                    <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,borderColor:"#ededed"}} onPress={selectcurrentlocation}>
                                        <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"#fc6f4c"}}>Enable my Current Location</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginTop:"3%"}}>
                                {isloading && <ActivityIndicator size={"large"} color="orange"/>}
                                </View>
                            </View>
                        </View>
                        
                    </View>
            </Modal>
            {/* payment mode select modal */}
            <Modal visible={paymentvisible} hasBackdrop={false}>
                <View style={{margin:"5%",flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>setpaymentvisible(false)} style={{marginTop:"6%"}}>
                        <Ionicons name="arrow-back" size={45} color="black" />
                    </TouchableOpacity>
                    <View style={{marginTop:"10%"}}>
                        <Text style={{fontWeight:"bold",fontSize:20,marginLeft:10}}>Payment</Text>
                    </View>
                </View>
                <View style={{margin:"5%",borderWidth:1,borderRadius:10,height:500,backgroundColor:"white",borderColor:"white"}}>
                    <View>
                        <Text style={{fontSize:20,fontWeight:"bold",color:"grey"}}>Recommented Methods</Text>
                    </View>
                    <View style={{marginTop:"5%",borderRadius:10,flexDirection:"row",height:70}}>
                        
                        <View style={{margin:"3%",width:50,borderRadius:10}}>
                            <Image source={require("./images/profile/gpay.png")} style={{width:50,borderRadius:10,height:50}} />
                        </View>
                        <View style={{marginTop:"6%"}}>
                            <Text style={{fontSize:20,}}>Google Pay</Text>
                        </View>
                        <TouchableOpacity style={{marginLeft:"auto",marginTop:"6%",marginRight:"2%"}} onPress={selgooglepay}>
                            <View>
                                {googlepay}
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{marginTop:"5%",borderRadius:10,flexDirection:"row",height:70}}>
                        
                        <View style={{margin:"3%",width:50,borderRadius:10}}>
                            <Image source={require("./images/profile/paytm.png")} style={{width:50,borderRadius:10,height:50}} />
                        </View>
                        <View style={{marginTop:"6%"}}>
                            <Text style={{fontSize:20,}}>Paytm</Text>
                        </View>
                        <TouchableOpacity style={{marginLeft:"auto",marginTop:"6%",marginRight:"2%"}} onPress={selpaytm}>
                            <View>
                                {paytm}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:"5%",borderRadius:10,flexDirection:"row",height:70}}>
                        
                        <View style={{margin:"3%",width:50,borderRadius:10}}>
                            <Image source={require("./images/profile/phonepe.png")} style={{width:50,borderRadius:10,height:50}} />
                        </View>
                        <View style={{marginTop:"6%"}}>
                            <Text style={{fontSize:20,}}>Phone Pay</Text>
                        </View>
                        <TouchableOpacity style={{marginLeft:"auto",marginTop:"6%",marginRight:"2%"}} onPress={selphonepe}>
                            <View>
                                {phonepay}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:"5%",borderRadius:10,flexDirection:"row",height:70}}>
                        
                        <View style={{margin:"3%",width:50,borderRadius:10}}>
                            <Image source={require("./images/profile/upi.png")} style={{width:50,borderRadius:10,height:50}} />
                        </View>
                        <View style={{marginTop:"6%"}}>
                            <Text style={{fontSize:20,}}>UPI</Text>
                        </View>
                        <TouchableOpacity style={{marginLeft:"auto",marginTop:"6%",marginRight:"2%"}}  onPress={selupi}>
                            <View>
                               {upi}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:"5%",borderRadius:10,flexDirection:"row",height:70}}>
                        
                        <View style={{margin:"3%",width:50,borderRadius:10}}>
                            <Image source={require("./images/profile/cash.png")} style={{width:50,borderRadius:10,height:50}} />
                        </View>
                        <View style={{marginTop:"6%"}}>
                            <Text style={{fontSize:20,}}>Cash on Delivery</Text>
                        </View>
                        <TouchableOpacity style={{marginLeft:"auto",marginTop:"6%",marginRight:"2%"}} onPress={selcod}>
                            <View>
                                {cod}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin:"1%",alignItems:"center",marginTop:"5%"}}>
                        <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}} onPress={()=>setpaymentvisible(false)}>
                            <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Proceed to Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* end payment mode select modal */}
       </SafeAreaView>
    )
}

export default Cart;