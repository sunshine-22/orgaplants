import {React,useEffect,useState} from "react";
import { ScrollView, View ,Text, TouchableOpacity,Modal,TextInput,Image, SafeAreaView, Alert,ActivityIndicator} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SlideShow from "./slideshow";
import Showcase from "./showcase";
import FeaturedCase from "./featuredcase";
import Stores from "./stores";
import * as Locations from 'expo-location';
const Dashboard=({navigation,route})=>{
    const [user_fetch_data,setuserfetchdata]=useState(0)
    const [displaypage,setdisplaypage]=useState(false)
    const [textactivity,settextactivity]=useState("fetching Location")
    const [location, setLocation] = useState(null);
    const [usercity,setusercity]=useState(null)
    const [area,setarea]=useState(null)
    const [district,setdistrict]=useState(null)
    const [landmark,setlandmark]=useState(null)
    const [state,setstate]=useState(null)
    const [pincode,setpincode]=useState(null)
    const [isloading,setisloading]=useState(false)
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
            setmodalvisible(false)

        }
        else{
            Alert.alert("info","please fillout all the required fields")
            setmodalvisible(false)
        }
      
        
    }
    const selectcurrentlocation=async ()=>{
        setisloading(true)
        let { status } = await Locations.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("info",'Permission to access location was denied');
            return;
        }

        let location = await Locations.getCurrentPositionAsync({});
        fetch("http://192.168.1.104:8000/livelocation/",{
            method:"POST",
            mode:"no-cors",
            headers:{
                Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "latitude":location.coords.latitude,
                "longitude":location.coords.longitude,
                "userid":route.params.usernameid
            })
            }).then((response)=>response.json())
                .then((responseData)=>{
            if(responseData.message=="failed"){
                setisloading(false)
                Alert.alert("Info","Oops!something went wrong while fetching location try again!")
                setmodalvisible(false)
                
            }
            else{
                setisloading(false)
                setusercity(responseData)
                setmodalvisible(false)
                
               

            
                
        }})
    }
    useEffect(()=>{
        async function getlocation(){
            settextactivity("getting your location")
            let { status } = await Locations.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert("info",'Permission to access location was denied');
                return;
            }

            let location = await Locations.getCurrentPositionAsync({});
            setLocation(location);
                 fetch("http://192.168.1.104:8000/liveuser/",{
                    method:"POST",
                    mode:"no-cors",
                    headers:{
                        Accept: 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        "latitude":location.coords.latitude,
                        "longitude":location.coords.longitude,
                    })
                    }).then((response)=>response.json())
                    .then((responseData)=>{
                        setusercity(responseData)
                    if(responseData.message=="failed"){
                        setdisplaypage(true)
                       
                    }
                    else{
                        
                        setusercity(responseData)
                        settextactivity(responseData.area+", "+responseData.district+", "+responseData.state)
                        getuserdata();
                        
                    }
                })
        }
        function getuserdata(){
            fetch("http://192.168.1.104:8000/getuserdata/",{
                method:"POST",
                mode:"no-cors",
                headers:{
                    Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    _id:route.params.usernameid
                })
            }).then((response)=>response.json())
            .then((responseData)=>{
             
                settextactivity("almost Done")
                setuserfetchdata(responseData)
                setdisplaypage(true)
            })
    

        }
        getlocation();
    },[])
    const [modalvisible,setmodalvisible]=useState(false)
    return(
        <SafeAreaView style={style.backgroundcolor}>
           {displaypage &&(<View>
            <View style={{marginTop:"1%",marginLeft:"5%",marginRight:"5%",borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
                <View style={{marginTop:"1%",flexDirection:"row"}}>
                    <Ionicons name="location-outline" size={35} color="#fc6f4c" />
                    <TouchableOpacity onPress={()=>setmodalvisible(true)}>
                        <View>
                            <Text style={{fontWeight:"bold",fontSize:15}}>{usercity.landmark}<Ionicons name="chevron-down-outline" size={18} color="black" /></Text>
                            <Text style={{fontSize:10}}>{usercity.district},{usercity.state}, India</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={{flexDirection:"row",position:"absolute",right:0}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Cart",{delivery_location:usercity})}>
                            <View style={{margin:5,marginRight:15}}>
                                <Ionicons name="cart-outline" size={35} color="#838584" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate("Profile",{userdata:user_fetch_data})}>
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
                    <Image source={{uri:user_fetch_data.banner}} style={{width:"99%",height:70,borderRadius:15,margin:2}} />
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
                    <FeaturedCase navigation={navigation}></FeaturedCase>
                </View>
                <View style={{marginTop:"5%"}}>
                    <Text style={{fontWeight:"bold",fontSize:20}}>Partner Stores around you...</Text>
                    <Stores navigation={navigation} userlocation={usercity}></Stores>
                </View>
            </ScrollView>
            {/* location service of modal view */}
            <View style={{flex:1,backgroundColor:"white"}}>
                <Modal visible={modalvisible} animationType={"fade"}>
            <View style={{backgroundColor:"#ededed",flex:1}}>
                        <View style={{height:150,backgroundColor:"#252324"}} >
                            
                        </View>
                        <View style={{backgroundColor:"#252324"}}>
                            <View style={{backgroundColor:"#ededed",marginTop:5,borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:"row"}}>
                                <View style={{margin:"3%"}}>
                                    <Text style={{fontSize:20,fontWeight:"bold",color:"grey"}}>Enter Address Mannually</Text>
                                </View>
                                <TouchableOpacity style={{margin:"2%",marginLeft:"auto"}} onPress={()=>setmodalvisible(false)}>
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
                </View>
            {/* end location view modal */}
           </View>)}
           {!displaypage &&(<View style={{flex:1}}>

                <View style={{alignItems:"center",marginTop:"5%"}}>
                    <Image source={require("./images/gifs/location.gif")} style={{width:"100%",height:400}}/> 

                </View>
                <View>
                    <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold"}}>{textactivity}....</Text>
                </View>
           </View>)}
           
        </SafeAreaView>
    )
}

export default Dashboard;