import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,  Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image} from 'react-native';


const Login = ({navigation}) => {

    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width - 20

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{...styles.container, height:windowHeight}} >
          
            <View style={styles.logoContainer}>
                <Image source={require('../assets/Viva--Soko-logo.png')} style={{width:200, height:50}}/>
            </View>
            <View style={{backgroundColor:'white', padding:8, marginTop:50, borderRadius:7}}>
                <Text style={{fontSize:20, textAlign:'center'}}>Login</Text>
                <View style={{marginTop:10}}>
                    <View>
                    <Text>Password*</Text>
                    <TextInput style={{...styles.inputField, width:windowWidth}}></TextInput>
                    </View>
                    
                    <View>
                    <Text>Email*</Text>
                    <TextInput style={{...styles.inputField, width:windowWidth}}></TextInput>
                    </View>

                    <View style={{paddingVertical:20}}>
                        <Text>Remember me</Text>
                    </View>
                  
                </View>

                <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Home')}>
                    <Text style={{color:'white', textAlign:'center'}}>Login</Text>
                </TouchableOpacity>

                <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingVertical:10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={{color:'tomato'}}>Sign up</Text>
                    </TouchableOpacity>
                    <Text style={{color:'tomato'}}>Forgot password</Text>
                </View>               
                
            </View>
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:10,
        paddingHorizontal:40,
        backgroundColor:'#F5F7FC',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

    inputField:{
        marginTop:10,
        paddingVertical:10,
         borderRadius:4,
        borderColor:'#3333',
        borderWidth:1
    },

    registerBtn:{
        marginTop:10,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:4,
        backgroundColor:'tomato'
    }
})

export default Login;