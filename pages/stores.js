import React from "react";
import { SafeAreaView, View,Image,TouchableOpacity,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const Stores=({navigation})=>{
    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("StoreMenu")}>
                    <View style={{flexDirection:"row",margin:5,flex:1}} >
                        <Image source={require("./images/products/fruits.jpg")} style={{width:150,height:150,borderRadius:10}} />
                        <View style={{marginLeft:10,justifyContent:"center",flex:1}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>New Taj Resturant</Text>
                            {/* <View style={{flexDirection:"row",marginTop:10}}>
                                {star}{nonstar}
                                <Text style={{margin:2,fontSize:15}}>({vegetable[i].totalbuy})</Text>
                            </View> */}
                            <View style={{flexDirection:"row"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            
                            <Text style={{fontSize:15,fontStyle:"italic",}} numberOfLines={5}>chinese,North Indian,Briyani,Dharmapuri Bus stand 0.9km,korean,itlian</Text>
                            {/* <Text style={{fontSize:15,fontStyle:"italic",}}>Sold by:Orga Plants</Text> */}
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("StoreMenu")}>
                    <View style={{flexDirection:"row",margin:5,flex:1}} >
                        <Image source={require("./images/products/fruits.jpg")} style={{width:150,height:150,borderRadius:10}} />
                        <View style={{marginLeft:10,justifyContent:"center",flex:1}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>New Taj Resturant</Text>
                            {/* <View style={{flexDirection:"row",marginTop:10}}>
                                {star}{nonstar}
                                <Text style={{margin:2,fontSize:15}}>({vegetable[i].totalbuy})</Text>
                            </View> */}
                            <View style={{flexDirection:"row"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            
                            <Text style={{fontSize:15,fontStyle:"italic",}} numberOfLines={5}>chinese,North Indian,Briyani,Dharmapuri Bus stand 0.9km,korean,itlian</Text>
                            {/* <Text style={{fontSize:15,fontStyle:"italic",}}>Sold by:Orga Plants</Text> */}
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("StoreMenu")}>
                    <View style={{flexDirection:"row",margin:5,flex:1}} >
                        <Image source={require("./images/products/fruits.jpg")} style={{width:150,height:150,borderRadius:10}} />
                        <View style={{marginLeft:10,justifyContent:"center",flex:1}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>New Taj Resturant</Text>
                            {/* <View style={{flexDirection:"row",marginTop:10}}>
                                {star}{nonstar}
                                <Text style={{margin:2,fontSize:15}}>({vegetable[i].totalbuy})</Text>
                            </View> */}
                            <View style={{flexDirection:"row"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            
                            <Text style={{fontSize:15,fontStyle:"italic",}} numberOfLines={5}>chinese,North Indian,Briyani,Dharmapuri Bus stand 0.9km,korean,itlian</Text>
                            {/* <Text style={{fontSize:15,fontStyle:"italic",}}>Sold by:Orga Plants</Text> */}
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("StoreMenu")}>
                    <View style={{flexDirection:"row",margin:5,flex:1}} >
                        <Image source={require("./images/products/fruits.jpg")} style={{width:150,height:150,borderRadius:10}} />
                        <View style={{marginLeft:10,justifyContent:"center",flex:1}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>New Taj Resturant</Text>
                            {/* <View style={{flexDirection:"row",marginTop:10}}>
                                {star}{nonstar}
                                <Text style={{margin:2,fontSize:15}}>({vegetable[i].totalbuy})</Text>
                            </View> */}
                            <View style={{flexDirection:"row"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            
                            <Text style={{fontSize:15,fontStyle:"italic",}} numberOfLines={5}>chinese,North Indian,Briyani,Dharmapuri Bus stand 0.9km,korean,itlian</Text>
                            {/* <Text style={{fontSize:15,fontStyle:"italic",}}>Sold by:Orga Plants</Text> */}
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("StoreMenu")}>
                    <View style={{flexDirection:"row",margin:5,flex:1}} >
                        <Image source={require("./images/products/fruits.jpg")} style={{width:150,height:150,borderRadius:10}} />
                        <View style={{marginLeft:10,justifyContent:"center",flex:1}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>New Taj Resturant</Text>
                            {/* <View style={{flexDirection:"row",marginTop:10}}>
                                {star}{nonstar}
                                <Text style={{margin:2,fontSize:15}}>({vegetable[i].totalbuy})</Text>
                            </View> */}
                            <View style={{flexDirection:"row"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            
                            <Text style={{fontSize:15,fontStyle:"italic",}} numberOfLines={5}>chinese,North Indian,Briyani,Dharmapuri Bus stand 0.9km,korean,itlian</Text>
                            {/* <Text style={{fontSize:15,fontStyle:"italic",}}>Sold by:Orga Plants</Text> */}
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("StoreMenu")}>
                    <View style={{flexDirection:"row",margin:5,flex:1}} >
                        <Image source={require("./images/products/fruits.jpg")} style={{width:150,height:150,borderRadius:10}} />
                        <View style={{marginLeft:10,justifyContent:"center",flex:1}}>
                            <Text style={{fontSize:17,fontWeight:"bold"}}>New Taj Resturant</Text>
                            {/* <View style={{flexDirection:"row",marginTop:10}}>
                                {star}{nonstar}
                                <Text style={{margin:2,fontSize:15}}>({vegetable[i].totalbuy})</Text>
                            </View> */}
                            <View style={{flexDirection:"row"}}>
                                <View style={{marginTop:2}}>
                                    <Ionicons name="star" size={15} color="green" />
                                </View>
                               
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>4.0</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>(1k+)</Text>
                                <Text style={{fontSize:15,fontWeight:"bold",marginLeft:4}}>.20 mins</Text>
                            </View>
                            
                            <Text style={{fontSize:15,fontStyle:"italic",}} numberOfLines={5}>chinese,North Indian,Briyani,Dharmapuri Bus stand 0.9km,korean,itlian</Text>
                            {/* <Text style={{fontSize:15,fontStyle:"italic",}}>Sold by:Orga Plants</Text> */}
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Stores;