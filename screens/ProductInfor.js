import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View, StyleSheet,Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Profile from '../components/Profile';
import Comment from '../components/Comment';
import BottomNavigation from '../components/BottomNavigation';

const ProductInfor = ({route, navigation}) => {
    const {data} = route.params

    function handleInfo(){
        return(
             <View style={{display:'flex', flexDirection:'row',}}>
                    <Text style={{backgroundColor:'tomato',
                        paddingHorizontal:10,
                        borderRadius:4,
                        paddingVertical:7,
                        color:'white',
                        fontWeight:'bold'
                     }}>
                     {data.date}
                     </Text>

                    <Text 
                        style={{backgroundColor:'tomato',
                        paddingHorizontal:10,
                        borderRadius:4,
                        paddingVertical:7,
                        color:'white',
                        fontWeight:'bold',
                        marginHorizontal:4
                     }}>
                     5 hits
                     </Text>
                    <Text
                        style={{backgroundColor:'gray',
                        paddingHorizontal:10,
                        borderRadius:4,
                        paddingVertical:7,
                        color:'white',
                        fontWeight:'bold',
                        marginHorizontal:4
                        }}
                    >
                    ID #36
                    </Text>
                  </View>
        )
    }

    return (
        <SafeAreaView style={{paddingVertical:10, flex:1}}>
            <ScrollView>
                <View style={{paddingHorizontal:10,
                        flexDirection:"row",
                        justifyContent:"space-between"}}>
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Hello, Rico 👋</Text>
                        <Text>{data.category}</Text>
                        <Text>{data.title}, {data.location}</Text>
                        <Text style={{fontSize:18, fontWeight:"600"}}>$ 299.99</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{
                        width:40,
                        height:40,
                        borderRadius:10,
                        backgroundColor:"gray",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                        <Image source={require('../assets/back-arrow.png')} resizeMode="cover" style={{
                            width:35,
                            height:35
                        }}/>
                    </TouchableOpacity>
                </View>

                <View style={{paddingHorizontal:10}} >
                    <Image source={data.img}
                    style={styles.imgContainer}
                    resizeMode="cover"
                    />
                </View>

                <View style={{paddingHorizontal:10}}>
                <View>
                    {handleInfo()}
                </View>
                 
                  <View style={{marginVertical:15}}>
                    <Text style={{color:'gray', fontWeight:'bold', fontSize:20}}>Description</Text>
                <Text>{data.description}</Text> 
                  </View>
                </View>

                {/*Advert owner Profile*/}
                <Profile/>

                {/*Peoples comment on the product*/}
                <Comment/>
                               
            </ScrollView>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imgContainer:{
        marginVertical:10,
        borderRadius:7,
        width:"100%",
        height:250,
    }
})

export default ProductInfor;
