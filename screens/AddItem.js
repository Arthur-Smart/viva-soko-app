import React, {useState} from 'react';
import {View,Text, StyleSheet, ScrollView,Image, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'

const AddItem = () => {
    
    const navigation = useNavigation(); 
    const [upload, setUpload] = useState(null)

    const handleUpload = async() =>{
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(permissionResult.granted===false){
            alert('Camera access is required')
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
       
        allowsEditing: true,
        aspect: [4, 3],
        base64:true,
    })

    if (result.cancelled === true){
        return;
    }

    let base64Image = `data:image/jpg;base64,${result.base64}`

    setUpload(base64Image)
    console.log(upload)    
    }

    function handleCategory(){
        return(
            <View style={styles.category}>
                <View>
                    <Text style={{
                        backgroundColor:"tomato",
                        color:"white",                    
                        paddingVertical:10,
                        paddingHorizontal:10,
                        fontSize:20,
                        fontWeight:"bold",
                    }}>
                        Category
                    </Text>
                </View>
                <View style={{
                    marginTop:20,
                    paddingHorizontal:10,                
                    paddingVertical:10
                }}>
                    <Text style={{
                        fontSize:16,
                        color:"#A6A39E",
                        fontWeight:"600"
                        }}>Select best-matching category *</Text>
                    <TextInput placeholder='Category' style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }}></TextInput>
                </View>
            </View>
        )
    }

    function handleLocation(){
        return(
        <View style={{...styles.category, marginTop:10}}>
                <View>
                    <Text style={{
                        backgroundColor:"tomato",
                        color:"white",                   
                        paddingVertical:10,
                        paddingHorizontal:10,
                        fontSize:20,
                        fontWeight:"bold",
                    }}>
                        Location
                    </Text>
                </View>
                <View style={{
                    marginTop:20,
                    paddingHorizontal:10,                
                    paddingVertical:10
                }}>
                    <Text style={{
                        fontSize:16,
                        color:"#A6A39E",
                        fontWeight:"600"
                        }}>Where is your item located *</Text>
                    <TextInput placeholder='Category' style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }}></TextInput>
                </View>
                <View style={{width:"100%",  paddingHorizontal:10,}}>
                    <View>
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>City Area</Text>
                        <TextInput  style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }}></TextInput>
                    </View>
                    <View>
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>Address</Text>
                        <TextInput  style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }}></TextInput>
                    </View>
                    <View>
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>Zip</Text>
                        <TextInput  style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }}></TextInput>
                    </View>
                </View>
            </View>
        )
    }


    function handleAbout(){
        return(
            <View style={{...styles.category, marginTop:10}}>
                <View>
                    <Text style={{
                        backgroundColor:"tomato",
                        color:"white",                    
                        paddingVertical:10,
                        paddingHorizontal:10,
                        fontSize:20,
                        fontWeight:"bold",
                    }}>
                        About you
                    </Text>
                </View>
                
                <View style={{width:"100%",  paddingTop:20, paddingHorizontal:10,}}>
                    <View>
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>Your Name</Text>
                        <TextInput  style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }} defaultValue='rico'></TextInput>
                    </View>
                    <View>
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>Mobile Phone</Text>
                        <TextInput  style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }} defaultValue='0713612141'></TextInput>
                    </View>
                    <View>
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>Email</Text>
                        <TextInput  style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }} defaultValue= 'amalgamateimages@gmail.com'></TextInput>
                    </View>
                    <Text style={{marginTop:10,
                        fontSize:12,
                        fontWeight:"bold"
                    }}>
                        You can update your data in <Text style={{color:"tomato"}}>Your Profile</Text> section
                    </Text>
                </View>
            </View>
        )
    }

    function handlePrice(){
        return(
            <View style={{...styles.category, marginTop:10}}>
                <View>
                    <Text style={{
                        backgroundColor:"tomato",
                        color:"white",                    
                        paddingVertical:10,
                        paddingHorizontal:10,
                        fontSize:20,
                        fontWeight:"bold",
                    }}>
                        Price
                    </Text>
                </View>
                
                <View style={{width:"100%",  paddingTop:20, paddingHorizontal:10,}}>
                    <View>
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>Your Name</Text>
                        <TextInput  style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }}></TextInput>
                    </View>
                    <View>
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>Mobile Phone</Text>
                            <TextInput  style={{
                                width:"100%",
                                borderWidth:1,
                                borderColor:"#D3D3D3",
                                paddingVertical:10,
                                borderRadius:6,
                                paddingHorizontal:10,
                                marginTop:10
                        }} ></TextInput>
                    </View>
                    <View >
                        <Text style={{
                            color:"#BAB6B2",
                            fontWeight:"bold"
                            }}>Email</Text>
                            <View style={{flexDirection:"row"}}>
                                <TextInput  style={{
                                    width:"30%",
                                    borderWidth:1,
                                    borderColor:"#D3D3D3",
                                    paddingVertical:10,
                                    borderBottomLeftRadius:6,
                                    borderTopLeftRadius:6,
                                    paddingHorizontal:10,
                                    marginTop:10,
                                    backgroundColor:"#BAB6B2"
                                    }}
                                    placeholder='USD($)'
                                    >
                                </TextInput>
                                <TextInput  style={{
                                    width:"70%",
                                    borderWidth:1,
                                    borderColor:"#D3D3D3",
                                    paddingVertical:10,
                                    borderBottomRightRadius:6,
                                    borderTopRightRadius:6,
                                    paddingHorizontal:10,
                                    marginTop:10
                                    }}>
                                </TextInput>
                    </View>
                        
                    </View>

                    <Text style={{textAlign:"center", marginVertical:10, fontWeight:"bold", color:"#565656"}}>Or</Text>

                    {/*Donation/Trade In */}
                    <View style={{width:"100%", flexDirection:"row"}}>
                        <TouchableOpacity style={{
                            width:"50%",
                            backgroundColor:"#BAB6B2",
                            paddingHorizontal:10,
                            borderBottomLeftRadius:6,
                            borderTopLeftRadius:6,
                            borderRightColor:"#A6A39E",
                            borderRightWidth:1,
                            paddingVertical:18,
                        }}>
                            <Text style={{textAlign:"center", fontWeight:"bold", color:"#565656"}}>Donation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width:"50%",
                            backgroundColor:"#BAB6B2",
                            paddingHorizontal:10,
                            borderBottomRightRadius:6,
                            borderTopRightRadius:6,
                            borderLeftColor:"#A6A39E",
                            borderLeftWidth:1,
                            paddingVertical:18
                        }}>
                            <Text style={{textAlign:"center", fontWeight:"bold", color:"#565656"}}>Trade In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function handleDescription(){
        return(
        <View style={{...styles.category, marginTop:10}}>
                <View>
                    <Text style={{
                        backgroundColor:"tomato",
                        color:"white",                    
                        paddingVertical:10,
                        paddingHorizontal:10,
                        fontSize:20,
                        fontWeight:"bold",
                    }}>
                        Description
                    </Text>
                </View>
                <View style={{
                    marginTop:7,
                    paddingHorizontal:10,                
                    paddingVertical:10
                }}>

                    <Text style={{
                        width:67,
                        paddingHorizontal:10,
                        paddingVertical:8,
                        backgroundColor:"tomato",
                        borderRadius:7,
                        color:"white",
                        fontWeight:"bold",
                        marginBottom:10
                    }}>English</Text>

                    <Text style={{
                        fontSize:16,
                        color:"#A6A39E",
                        fontWeight:"600"
                        }}>Title *</Text>
                    <TextInput placeholder='Category' style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }}></TextInput>
                    <Text style={{
                        fontSize:16,
                        color:"#A6A39E",
                        fontWeight:"600",
                        marginTop:10
                        }}>Description *</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={10}
                        style={{
                        width:"100%",
                        borderWidth:1,
                        borderColor:"#D3D3D3",
                        paddingVertical:10,
                        borderRadius:6,
                        paddingHorizontal:10,
                        marginTop:10
                    }}></TextInput>
                </View>
            </View> 
        )
    }

    function handleUploadPhoto(){
        return(
            <View style={{...styles.category, marginTop:10}}>
                <View>
                    <Text style={{
                        backgroundColor:"tomato",
                        color:"white",                    
                        paddingVertical:10,
                        paddingHorizontal:10,
                        fontSize:20,
                        fontWeight:"bold",
                    }}>
                    Photo
                    </Text>
                </View>
                <View style={{
                    marginTop:7,
                    width:"100%",
                    paddingHorizontal:10,                
                    paddingVertical:10,
                    }}>
                    <Text>You can upload up to 6 pictures per listing</Text>
                    <Text style={{fontSize:16, color:"#3a3a3a", fontWeight:"900"}}>Click to upload Images</Text>
                    <View style={{width:"100%", alignItems:"center"}}>
                        <TouchableOpacity onPress={() => handleUpload()} style={styles.uploadBtn}>

                        <View style={{width:75,
                            height:75,
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:50}}>
                            <Image source={require("../assets/add-icon.png")} style={{width:170,marginRight:10, height:170}} resizeMode="cover"/>
                        </View>
                            
                        </TouchableOpacity>
                        <View style={{
                            width:"98%",
                            height:250,
                            borderRadius:10,
                            overflow:"hidden"
                            }}>
                            <Image source={require("../assets/image6.jpg")} resizeMode="cover" style={{width:"100%", height:"100%"}}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{backgroundColor:'#F5F7FC', flex:1}}>
            <ScrollView>
                <View style={{
                    paddingHorizontal:20,
                    flexDirection:"row",
                    paddingVertical:15,
                    justifyContent:"space-between"
                    }}>
                    <View>
                        <Text style={{fontSize:25, fontWeight:"bold"}}>Hello Rico, 👋</Text>
                        <Text style={{fontSize:15, fontWeight:"500"}}>You can Publish a new listing</Text>                        
                        <Text>Fill in all the fields below to create a new list</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
                        <Image source={require('../assets/back-arrow.png')} resizeMode="cover" style={{
                                width:35,
                                height:35
                            }}/>
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:10, paddingBottom:10}}>
                    {handleCategory()}
                    {handleLocation()}
                    {handleAbout()}
                    {handlePrice()}
                    {handleDescription()}
                    {handleUploadPhoto()}

                    <TouchableOpacity style={{
                        backgroundColor:"tomato",
                        paddingHorizontal:10,
                        paddingVertical:15,
                        marginTop:10,
                        borderRadius:7,

                        }}>
                    <Text style={{textAlign:"center", color:"white", fontWeight:"800"}}>Publish item</Text>
                </TouchableOpacity>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    category:{
        width:"100%",
        borderWidth:1,
        borderRadius:10,
        borderColor:"#D3D3D3",
        overflow:"hidden",
        paddingBottom:10
    },
    btn:{
        width:40,
        height:40,
        borderRadius:10,
        backgroundColor:"gray",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    uploadBtn:{
        width:80,
        height:80,
        borderRadius:50,
        marginBottom:-35,
        zIndex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"tomato"
    }
})

export default AddItem;
