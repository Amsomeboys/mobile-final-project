import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import MemoForm from "../components/MemoForm";


const EditScreen = ({ route,navigation }) => {
    const { state,editMemo } = useContext(Context);
    const id = route.params.id;

    const memo = state.find((memo)=>memo.id===id);
    //console.log(memo);

    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    var getTime = date+'/'+month+'/'+year+' '+hours+':'+min+':'+sec;


    return (
        <View style={styles.container}>
            <Text>Note ID : {id}</Text>
            <MemoForm initValues = {{title:memo.title,content:memo.content}}
            
            onSubmit={(title,content,lastModified)=>{
                lastModified=getTime
                editMemo(id,title,content,lastModified)
                //navigation.navigate("Index");
                navigation.pop();
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
    },
});

export default EditScreen;