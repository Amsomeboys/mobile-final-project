import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import MemoForm from '../components/MemoForm';

const EditScreen = ({ route, navigation }) => {
  const { state, editMemo } = useContext(Context);
  const key = route.params.key;

  const memo = state.find((memo) => memo.key === key);

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'flex-end' }}>ID : {key}</Text>
      <MemoForm
        initValues={{
          id: memo.id,
          name: memo.name,
          room: memo.room,
          date: memo.date,
          time: memo.time,
          dateEnd: memo.dateEnd,
          timeEnd: memo.timeEnd,
        }}
        onSubmit={(id, name, room, date, time, dateEnd, timeEnd) => {
          editMemo(key, id, name, room, date, time, dateEnd, timeEnd);
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
