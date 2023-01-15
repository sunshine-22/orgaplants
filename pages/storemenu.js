import React, { useState } from "react";
import { SafeAreaView, View,Text, TouchableOpacity,Image, ScrollView,Modal,TextInput} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { Entypo } from '@expo/vector-icons';
const StoreMenu=({navigation,route})=>{
    console.log(route)
    const [orderdesc,setorderdesc]=useState(false)
    const [modalvisible,setmodalvisible]=useState(false)
    const Menu=(
        <View>
            <View style={{margin:"2%",height:150,flexDirection:"row"}}>
                <View style={{margin:"2%",width:200}}>
                    <Text style={{fontWeight:"bold",fontSize:15}}>Chocolate Truffled Cake (200gm)</Text>
                    <View style={{margin:5,height:20,width:100,flexDirection:"row"}}>
                        <Ionicons name="star" size={15} color="gold" />
                        <Ionicons name="star" size={15} color="gold" />
                        <Ionicons name="star" size={15} color="gold" />
                        <Ionicons name="star" size={15} color="gold" />
                        <Ionicons name="star" size={15} color="grey" />
                        <Text style={{fontWeight:"bold",color:"grey"}}>8 reviews</Text>
                    </View>
                    <Text style={{fontWeight:"bold",fontSize:15}}>₹800/-</Text>
                    <Text>customization available superfast delivery, fat reducer,milk product</Text>
                </View>
                <View style={{marginLeft:"auto"}}>
                    <View style={{width:120,margin:5,height:100,borderRadius:15}}>
                        <Image source={require("./images/stores/store.jpg")} style={{width:120,height:100,borderRadius:15}} />
                    </View>
                    <TouchableOpacity style={{borderWidth:1,height:30,margin:5,borderRadius:10,backgroundColor:"#f74862",borderColor:"#f74862"}} onPress={()=>setorderdesc(true)}>
                            <Text style={{padding:5,textAlign:"center",fontWeight:"bold",color:"white"}}>Add Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{margin:"2%",height:30}}>

            </View>
        </View>
    )
    return(
        <SafeAreaView>
            <View style={{margin:"3%",flexDirection:"row"}}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={34} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:"auto",flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>setmodalvisible(true)}>
                        <View style={{borderWidth:1,width:160,height:35,borderRadius:15,margin:7,flexDirection:"row",borderColor:"#cfd0d1"}}>
                            <View>
                                <Text style={{padding:10,fontWeight:"bold",color:"grey"}}>Search Menu</Text>
                            </View>
                            <View style={{padding:4,marginLeft:"auto"}}>
                                <Ionicons name="search-outline" size={24} color="orange" />
                            </View>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{marginLeft:5}}>
                            <Ionicons name="ios-list-circle-outline" size={45} color="#cfd0d1" />
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
            <ScrollView>
                <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white",flexDirection:"row"}}>
                        <View style={{width:250}}>
                            <Text style={{marginTop:"5%",marginLeft:"5%",fontSize:22,fontWeight:"bold"}}>{route.params.storeid.store_name}</Text>
                            <Text style={{fontSize:15,marginTop:"2%",marginLeft:"5%",color:"#bbbdbf",fontWeight:"bold"}} numberOfLines={1}>{route.params.storeid.store_nature}</Text>
                            <Text style={{fontSize:15,marginTop:"2%",marginLeft:"5%",color:"#bbbdbf",fontWeight:"bold"}} numberOfLines={1}>{route.params.storeid.store_location},India</Text>
                            <View>
                                <Text style={{fontSize:13,marginTop:"2%",marginLeft:"5%",fontWeight:"bold"}} numberOfLines={1}><AntDesign name="clockcircle" size={15} color="#f24c27" /> 4 hrs | Around 5km away</Text>
                            </View>
                        </View>
                        <View style={{marginLeft:"auto"}}>
                            <View style={{width:120,margin:5,height:100,borderRadius:15}}>
                                <Image source={require("./images/stores/store.jpg")} style={{width:120,height:100,borderRadius:15}} />
                            </View>
                        </View>
                </View>
                <View style={{margin:5,height:30}}>
                    <ScrollView horizontal={true}>
                        <View style={{borderWidth:1,width:90,margin:2,borderRadius:5,backgroundColor:"white",borderColor:"white",marginLeft:10}}>
                            <Text style={{padding:3,fontWeight:"bold",fontSize:12,textAlign:"center"}}>Best Seller</Text>
                        </View>
                        <View style={{borderWidth:1,width:90,margin:2,borderRadius:5,backgroundColor:"white",borderColor:"white",marginLeft:10}}>
                            <Text style={{padding:3,fontWeight:"bold",fontSize:12,textAlign:"center"}}>Organic</Text>
                        </View>
                        <View style={{borderWidth:1,width:90,margin:2,borderRadius:5,backgroundColor:"white",borderColor:"white",marginLeft:10}}>
                            <Text style={{padding:3,fontWeight:"bold",fontSize:12,textAlign:"center"}}>kitchens</Text>
                        </View>
                        <View style={{borderWidth:1,width:90,margin:2,borderRadius:5,backgroundColor:"white",borderColor:"white",marginLeft:10}}>
                            <Text style={{padding:3,fontWeight:"bold",fontSize:12,textAlign:"center"}}>Fruits</Text>
                        </View>
                        <View style={{borderWidth:1,width:90,margin:2,borderRadius:5,backgroundColor:"white",borderColor:"white",marginLeft:10}}>
                            <Text style={{padding:3,fontWeight:"bold",fontSize:12,textAlign:"center"}}>Vegetables</Text>
                        </View>
                    </ScrollView>

                </View>
                <View>
                    <View style={{margin:"3%",backgroundColor:"white",borderRadius:10}}>
                        <SimpleAccordion viewInside={Menu} title={"Recommented"} bannerStyle={{backgroundColor:"white",borderRadius:10}}/>
                    </View>
                    <View style={{margin:"3%",backgroundColor:"white",borderRadius:10}}>
                        <SimpleAccordion viewInside={Menu} title={"Kitchen's"} bannerStyle={{backgroundColor:"white",borderRadius:10}}/>
                    </View>
                    <View  style={{height:90}}>

                    </View>
                </View>
            </ScrollView>
            <View style={{flex:1}}>
                <Modal visible={orderdesc} animationType={"slide"} >
                    <View style={{backgroundColor:"#ededed",flex:1}}>
                        <TouchableOpacity style={{height:150,backgroundColor:"#252324"}} onPress={()=>setorderdesc(false)}>
                            <View style={{alignItems:"center",marginTop:"15%"}}>
                                <Ionicons name="close-circle" size={45} color="white" />
                            </View>
                        </TouchableOpacity>
                        <View style={{backgroundColor:"#252324"}}>
                            <View style={{backgroundColor:"#ededed",marginTop:5,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                <View style={{margin:"3%",borderRadius:10,backgroundColor:"white"}}>
                                    <Image source={require("./images/stores/store.jpg")} style={{height:200,borderRadius:10,width:"100%"}}></Image>
                                    <View style={{margin:"3%"}}>
                                        <Text style={{fontSize:20,fontWeight:"bold"}}>Chocolate tullfed cake</Text>
                                        <View style={{margin:5,height:20,width:100,flexDirection:"row"}}>
                                            <Ionicons name="star" size={15} color="gold" />
                                            <Ionicons name="star" size={15} color="gold" />
                                            <Ionicons name="star" size={15} color="gold" />
                                            <Ionicons name="star" size={15} color="gold" />
                                            <Ionicons name="star" size={15} color="grey" />
                                            <Text style={{fontWeight:"bold",color:"grey"}}>8 reviews</Text>
                                        </View>
                                        <Text style={{fontSize:15,fontWeight:"bold",color:"grey"}}>categoty Item</Text>
                                    </View>
                                </View>
                                <View style={{margin:"3%",borderRadius:10,backgroundColor:"white"}}>
                                    <View style={{flexDirection:"row"}}>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontSize:18,color:"grey"}}>KILO GRAM</Text>
                                            <Text style={{fontSize:15,fontWeight:"bold",color:"grey"}}>Select any 1 Option</Text>
                                        </View>
                                        <View style={{borderWidth:1,marginLeft:"auto",height:25,width:100,margin:"3%",backgroundColor:"red",borderRadius:10,borderColor:"red"}}>
                                            <Text style={{padding:5,textAlign:"center",fontWeight:"bold",color:"white"}}>Required</Text>
                                        </View>
                                    </View>
                                    <View style={{margin:"3%"}}>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontWeight:"bold"}}>Pack of 250 gm</Text>
                                        </View>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontWeight:"bold"}}>Pack of 500 gm</Text>
                                        </View>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontWeight:"bold"}}>Pack of 750 gm</Text>
                                        </View>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontWeight:"bold"}}>Pack of 1 kg</Text>
                                        </View>
                                    </View>
                                   
                                </View>
                            </View>
                        </View>
                        <View style={{borderWidth:1,height:200,backgroundColor:"white",borderColor:"white"}}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{margin:"3%",height:45,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10}}>
                                    <View style={{width:50}}>
                                        <TouchableOpacity>
                                            <View style={{alignItems:"center"}}>
                                                <Entypo name="minus" size={35} color="red" />
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{width:50}}>
                                        <View style={{alignItems:"center"}}>
                                            <Text style={{fontWeight:"bold",fontSize:20,padding:8}}>3</Text>
                                        </View>
                                    </View>
                                    <View style={{width:50}}>
                                        <TouchableOpacity>
                                            <View style={{alignItems:"center"}}>
                                                <Entypo name="plus" size={35} color="red" />
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                <View style={{margin:"3%",height:45,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,width:170,backgroundColor:"red"}}>
                                    <View>
                                        <Text style={{fontWeight:"bold",fontSize:15,padding:10,color:"white"}}>Add item-₹800.78</Text>
                                    </View>

                                </View>
                            </View>

                        </View>
                    </View>
                    
                </Modal>
            </View>
            {/* location service of modal view */}
            <View style={{flex:1,backgroundColor:"white"}}>
                    <Modal visible={modalvisible}  animationType="fade">
                        <View style={{margin:"5%",marginTop:"10%"}}>
                            <TouchableOpacity onPress={()=>setmodalvisible(false)}>
                                <Ionicons name="arrow-back" size={45} color="black" />
                            </TouchableOpacity>
                           
                            <View style={{marginTop:"5%",borderWidth:1,height:50,borderRadius:15,flexDirection:"row"}}>
                                <View style={{padding:12}}>
                                    <Ionicons name="search" size={24} color="black" />
                                </View>
                            
                                <TextInput placeholder="search within the menu" style={{padding:12}} placeholderTextColor="grey"></TextInput>
                            </View>
                            
                        </View>
                    </Modal>
                </View>
            {/* end location view modal */}
        </SafeAreaView>
        
    )
}

export default StoreMenu;