import React from "react";
import { TouchableOpacity, View,Image,Text, ScrollView } from "react-native";

const Showcase=({navigation})=>{
    return(
        <ScrollView>
            <View style={{flex:1,alignItems:"center"}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Fruits"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/fruits.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Fruits</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Vegetables"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/vegetables.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Vegetables</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Greens"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/greens.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Greens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Grocery"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/grocery.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Grocery</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Honey"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/honey.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Honey</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Meat"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/meat.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Meat</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Nuts"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/nuts.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Nuts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Shakes"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/shakes.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Shakes</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Chocolates"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/chocolates.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Chocolates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Electronics"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/electronics.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Electronics</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Dairy"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/dairy.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Dairy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:"2%"}} onPress={()=>navigation.navigate("FeaturedStore",{name:"Medicines"})}>
                        <View style={{borderRadius:50}}>
                            <Image source={require("./images/products/medicines.webp")} style={{width:75,height:75,borderRadius:50,padding:10}}></Image>
                            
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Medicines</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            

        </ScrollView>
    )
}

export default Showcase;