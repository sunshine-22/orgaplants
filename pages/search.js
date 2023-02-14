import React, { useState } from "react";
import { View ,TextInput, TouchableOpacity} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import SearchableDropdown from 'react-native-searchable-dropdown'; 
const Search=({navigation})=>{
    const items = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'Fruits' },
        { id: 2, name: 'Vegetables' },
        { id: 3, name: 'Greens' },
        { id: 4, name: 'Grocery' },
        { id: 5, name: 'Honey' },
        { id: 6, name: 'Nuts' },
        { id: 7, name: 'Shakes' },
        { id: 8, name: 'Chocolates' },
        { id: 9, name: 'Electronics' },
        { id: 10, name: 'Diary' },
        { id: 11, name: 'Medicines' },
      ];
      const [selected,setselected]=useState("")
      
    return(
        <View style={style.backgroundcolor}>
            <View style={{margin:"5%",marginTop:"10%"}}>
                <View style={{marginTop:"5%",borderWidth:1,height:50,borderRadius:15,flexDirection:"row",borderColor:"white"}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <View style={{padding:12}}>
                            <Ionicons name="chevron-back-sharp" size={25} color="grey" />
                        </View>
                
                    </TouchableOpacity>
                    <View style={{height:500}}>
                        <SearchableDropdown onTextChange={(text) => {setselected(text)}} onItemSelect={(item) => {setselected(item.name),navigation.navigate("FeaturedStore",{name:item.name})}}containerStyle={{ padding: 1, width:290}} textInputStyle={{with:"100%",padding: 12,borderWidth: 1,borderColor: '#ccc',backgroundColor: '#FAF7F6',height:47,borderRadius:15}} itemStyle={{padding: 10,marginTop: 2,}} itemTextStyle={{color: '#222',}}itemsContainerStyle={{maxHeight: '80%',}} items={items} placeholder="Search for categories..."resetValue={false}underlineColorAndroid="transparent" />
                    </View>
                    
                </View>
                
            </View>
            
        </View>
    )
}

export default Search;