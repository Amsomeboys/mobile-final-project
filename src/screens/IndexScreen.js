import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert,
    TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, addMemo,delMemo,clearMemo } = useContext(Context);
    
    const confirmDelete = (id) => {
        return Alert.alert(
            "Delete?",
            "Confirm Delete?",
            [
                {
                    text:'Cancel',
                    onPress:()=>console.log('Cancel to delte'),
                    style:'cancel'
                },
                {
                    text:'confirm',
                    onPress:()=>delMemo(id)
                }
            ],
            {cancelable:false}
        )
    } 
    const confirmClear = () => {
        return Alert.alert(
            "Clear?",
            "Confirm Clear?",
            [
                {
                    text:'Cancel',
                    onPress:()=>console.log('Cancel to clear'),
                    style:'cancel'
                },
                {
                    text:'confirm',
                    onPress:()=>{clearMemo()}
                }
            ],
            {cancelable:false}
        )
    } 
    return (
        <View style={styles.container}>
            <View style={styles.clear}>
                <Text style={{fontSize:20,color:"#B2BB1E"}}>Clear All Note</Text>
                {/* <TouchableOpacity onPress={clearMemo}> */}
                <TouchableOpacity onPress={confirmClear}>
                    <MaterialCommunityIcons name="delete-off" size={30} color="#B2BB1E" />
                </TouchableOpacity>   
            </View>
            <FlatList
                data={state}
                keyExtractor={(memo) => memo.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Show", { id: item.id })}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} 
                                    
                                </Text>
                                <Text>
                                    <Text style={{fontSize:15,color:"#74787B"}}>
                                        Note ID:{item.id}
                                    </Text>
                                    <TouchableOpacity onPress={()=>confirmDelete(item.id)}>
                                {/* <TouchableOpacity onPress={()=>delMemo(item.id)}> */}
                                        <MaterialCommunityIcons name="trash-can-outline" size={30} color="black" />
                                    </TouchableOpacity>
                                </Text>
                                
                            </View>
                            <Text style={{paddingHorizontal: 10,}}>
                                Last Modified : {item.lastModified}
                            </Text>

                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        //paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: "#222221",
    },
    title: {
        fontSize: 20,
        fontWeight:"bold",
    },
    clear:{
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        //alignSelf: 'stretch',
        //flex:1,
        backgroundColor:"#222221",
        justifyContent: "space-between",
    },
});

export default IndexScreen;