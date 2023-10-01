import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);

  const memo = state.find((memo) => memo.id === route.params.id);
  console.log(memo);
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={{ alignSelf: 'flex-end', color: '#74787B' }}>
          Note ID : {route.params.id}
        </Text>
        <View style={{ alignSelf: 'flex-start', marginTop: 8, gap: 5 }}>
          <Text style={styles.title}>รหัสวิชา : {memo.id}</Text>
          <Text style={styles.content}>ชื่อวิชา : {memo.name}</Text>
          <Text style={styles.content}>วันที่สอบ : {memo.date}</Text>
          <Text style={styles.content}>เวลาที่สอบ : {memo.time}</Text>
        </View>
      </View>
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
    fontWeight: 'bold',
    borderBottomWidth: 1,
  },
  content: {
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ShowScreen;
