import React from "react";
import { TouchableOpacity, View,Image,Text, ScrollView } from "react-native";

const Showcase=({navigation})=>{
    return(
        <ScrollView>
            <View style={{flex:1}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/fruits.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Fruits</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/vegetables.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Vegetables</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/greens.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Greens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/grocery.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Grocery</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/honey.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Honey</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/meat.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Meat</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/nuts.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Nuts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/shakes.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Shakes</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/chocolates.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Chocolates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/electronics.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Electronics</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/dairy.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Dairy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore")}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/medicines.jpg")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Medicines</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            

        </ScrollView>
    )
}

export default Showcase;