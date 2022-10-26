import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,  Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image} from 'react-native';

const Register = ({navigation}) => {

    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width - 20
    const inputWidth = Dimensions.get('window').width -30 

    return (
        
        <SafeAreaView style={{...styles.container, height:windowHeight}} >
          <ScrollView style={{width:windowWidth}} showsVerticalScrollIndicator={false}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/Viva--Soko-logo.png')} style={{width:200, height:50}}/>
            </View>
            <View style={{backgroundColor:'white', padding:8, borderRadius:7}}>
                <Text style={{fontSize:20, textAlign:'center'}}>Sign Up</Text>
                <View style={{marginTop:10}}>
                    <View>
                    <Text>Name*</Text>
                    <TextInput style={{...styles.inputField, width:"100%"}}></TextInput>
                    </View>
                    <View>
                    <Text>Password*</Text>
                    <TextInput style={{...styles.inputField, width:"100%"}}></TextInput>
                    </View>
                    <View>
                    <Text>Re-type password*</Text>
                    <TextInput style={{...styles.inputField, width:"100%"}}></TextInput>
                    </View>
                    <View>
                    <Text>Email*</Text>
                    <TextInput style={{...styles.inputField, width:"100%"}}></TextInput>
                    </View>
                     <View>
                    <Text>Mobile Phone</Text>
                    <TextInput style={{...styles.inputField, width:"100%"}}></TextInput>
                    </View>
                    
                    
                </View>
                
                <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate("Home")}>
                    <Text style={{color:'white', textAlign:'center'}}>Create account</Text>
                </TouchableOpacity>

                <Text style={{textAlign:"center", color:"tomato", marginVertical:4}}>Login if you already have an account</Text>

                <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate("Login")}>
                    <Text style={{color:'white', textAlign:'center'}}>Login</Text>
                </TouchableOpacity>
                
            </View>
            </ScrollView>
        </SafeAreaView>
        
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
        justifyContent:'space-around'
    },

    logoContainer:{
        paddingVertical:20,
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

export default Register;