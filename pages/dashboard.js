import {React,useState} from "react";
import { ScrollView, View ,Text, TouchableOpacity,Modal,TextInput,Image, SafeAreaView} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SlideShow from "./slideshow";
import Showcase from "./showcase";
import FeaturedCase from "./featuredcase";
import Stores from "./stores";
const Dashboard=({navigation})=>{
    const [modalvisible,setmodalvisible]=useState(false)
    return(
        <SafeAreaView style={style.backgroundcolor}>
           
            <View style={{marginTop:"1%",marginLeft:"5%",marginRight:"5%",borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
                <View style={{marginTop:"1%",flexDirection:"row"}}>
                    <Ionicons name="location-outline" size={35} color="#fc6f4c" />
                    <TouchableOpacity onPress={()=>setmodalvisible(true)}>
                        <View>
                            <Text style={{fontWeight:"bold",fontSize:15}}>Tamil Nadu,India<Ionicons name="chevron-down-outline" size={18} color="black" /></Text>
                            <Text style={{fontSize:10}}>Dharmapuri,Tamil Nadu, India</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={{flexDirection:"row",position:"absolute",right:0}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
                            <View style={{margin:5,marginRight:15}}>
                                <Ionicons name="cart-outline" size={35} color="#838584" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                            <View style={{margin:5,marginLeft:10}}>
                                <FontAwesome name="user-circle-o" size={35} color="#757575" />
                            </View>
                        </TouchableOpacity>
                        
                        
                    </View>
                </View>
               
            </View>
            <ScrollView style={{marginLeft:"2%",marginRight:"2%",marginTop:"3%"}} showsVerticalScrollIndicator={false}>
                <View style={{borderWidth:1,height:50,borderRadius:15,flexDirection:"row",borderColor:"#e3e3e3",backgroundColor:"#e3e3e3"}}>
                        
                    <View style={{padding:12}}>
                        <Ionicons name="search" size={24} color="#949494" />
                    </View>
                        
                    <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
                        <Text style={{padding:15,color:"#949494"}}>Search for 'Groceries..'</Text>
                    </TouchableOpacity>
                        
                </View>
                
                <View style={{marginTop:"5%",borderWidth:1,height:75,borderRadius:15,borderColor:"#f0f0f0",backgroundColor:"#f0f0f0",alignItems:"center"}}>
                    <Image source={require("./images/logo/offerbanner.jpg")} style={{width:"99%",height:70,borderRadius:15,margin:2}} />
                </View>
                <View style={{marginTop:"5%"}}>
                   <SlideShow></SlideShow>
                  
                </View>
                <View style={{marginTop:"5%"}}>
                    <Text style={{fontWeight:"bold",fontSize:20}}>Our Featured Categories</Text>
                    <Showcase navigation={navigation}></Showcase>
                </View>
                <View style={{marginTop:"5%"}}>
                    <Text style={{fontWeight:"bold",fontSize:20}}>Featured Stores..</Text>
                    <FeaturedCase></FeaturedCase>
                </View>
                <View style={{marginTop:"5%"}}>
                    <Text style={{fontWeight:"bold",fontSize:20}}>52 Partner Stores around you...</Text>
                    <Stores navigation={navigation}></Stores>
                </View>
            </ScrollView>
            {/* location service of modal view */}
                <View style={{flex:1,backgroundColor:"white"}}>
                    <Modal visible={modalvisible}  animationType="fade">
                        <View style={{margin:"5%"}}>
                            <TouchableOpacity onPress={()=>setmodalvisible(false)}>
                                <Ionicons name="arrow-back" size={45} color="black" />
                            </TouchableOpacity>
                            <View style={{marginTop:"5%"}}>
                                <Text style={{fontWeight:"bold",fontSize:18}}>Enter your Area or apartment name</Text>
                            </View>
                            <View style={{marginTop:"5%",borderWidth:1,height:50,borderRadius:15,flexDirection:"row"}}>
                                <View style={{padding:12}}>
                                    <Ionicons name="search" size={24} color="black" />
                                </View>
                            
                                <TextInput placeholder="Try Gandhinagar,Dharmapuri,etc.." style={{padding:12}}></TextInput>
                            </View>
                            <View style={{marginTop:"5%",flexDirection:"row"}}>
                                <View>
                                    <Ionicons name="navigate-circle-sharp" size={35} color="#fc6f4c" />
                                </View>
                                <TouchableOpacity style={{width:"90%",backgroundColor:"white",  borderColor:"white"}}>
                                    <Text style={{fontWeight:"bold",color:"#fc6f4c",marginLeft:"3%",paddingTop:5,fontSize:18}}>Use My current Location</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            {/* end location view modal */}
        </SafeAreaView>
    )
}

export default Dashboard;