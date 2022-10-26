import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions, Touchable} from 'react-native';

const windowWidth = Dimensions.get('window').width -20

const ListCategory = ({data}) => {
    return (
        <TouchableOpacity>
            <View style={{...styles.container, width:windowWidth}}>
                <ImageBackground source={data.img} style={styles.itemCategoryImg} resizeMode="cover"/>
                <View style={{height:100, paddingVertical:10}}>
                    <Text style={{color:'white'}}>{data.title}</Text>
                    <Text style={{color:'black', fontSize:20, fontWeight:'bold' , textAlign:'center'}}>{data.title}</Text>
                    <Text style={{color:'gray', fontSize:18,  textAlign:'center'}}>{data.numberOfListing}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height:300,
        marginLeft:10,
        marginRight:10,
        position:'relative',
        marginTop:20,
        borderRadius:10,
        backgroundColor:'white',
        overflow:'hidden',
        
    },
    itemCategoryImg:{
        flex:1,
        justifyContent:'center',
    }
})

export default ListCategory;
