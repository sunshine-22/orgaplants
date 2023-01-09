import React from "react";
import { View,SafeAreaView,Text,Image, TouchableOpacity,Modal, TextInput,ScrollView,Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { Entypo } from '@expo/vector-icons';
import RadioForm from "react-native-simple-radio-button";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Cart=()=>{
    const [mannualaddress,setmannualaddress]=useState(false)
    const [paymentmode,setpaymentmode]=useState(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>Payment Options</Text></View>)
    const [paymentvisible,setpaymentvisible]=useState(false)
    const [paymenttype,setpaymenttype]=useState(null)
    const [googlepay,setgooglepay]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [paytm,setpaytm]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [phonepay,setphonepay]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [upi,setupi]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const [cod,setcod]=useState(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
    const selgooglepay=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setpaymenttype("googlepay")
        setpaytm(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setupi(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setcod(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>Google Pay</Text></View>)

    }
    const selpaytm=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymenttype("paytm")
        setpaytm(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setupi(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setcod(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>Paytm</Text></View>)
        
    }
    const selphonepe=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymenttype("phonepe")
        setpaytm(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setupi(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setcod(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>Phone Pay</Text></View>)
        
        
    }
    const selupi=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymenttype("upi")
        setpaytm(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setupi(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setcod(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>UPI Pay</Text></View>)
        
        
    }
    const selcod=()=>{
        setgooglepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setpaymenttype("cod")
        setpaytm(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setphonepay(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setupi(<MaterialCommunityIcons name="square-rounded-outline" size={24} color="black" />)
        setcod(<MaterialCommunityIcons name="square-rounded" size={24} color="orange" />)
        setpaymentmode(<View style={{alignItems:"center",margin:"2%"}}><Text style={{fontWeight:"bold",padding:5,fontSize:15,color:"#fc6f4c"}}>Cash on Delivery</Text></View>)
        
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
                    <Text style={{fontWeight:"bold",fontSize:13,}}>₹159.00</Text>
                    <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"15%"}}>₹159.00</Text>
                    <Text style={{fontWeight:"bold",fontSize:13,color:"grey",marginTop:"31%"}}>₹159.00</Text>
                </View>
            </View>
           
            <View style={{margin:"2%",flexDirection:"row"}}>
                <View style={{margin:"1%",width:200}}>
                    <Text style={{fontWeight:"bold",fontSize:18}}>Grand Total</Text>
                    
                </View>
                <View style={{margin:"1%"}}>
                    <Text style={{fontWeight:"bold",fontSize:18}}>₹159.0</Text>
                    
                </View>
            </View>
        </View>
    )
    return(
       <SafeAreaView style={{flex:1,backgroundColor:"#f2f2f2"}}>
            <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white"}}>
              <View style={{margin:"2%",flexDirection:"row"}}>
                <View>
                    <Ionicons name="location" size={30} color="#fc6f4c" />
                </View>
                <View style={{margin:"2%"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery at Home</Text>
                    <Text>Karpagam college of Engineering,</Text>
                    <Text>Mayelaripalayam,Coimbatore-641032</Text>
                    
                </View>
                <TouchableOpacity onPress={()=>setmannualaddress(true)}>
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
                <View style={{margin:"2%",backgroundColor:"white",borderRadius:10}}>
                    <View style={{margin:"3%"}}>
                        <Text style={{fontWeight:"bold",fontSize:20}}>Your Order</Text>
                    </View>
                    <View style={{margin:"2%",height:90,flexDirection:"row",borderBottomWidth:1,borderColor:"grey"}}>
                        <View style={{margin:"2%",width:"65%"}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Fried chicken burger with extra mionase</Text>
                            <Text style={{fontWeight:"bold",fontSize:15}}>₹159.0</Text>
                        </View>
                        <View>
                            <View style={{margin:"2%",height:30,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,marginTop:10}}>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="minus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                <View style={{width:30}}>
                                    <View style={{alignItems:"center"}}>
                                        <Text style={{fontWeight:"bold",fontSize:15,padding:5}}>3</Text>
                                    </View>
                                </View>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="plus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                
                            </View>
                            <View style={{margin:"2%"}}>
                                <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>₹159.0</Text>
                            </View>
                        </View>
                        
                         
                    </View>
                    <View style={{margin:"2%",height:90,flexDirection:"row",borderBottomWidth:1,borderColor:"grey"}}>
                        <View style={{margin:"2%",width:"65%"}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Fried chicken burger with extra mionase</Text>
                            <Text style={{fontWeight:"bold",fontSize:15}}>₹159.0</Text>
                        </View>
                        <View>
                            <View style={{margin:"2%",height:30,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,marginTop:10}}>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="minus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                <View style={{width:30}}>
                                    <View style={{alignItems:"center"}}>
                                        <Text style={{fontWeight:"bold",fontSize:15,padding:5}}>3</Text>
                                    </View>
                                </View>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="plus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                
                            </View>
                            <View style={{margin:"2%"}}>
                                <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>₹159.0</Text>
                            </View>
                        </View>
                        
                         
                    </View>
                    <View style={{margin:"2%",height:90,flexDirection:"row",borderBottomWidth:1,borderColor:"grey"}}>
                        <View style={{margin:"2%",width:"65%"}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Fried chicken burger with extra mionase</Text>
                            <Text style={{fontWeight:"bold",fontSize:15}}>₹159.0</Text>
                        </View>
                        <View>
                            <View style={{margin:"2%",height:30,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,marginTop:10}}>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="minus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                <View style={{width:30}}>
                                    <View style={{alignItems:"center"}}>
                                        <Text style={{fontWeight:"bold",fontSize:15,padding:5}}>3</Text>
                                    </View>
                                </View>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="plus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                
                            </View>
                            <View style={{margin:"2%"}}>
                                <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>₹159.0</Text>
                            </View>
                        </View>
                        
                         
                    </View>
                    <View style={{margin:"2%",height:90,flexDirection:"row",borderBottomWidth:1,borderColor:"grey"}}>
                        <View style={{margin:"2%",width:"65%"}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Fried chicken burger with extra mionase</Text>
                            <Text style={{fontWeight:"bold",fontSize:15}}>₹159.0</Text>
                        </View>
                        <View>
                            <View style={{margin:"2%",height:30,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,marginTop:10}}>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="minus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                <View style={{width:30}}>
                                    <View style={{alignItems:"center"}}>
                                        <Text style={{fontWeight:"bold",fontSize:15,padding:5}}>3</Text>
                                    </View>
                                </View>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="plus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                
                            </View>
                            <View style={{margin:"2%"}}>
                                <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>₹159.0</Text>
                            </View>
                        </View>
                        
                         
                    </View>
                    <View style={{margin:"2%",height:90,flexDirection:"row",borderBottomWidth:1,borderColor:"grey"}}>
                        <View style={{margin:"2%",width:"65%"}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Fried chicken burger with extra mionase</Text>
                            <Text style={{fontWeight:"bold",fontSize:15}}>₹159.0</Text>
                        </View>
                        <View>
                            <View style={{margin:"2%",height:30,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,marginTop:10}}>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="minus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                <View style={{width:30}}>
                                    <View style={{alignItems:"center"}}>
                                        <Text style={{fontWeight:"bold",fontSize:15,padding:5}}>3</Text>
                                    </View>
                                </View>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="plus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                
                            </View>
                            <View style={{margin:"2%"}}>
                                <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>₹159.0</Text>
                            </View>
                        </View>
                        
                         
                    </View>
                    <View style={{margin:"2%",height:90,flexDirection:"row",borderBottomWidth:1,borderColor:"grey"}}>
                        <View style={{margin:"2%",width:"65%"}}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Fried chicken burger with extra mionase</Text>
                            <Text style={{fontWeight:"bold",fontSize:15}}>₹159.0</Text>
                        </View>
                        <View>
                            <View style={{margin:"2%",height:30,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,marginTop:10}}>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="minus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                <View style={{width:30}}>
                                    <View style={{alignItems:"center"}}>
                                        <Text style={{fontWeight:"bold",fontSize:15,padding:5}}>3</Text>
                                    </View>
                                </View>
                                <View style={{width:30}}>
                                    <TouchableOpacity>
                                        <View style={{alignItems:"center",marginTop:5}}>
                                            <Entypo name="plus" size={20} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                
                            </View>
                            <View style={{margin:"2%"}}>
                                <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>₹159.0</Text>
                            </View>
                        </View>
                        
                         
                    </View>
                </View>
            </ScrollView>
           
            <View style={{flexDirection:"row",backgroundColor:"white",marginLeft:"2%",marginRight:"2%",borderRadius:10}}>
                <TouchableOpacity style={{margin:"3%",height:45,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,width:"40%"}} onPress={()=>{setpaymentvisible(true)}}>
                    {paymentmode}
                </TouchableOpacity>
                <TouchableOpacity style={{margin:"3%",height:45,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,width:170,backgroundColor:"red",width:"50%"}}>
                   
                    <View>
                        <Text style={{fontWeight:"bold",fontSize:15,padding:10,color:"white"}}>Add item-₹800.78</Text>
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
                                    <TextInput placeholder="Address Line 1" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}></TextInput>
                                </View>
                                <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10}}>
                                    <TextInput placeholder="Address Line 2" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}></TextInput>
                                </View>
                                <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10}}>
                                    <TextInput placeholder="Area" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}></TextInput>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10,width:"45%"}}>
                                        <TextInput placeholder="City" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}></TextInput>
                                    </View>
                                    <View style={{margin:"3%",borderWidth:1,height:40,borderRadius:10,width:"45%"}}>
                                    <TextInput placeholder="Pincode" placeholderTextColor={"grey"} style={{padding:10,fontWeight:"bold",fontSize:15}}></TextInput>
                                    </View>
                                </View>
                                <View style={{margin:"1%",alignItems:"center",marginTop:"5%"}}>
                                    <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,backgroundColor:"#fc6f4c",borderColor:"#fc6f4c"}}>
                                        <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"white"}}>Save and Add address</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{margin:"1%",alignItems:"center",marginTop:"5%"}}>
                                    <TouchableOpacity style={{borderWidth:1,width:"90%",height:50,borderRadius:13,borderColor:"#ededed"}} >
                                        <Text style={{textAlign:"center",paddingTop:12,fontWeight:"bold",color:"#fc6f4c"}}>Enable my Current Location</Text>
                                    </TouchableOpacity>
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