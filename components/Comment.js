import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const Comment = () => {

    const widthConstant = Dimensions.get("window").width - 70
   const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    
    function handleSelect(){
        return(
           <SelectDropdown style={{width:"100%"}}
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
        )
    }

    function peoplesComments(){
        return(
            <View style={{
                marginVertical:10,
                flexDirection:'row',
                alignItems:"center",
                justifyContent:'space-between',
                padding:4,
                borderRadius:10,
                backgroundColor:"#E5E5E5"
            }}>
                <View style={{
                        backgroundColor:'gray',
                        width:50,
                        height:50,
                        borderRadius:100,
                        alignItems:"center",
                    }}>
                        <Text style={{color:"white",
                        marginTop:-5,
                            fontSize:40,
                            fontWeight:"bold",
                            textAlign:"center"
                            }}>R</Text>
                </View>
                
                <View style={{
                    width: widthConstant,
                    paddingHorizontal:10
                }}>
                    <Text style={{color:"gray", fontSize:16, fontWeight:"500", }}>Rico Mwangi</Text>
                    <Text>5 days ago</Text>
                    <Text>I like the product you have listed can you lower the prices abit</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{
            paddingHorizontal:10,
            paddingVertical:10,
            backgroundColor:'#F5F7FC'}}>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between"
            }}>
                <Text style={{color:"black",
                fontSize:16,
                fontWeight:"500"
                }}>Product listing comment</Text>
                <Text style={{
                    color:"tomato"
                }}>10</Text>
            </View>

            {/*Peoples Comments */}
            <View>
                {peoplesComments()}
                {peoplesComments()}
                {peoplesComments()}
            </View>
        <View style={{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        }}>
            <TouchableOpacity style={{
                    backgroundColor:'tomato',
                    width:"90%",
                    paddingHorizontal:10,
                    paddingVertical:15,
                    borderRadius:10
                }}>
                <Text style={{
                    textAlign:"center",
                    color:"white"
                }}>Add a new comment</Text>
            </TouchableOpacity>
        </View>
        <View style={{width:'100%'}}>
        {handleSelect()}
        </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Comment;
