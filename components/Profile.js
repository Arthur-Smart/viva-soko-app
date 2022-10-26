import React from 'react';
import {View, StyleSheet,Image, Text, TouchableOpacity} from 'react-native';

const Profile = () => {

    function connectToOwner(){
        return(
            <View style={{
                backgroundColor:'#F5F7FC',
                paddingVertical:20,
                alignItems:'center'
            }} >
            <Text style={{
                color:"tomato",
                fontSize:16,
                fontWeight:'bold'
            }}>
            Icon 0707070711
            </Text>
                <TouchableOpacity style={{
                    backgroundColor:'tomato',
                    width:"90%",
                    paddingHorizontal:10,
                    paddingVertical:15,
                    borderRadius:10
                }}>
                    <Text style={{
                        color:"white",
                        textAlign:"center"
                    }}>
                    Contact Seller | Make an Offer
                    </Text>
                </TouchableOpacity>
            </View>    
        )
    }

    return (
        <View style={{paddingHorizontal:10,
            paddingVertical:10,
            backgroundColor:'#F5F7FC'}}>
            <View style={{
                display:'flex',
                flexDirection:'row'}}>
                <View style={{width:100,
                    height:100,
                    overflow:'hidden',
                    borderRadius:10}}>
                    <Image
                    source={require('../assets/image1.jpg')}
                    resizeMode='cover'
                    style={{width:"100%", height:"100%"}}/>
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>icon Amurey, B</Text>
                    <Text style={{color:"gray"}}>Posting for 2+ days</Text>
                    <Text style={{color:"tomato"}}>View profile</Text>
                </View>
            </View>
                {connectToOwner()}
            <View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
