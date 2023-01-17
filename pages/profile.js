import React from "react";
import { SafeAreaView, View,Image,Text, TouchableOpacity,Alert,Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile=({navigation,route})=>{
    
    const Logout=()=>{
        Alert.alert("Logout","Are you sure you want to logout",[
            {
                text:"cancel",
                onPress:()=>console.log("cancel"),
                style:"cancel"
            },
            { text: "OK", onPress: async() => {await AsyncStorage.removeItem("useridentity"),navigation.navigate("Home"),navigation.reset({index:0,routes:[{name:"Home"}]});
    
            },style:"destructive" }
        ])
       }
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#f2f2f2"}}>
            <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white",flexDirection:"row"}}>
                <View style={{width:250}}>
                    <Text style={{marginTop:"5%",marginLeft:"5%",fontSize:22,fontWeight:"bold"}}>{route.params.userdata.name}</Text>
                    <Text style={{fontSize:15,marginTop:"2%",marginLeft:"5%"}} numberOfLines={1}>{route.params.userdata.email}</Text>
                    <Text style={{fontSize:15,marginTop:"2%",marginLeft:"5%"}} numberOfLines={1}>{route.params.userdata._id}</Text>
                </View>
                <View style={{marginLeft:"auto"}}>
                    <Image source={require("./images/profile/profile.png")} style={{width:100,height:100}}></Image>
                </View>
            </View>
            <View style={{margin:"3%",height:100,borderRadius:10,flexDirection:"row",alignItems:"center",justifyContent:"center",alignContent:"center"}}>
                <TouchableOpacity onPress={()=>navigation.navigate("MyOrders")}>
                    <View style={{borderWidth:1,margin:"3%",width:95,backgroundColor:"white",borderColor:"white",borderRadius:10}}>
                        <View style={{alignItems:"center",margin:"3%"}}>
                            <Ionicons name="md-gift-outline" size={35} color="black" />
                            <Text style={{fontSize:15,marginTop:"5%",marginLeft:"5%",fontWeight:"bold"}}>Orders</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate("Address",{userid:route.params.userdata._id})}>
                    <View style={{borderWidth:1,margin:"3%",width:95,backgroundColor:"white",borderColor:"white",borderRadius:10}}>
                        <View style={{alignItems:"center",margin:"3%"}}>
                            <MaterialIcons name="payment" size={35} color="black" />
                            <Text style={{fontSize:15,marginTop:"5%",marginLeft:"5%",fontWeight:"bold"}}>Address</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Logout}>
                    <View style={{borderWidth:1,margin:"3%",width:95,backgroundColor:"white",borderColor:"white",borderRadius:10}}>
                        <View style={{alignItems:"center",margin:"3%"}}>
                            <MaterialIcons name="logout" size={35} color="black" />
                            <Text style={{fontSize:15,marginTop:"5%",marginLeft:"5%",fontWeight:"bold"}}>Logout</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{Linking.openURL("https://play.google.com/store/apps/details?id=com.Orgaplants")}}>
                <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white",flexDirection:"row",flexDirection:"row"}}>
                    <View style={{margin:"2%"}}>
                        <Ionicons name="star-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{fontSize:20,margin:"5%"}}>Your ratings</Text>  
                    </View>
                    <View style={{marginLeft:"auto",margin:"2%"}}>
                        <Ionicons name="arrow-forward" size={24} color="black" />
                    </View>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL("https://orgaplants.com/privacy/")}}>
                <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white",flexDirection:"row",flexDirection:"row"}}>
                    <View style={{margin:"2%"}}>
                        <Ionicons name="md-list" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{fontSize:20,margin:"5%"}}>Terms & Privacy</Text>  
                    </View>
                    <View style={{marginLeft:"auto",margin:"2%"}}>
                        <Ionicons name="arrow-forward" size={24} color="black" />
                    </View>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL("https://tawk.to/chat/634902f037898912e96e92bc/1gfaj6ver")}}>
                <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white",flexDirection:"row",flexDirection:"row"}}>
                    <View style={{margin:"2%"}}>
                        <MaterialIcons name="support-agent" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{fontSize:20,margin:"5%"}}>Contact Us</Text>  
                    </View>
                    <View style={{marginLeft:"auto",margin:"2%"}}>
                        <Ionicons name="arrow-forward" size={24} color="black" />
                    </View>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL("https://play.google.com/store/apps/details?id=com.Orgaplants")}}>
                <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white",flexDirection:"row",flexDirection:"row"}}>
                    <View style={{margin:"2%"}}>
                        <Ionicons name="md-share-social-outline" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{fontSize:20,margin:"5%"}}>Share App</Text>  
                    </View>
                    <View style={{marginLeft:"auto",margin:"2%"}}>
                        <Ionicons name="arrow-forward" size={24} color="black" />
                    </View>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL("https://mail.google.com/mail/u/0/#inbox")}}>
                <View style={{borderWidth:1,margin:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white",flexDirection:"row",flexDirection:"row"}}>
                    <View style={{margin:"2%"}}>
                        <MaterialIcons name="feedback" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{fontSize:20,margin:"5%"}}>Feed back</Text>  
                    </View>
                    <View style={{marginLeft:"auto",margin:"2%"}}>
                        <Ionicons name="arrow-forward" size={24} color="black" />
                    </View>
                </View>

            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Profile;