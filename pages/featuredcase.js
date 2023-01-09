import React, { useState } from "react";
import { ScrollView, View,Image, TouchableOpacity,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const FeaturedCase=()=>{
   
    
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View  style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl"}}>
                <TouchableOpacity>
                    <View style={{margin:5,marginright:5,borderWidth:2,borderRadius:15,borderColor:"#c9c9c9",width:200}} >
                        {/* <TouchableOpacity style={{position:"absolute",zIndex:1,margin:"2%"}} onPress={liked}>
                            <View >
                                {like}
                            </View>
                        </TouchableOpacity> */}
                        
                        <Image source={require("./images/logo/babber1.jpg")} style={{height:150,width:196,borderTopRightRadius:15,borderTopLeftRadius:15}}/>
                        <View>
                            <Text style={{margin:2,fontWeight:"bold",fontSize:15,textAlign:"center"}} numberOfLines={1}>Super saravana stores</Text>
                            <View style={{flexDirection:"row-reverse",justifyContent:"center"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            <Text style={{fontSize:15,fontStyle:"italic",textAlign:"auto",margin:5}} numberOfLines={1}>chinese,North Indian,Briyani</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{margin:5,marginright:5,borderWidth:2,borderRadius:15,borderColor:"#c9c9c9",width:200}} >
                        
                        
                        <Image source={require("./images/logo/babber1.jpg")} style={{height:150,width:196,borderTopRightRadius:15,borderTopLeftRadius:15}}/>
                        <View>
                            <Text style={{margin:2,fontWeight:"bold",fontSize:15,textAlign:"center"}} numberOfLines={1}>Super saravana stores</Text>
                            <View style={{flexDirection:"row-reverse",justifyContent:"center"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            <Text style={{fontSize:15,fontStyle:"italic",textAlign:"auto",margin:5}} numberOfLines={1}>chinese,North Indian,Briyani</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{margin:5,marginright:5,borderWidth:2,borderRadius:15,borderColor:"#c9c9c9",width:200}} >
                      
                        
                        <Image source={require("./images/logo/babber1.jpg")} style={{height:150,width:196,borderTopRightRadius:15,borderTopLeftRadius:15}}/>
                        <View>
                            <Text style={{margin:2,fontWeight:"bold",fontSize:15,textAlign:"center"}} numberOfLines={1}>Super saravana stores</Text>
                            <View style={{flexDirection:"row-reverse",justifyContent:"center"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            <Text style={{fontSize:15,fontStyle:"italic",textAlign:"auto",margin:5}} numberOfLines={1}>chinese,North Indian,Briyani</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{margin:5,marginright:5,borderWidth:2,borderRadius:15,borderColor:"#c9c9c9",width:200}} >
                       
                        
                        <Image source={require("./images/logo/babber1.jpg")} style={{height:150,width:196,borderTopRightRadius:15,borderTopLeftRadius:15}}/>
                        <View>
                            <Text style={{margin:2,fontWeight:"bold",fontSize:15,textAlign:"center"}} numberOfLines={1}>Super saravana stores</Text>
                            <View style={{flexDirection:"row-reverse",justifyContent:"center"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            <Text style={{fontSize:15,fontStyle:"italic",textAlign:"auto",margin:5}} numberOfLines={1}>chinese,North Indian,Briyani</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    )
}

export default FeaturedCase;