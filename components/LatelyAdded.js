import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LatelyAdded = ({data}) => {
    const windowWidth = Dimensions.get('window').width -20
    const navigation = useNavigation(); 

    return (
      <TouchableOpacity onPress= {() => navigation.navigate("ProductInfo", {data})}> 
        <View style={{...styles.container, width:windowWidth}}>
            <ImageBackground source={data.img} style={styles.imgBackground}>
                <View style={styles.search}>
                    <Text style={{color:'white'}}>{data.date}</Text>
                    <View style={{width:40, height:40, backgroundColor:'#333', borderRadius:10, opacity:0.6,}}>
                        <Text>Search</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={{marginTop:10}}>
                <Text style={{fontWeight:'bold', fontSize:20}}>{data.cost} $</Text>
                <Text style={{color:'gray', fontSize:18, marginTop:6}}>{data.title}</Text>
                <Text style={{color:'gray', fontSize:16, marginTop:6}}>{data.category}</Text>
                <Text style={{color:'gray', fontSize:16, marginTop:6}}>{data.location}</Text>
            </View>      
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        borderRadius:7,
        overflow:'hidden',
        borderColor:'#eee',
        borderWidth:1
    },
    imgBackground:{
        height:200,
        flex:1,
        position:'relative'
    },
    search:{
        position:'absolute',
        paddingVertical:4,
        paddingHorizontal:10,
        width:'100%',
        bottom:0,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

export default LatelyAdded;
