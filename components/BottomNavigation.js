import React from 'react';
import {View, Image,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {

    
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
        {/*Home button */}
            <TouchableOpacity style={{display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
            <View style={{width:30,
            height:30,
            alignItems:"center",
            justifyContent:"center"
            }}>
               <Image source={require('../assets/home.png')} resizeMode="cover" style={{width:170, height:170}}/>
            </View>
                <Text style={{
                    color:'tomato',
                    fontSize:12,
                    fontWeight:'bold'
                    }}>Home</Text>
            </TouchableOpacity>

            {/*Post ad button */}
            <TouchableOpacity style={styles.navBtn} 
                onPress={() => navigation.navigate('AddItem')}>
             <View style={{width:30,
            height:30,
            alignItems:"center",
            justifyContent:"center"
            }}>
               <Image source={require('../assets/post.png')} resizeMode="cover" style={{width:150, height:150}}/>
            </View>
                <Text style={{
                    color:'tomato',
                    fontSize:12,
                    fontWeight:'bold'
                    }}>Post Ad</Text>
            </TouchableOpacity>

              {/*Account button */}      
             <TouchableOpacity style={styles.navBtn} >
             <View style={{width:30,
            height:30,
            alignItems:"center",
            justifyContent:"center"
            }}>
               <Image source={require('../assets/account-icon.png')} resizeMode="cover" style={{width:120, marginRight:32, marginTop:7, height:120}}/>
            </View>
                <Text style={{
                    color:'tomato',
                    fontSize:12,
                    fontWeight:'bold'
                    }}>Account</Text>
            </TouchableOpacity>

             {/**  Logout button */}       
            <TouchableOpacity style={styles.navBtn}>
            <View style={{width:30,
            height:30,
            alignItems:"center",
            justifyContent:"center"
            }}>
               <Image source={require('../assets/logout-icon-01.png')} resizeMode="cover" style={{width:120, height:120}}/>
            </View>
                 <Text style={{
                    color:'tomato',
                    fontSize:12,
                    fontWeight:'bold'
                    }}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        paddingVertical:10,
        alignItems:'center',
        borderRadius:10,
        justifyContent:'space-around',
        backgroundColor:'white'
    },
    navBtn:{
         display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
})

export default BottomNavigation;
