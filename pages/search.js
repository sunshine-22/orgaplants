import React from "react";
import { View ,TextInput, TouchableOpacity} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
const Search=({navigation})=>{

    return(
        <View style={style.backgroundcolor}>
            <View style={{margin:"5%",marginTop:"10%"}}>
                <View style={{marginTop:"5%",borderWidth:1,height:50,borderRadius:15,flexDirection:"row",borderColor:"grey"}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <View style={{padding:12}}>
                            <Ionicons name="chevron-back-sharp" size={25} color="grey" />
                        </View>
                
                    </TouchableOpacity>
                    
                    <TextInput placeholder="Search for 'Groceries..'" style={{padding:12}}></TextInput>
                </View>
            </View>
            
        </View>
    )
}

export default Search;