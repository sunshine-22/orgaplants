import React, { useEffect, useState } from "react";
import { SafeAreaView, View,Text, TouchableOpacity,Image, ScrollView,Modal,TextInput, Alert,ActivityIndicator} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from "./style";
const StoreMenu=({navigation,route})=>{
    const [store_found,set_Storefound]=useState(false)
    const [orderdesc,setorderdesc]=useState(false)
    const [modalvisible,setmodalvisible]=useState(false)
    const [storedata,setstoredata]=useState(0)
    const [temp_cart_storage,settemp_cart_storage]=useState({})
    const [productcount,setproductcount]=useState(1)
    const [producttotal,setproducttotal]=useState(1)
    const [product_inc_value,setproduct_inc_value]=useState(0)
    const [isloading,setisloading]=useState(false)
    const [user,setuser]=useState(null)
    var displayrecomentas=[]
   
    useEffect(()=>{
       function get_store_details(){
            fetch("http://52.66.225.96/go_to_store/",{
                method:"POST",
                mode:"no-cors",
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    _id:route.params.storeid._id,
                    google_sheet:route.params.storeid.store_sheet_id
                })
            }).then((response)=>response.json())
            .then(async (responseData)=>{
                if(responseData.message=="failed"){
                    Alert.alert("Info","sorry something went wrong")
                }
                else{
                    
                    setstoredata(responseData.message);
                    set_Storefound(true)
                    let userdata= await AsyncStorage.getItem("useridentity");
                    setuser(userdata)

                }
                
        
                
            })
        }
        get_store_details();

    },[])
    const more_data=async(productdata)=>{
        var displayalter=[]
        for(let i=0;i<productdata.length;i++){
            
            displayalter.push(
                <View key={i}>
                    <View style={{margin:"2%",height:150,flexDirection:"row"}}>
                        <View style={{margin:"2%",width:200}}>
                            <Text style={{fontWeight:"bold",fontSize:15}}>{productdata[i].Product_Name}({productdata[i].Quantity})</Text>
                            <View style={{margin:5,height:20,width:100,flexDirection:"row"}}>
                                <Ionicons name="star" size={15} color="gold" />
                                <Ionicons name="star" size={15} color="gold" />
                                <Ionicons name="star" size={15} color="gold" />
                                <Ionicons name="star" size={15} color="gold" />
                                <Ionicons name="star" size={15} color="grey" />
                                <Text style={{fontWeight:"bold",color:"grey"}}>{productdata[i].review} reviews</Text>
                            </View>
                            <Text style={{fontWeight:"bold",fontSize:15}}>{productdata[i].Price}/- <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',marginLeft:4}}>Rs./{productdata[i].Original_price}</Text></Text>
                            <Text>{productdata[i].aboutproduct}</Text>
                        </View>
                        <View style={{marginLeft:"auto"}}>
                            <View style={{width:120,margin:5,height:100,borderRadius:15}}>
                                <Image source={{uri:productdata[i].Image}} style={{width:120,height:100,borderRadius:15}} />
                            </View>
                            <TouchableOpacity style={{borderWidth:1,height:30,margin:5,borderRadius:10,backgroundColor:"#f74862",borderColor:"#f74862"}} onPress={()=>{temp_cartstorege_initialize(productdata[i])}}>
                                    <Text style={{padding:5,textAlign:"center",fontWeight:"bold",color:"white"}}>Add Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            )


        }

        return displayalter;
       }
    
    
        for(let i=0;i<storedata.length;i++){
            const productdata=storedata[i].data
            
            const displaymode=more_data(productdata)
            
                
            displayrecomentas.push(
    
                <View style={{margin:"3%",backgroundColor:"white",borderRadius:10}} key={i}>
                    <SimpleAccordion viewInside={(
                        <View>
        
                        {displaymode._z}
                            
                        </View>
                    )} title={storedata[i].name} bannerStyle={{backgroundColor:"white",borderRadius:10}}/>
                </View>
        
            )
                
         
            
        }
        const temp_cartstorege_initialize=(cartproduct)=>{
            setproductcount(1)
            setproducttotal(1)
            setproduct_inc_value(0)
            settemp_cart_storage(cartproduct)
            let pricegot=cartproduct.Price
            pricegot=pricegot.replace("₹","")
            setproducttotal(parseInt(pricegot))
            setproduct_inc_value(parseInt(pricegot))
            setorderdesc(true)
            

        }
        const increment=()=>{
            
            setproductcount(productcount+1)
            setproducttotal(producttotal+product_inc_value)
          

        }
        const decrement=()=>{
            if(productcount>1){
                setproductcount(productcount-1)
                setproducttotal(producttotal-product_inc_value)

            }

        }
        const generatecart=()=>{
            setisloading(true)
            const add_cart=temp_cart_storage
            add_cart.count=productcount
            add_cart.total_price=producttotal
            add_cart.user_key=user
            add_cart.expired=false
            fetch("http://52.66.225.96/add_cart/",{
                method:"POST",
                mode:"no-cors",
                headers:{
                    Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    "cart_content":add_cart
                })
            }).then((response)=>response.json())
            .then((responseData)=>{
                if(responseData.message=="success"){
                    setorderdesc(false)
                    setisloading(false)
                }
                else{
                    Alert.alert("info","sorry! item not added to cart")
                    setorderdesc(false)
                    setisloading(false)

                }

            })
            
        }
   
    return(
        <SafeAreaView >
            <View style={{margin:"3%",flexDirection:"row"}}>
                {/* <View>
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
                </View> */}
                
            </View>
            <ScrollView>
                <View style={{borderWidth:1,marginLeft:"3%",marginright:"3%",borderRadius:10,backgroundColor:"white",borderColor:"white",flexDirection:"row"}}>
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
                                <Image source={{uri:route.params.storeid.store_image}} style={{width:120,height:100,borderRadius:15}} />
                            </View>
                        </View>
                </View>
                {/* <View style={{margin:5,height:30}}>
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

                </View> */}
                {!store_found &&(
                    <View style={{flex:1}}>
                        <View style={{alignItems:"center"}}>
                            <Image source={require("./images/gifs/orange.gif")} style={{width:"92%",height:500,borderRadius:10}} />
                        </View>
                    </View>
                )}
                {store_found &&(
                    <View>
                    
                        {displayrecomentas}
                        <View  style={{height:90}}>

                        </View>
                    </View>
                )}
                
            </ScrollView>
            <View style={{flex:1}}>
                <Modal visible={orderdesc} animationType={"slide"} >
                    <View style={{backgroundColor:"#ededed",flex:1}}>
                        <TouchableOpacity style={{height:100,backgroundColor:"#252324"}} onPress={()=>setorderdesc(false)}>
                            <View style={{alignItems:"center",marginTop:"10%"}}>
                                <Ionicons name="close-circle" size={45} color="white" />
                            </View>
                        </TouchableOpacity>
                        <ScrollView style={{backgroundColor:"#252324"}}>
                            <View style={{backgroundColor:"#ededed",marginTop:5,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                <View style={{margin:"3%",borderRadius:10,backgroundColor:"white"}}>
                                    <Image source={{uri:temp_cart_storage.Image}} style={{height:200,borderRadius:10,width:"100%"}}></Image>
                                    <View style={{margin:"3%"}}>
                                        <Text style={{fontSize:20,fontWeight:"bold"}}>{temp_cart_storage.Product_Name}({temp_cart_storage.Quantity})</Text>
                                        <View style={{margin:5,height:20,width:100,flexDirection:"row"}}>
                                            <Ionicons name="star" size={15} color="gold" />
                                            <Ionicons name="star" size={15} color="gold" />
                                            <Ionicons name="star" size={15} color="gold" />
                                            <Ionicons name="star" size={15} color="gold" />
                                            <Ionicons name="star" size={15} color="grey" />
                                            <Text style={{fontWeight:"bold",color:"grey"}}>{temp_cart_storage.review} reviews</Text>
                                        </View>
                                        <Text style={{fontSize:15,fontWeight:"bold",color:"grey"}}>Rs.{temp_cart_storage.Price}/-</Text>
                                    </View>
                                </View>
                                <View style={{margin:"3%",borderRadius:10,backgroundColor:"white"}}>
                                    <View style={{flexDirection:"row"}}>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontSize:18,color:"grey"}}>Product Description</Text>
                                            <Text style={{fontSize:15,fontWeight:"bold",color:"grey"}}>{temp_cart_storage.aboutproduct}</Text>
                                        </View>
                                        {/* <View style={{borderWidth:1,marginLeft:"auto",height:25,width:100,margin:"3%",backgroundColor:"red",borderRadius:10,borderColor:"red"}}>
                                            <Text style={{padding:5,textAlign:"center",fontWeight:"bold",color:"white"}}>Required</Text>
                                        </View> */}
                                    </View>
                                    <View style={{margin:"3%"}}>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontWeight:"bold"}}>Organic:    <Text style={{marginLeft:10}}>{temp_cart_storage.Organic}</Text></Text>
                                        </View>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontWeight:"bold"}}>Original Price : <Text>{temp_cart_storage.Original_price}</Text></Text>
                                        </View>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontWeight:"bold"}}>Product Brand: <Text>{temp_cart_storage.Brand}</Text> </Text>
                                        </View>
                                        <View style={{margin:"3%"}}>
                                            <Text style={{fontWeight:"bold"}}>Discount:    <Text>{temp_cart_storage.Discount}</Text></Text>
                                        </View>
                                        
                                    </View>
                                   
                                </View>
                            </View>
                        </ScrollView>
                        <View style={{borderWidth:1,height:70,backgroundColor:"white",borderColor:"white",margin:"2%",borderRadius:10}}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{margin:"3%",height:45,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10}}>
                                    <View style={{width:50}}>
                                        <TouchableOpacity onPress={decrement}>
                                            <View style={{alignItems:"center"}}>
                                                <Entypo name="minus" size={35} color="red" />
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{width:50}}>
                                        <View style={{alignItems:"center"}}>
                                            <Text style={{fontWeight:"bold",fontSize:20,padding:8}}>{productcount}</Text>
                                        </View>
                                    </View>
                                    <View style={{width:50}}>
                                        <TouchableOpacity onPress={increment}>
                                            <View style={{alignItems:"center"}}>
                                                <Entypo name="plus" size={35} color="red" />
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                <TouchableOpacity style={{margin:"3%",height:45,flexDirection:"row",borderColor:"red",borderWidth:1,borderRadius:10,width:170,backgroundColor:"red",marginLeft:"auto"}} onPress={generatecart}>
                                {isloading && <ActivityIndicator size={"large"} color="white"/>}
                                    <View>
                                        <Text style={{fontWeight:"bold",fontSize:15,padding:10,color:"white"}}>Add item-₹{producttotal}</Text>
                                    </View>

                                </TouchableOpacity>
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
                                <TouchableOpacity onPress={()=>{setmodalvisible(false)}}>
                                <View style={{padding:12}}>
                                    <Ionicons name="search" size={24} color="black" />
                                </View>
                                </TouchableOpacity>
                               
                            
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