import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View, ScrollView, ImageBackground, FlatList, Text, Dimensions, TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import { latelyAdded, listItems } from '../data';
import ListCategory from '../components/ListCategory';
import LatelyAdded from '../components/LatelyAdded';
import BottomNavigation from '../components/BottomNavigation';


const Home = ({navigation}) => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width 
    const componentWidth = Dimensions.get('window').width - 20

   

    return (
        
            <SafeAreaView style={{...styles.container, height:windowHeight}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height:500}}>
                    <ImageBackground
                    source={require('../assets/bg-image.jpg')}
                    resizeMode="cover"
                    style={{ flex: 1, alignItems:'center', justifyContent: "center"}}
                    >
                        <View style={{flex: 1, alignItems:'center', justifyContent: "center", width:windowWidth}}>
                            <Text style={{textAlign:'center', fontSize:20, color:'white'}}>Donate, Sell, Buy, Trade In</Text>
                            <Text style={{textAlign:'center', fontSize:40, fontWeight:'bold', color:'white'}}><Text style={{color:'tomato'}}> We are here</Text> for  {"\n"} you</Text>
                            <TextInput style={{...styles.inputField, width:componentWidth}} placeholder='What are you looking for'></TextInput>
                            <TextInput style={{...styles.inputField, width:componentWidth}} placeholder='Location'></TextInput>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{...styles.searchBtn, width:componentWidth}}>
                                <Text style={{color:'white', textAlign:'center', }}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.categoryListWrapper}>
                    <Text style={{textAlign:'center', fontSize:25, fontWeight:'800'}}>Listed Categories</Text>
                    <Text style={{textAlign:'center', color:'gray'}} >Scroll Horizontally to explore more</Text>
                    <View style={styles.categoryList}>
                        <FlatList
                            horizontal
                             showsHorizontalScrollIndicator={false}
                            data={listItems}
                            renderItem={({item}) => <ListCategory data={item}/> }
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>

                <View style={{paddingVertical:20}}>
                    <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', color:'#333'}}>Lately added on <Text style={{color:'tomato'}}>Vivasoko</Text></Text>
                    <View style={{display:'flex', alignItems:'center'}}>
                        <FlatList
                            data={latelyAdded}
                            renderItem={({item}) => <LatelyAdded data={item}/>}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
                </ScrollView>
                <View style={styles.navigation}>
                    <BottomNavigation/>
                </View>
            </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        backgroundColor:'#F5F7FC',
        display:'flex',
        alignItems:'center',
        paddingBottom:70     
    },
    inputField:{
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:4,
         borderRadius:4,
        borderColor:'#3333',
        borderWidth:1,
        backgroundColor:'white'
    },
    searchBtn:{
        marginTop:10,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:4,
        backgroundColor:'tomato'
    },
    categoryList:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    categoryListWrapper:{
        paddingVertical:30,
        backgroundColor:'#F4E6E2'
    },
    navigation:{
        position:'absolute',
        paddingHorizontal:20,
        bottom:5,
        width:"100%"
    }
})

export default Home;
