import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import MemoForm from '../components/MemoForm';

const EditScreen = ({ route, navigation }) => {
  const { state, editMemo } = useContext(Context);
  const id = route.params.id;

  const memo = state.find((memo) => memo.id === id);

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'flex-end' }}>ID : {id}</Text>
      <MemoForm
        initValues={{
          id: memo.id,
          name: memo.name,
          date: memo.date,
          time: memo.time,
        }}
        onSubmit={(id, name, date, time) => {
          editMemo(id, name, date, time);
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
