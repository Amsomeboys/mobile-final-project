import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,

    borderColor: '#222221',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: { fontSize: 18 },
  clear: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#222221',
    justifyContent: 'space-between',
  },
  dataBox: {
    width: 'auto',
    height: 'auto',
    padding: 6,
    borderRadius: 16,
    borderColor: '#151515',
    borderWidth: 1,
    margin: 18,
  },
});

const IndexScreen = ({ navigation }) => {
  const { state, addMemo, delMemo, clearMemo } = useContext(Context);
  const [data, setData] = useState();
  const [sort, setSort] = useState('');
  const [sortId, setSortId] = useState(1);
  const [sortDate, setSortDate] = useState(1);
  const [sortTime, setSortTime] = useState(1);

  const confirmDelete = (id) => {
    return Alert.alert(
      'Delete?',
      'Confirm Delete?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel to delete'),
          style: 'cancel',
        },
        {
          text: 'confirm',
          onPress: () => delMemo(id),
        },
      ],
      { cancelable: false },
    );
  };
  const confirmClear = () => {
    return Alert.alert(
      'Clear?',
      'Confirm Clear?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel to clear'),
          style: 'cancel',
        },
        {
          text: 'confirm',
          onPress: () => {
            clearMemo();
          },
        },
      ],
      { cancelable: false },
    );
  };
  useEffect(() => {
    if (sort === 'time' && sortTime === 1) {
      setData(state.sort((a, b) => a.time.localeCompare(b.time)));
    } else if (sort === 'date' && sortDate === 1) {
      setData(state.sort((a, b) => a.date.localeCompare(b.date)));
    } else if (sort === 'id' && sortId === 1) {
      setData(state.sort((a, b) => a.id.localeCompare(b.id)));
    }
  }, [state]);

  return (
    <View style={styles.container}>
      <View style={styles.clear}>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name="plus" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={confirmClear}>
          <MaterialCommunityIcons name="delete-off" size={30} color="#B2BB1E" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 10,
          gap: 20,
        }}
      >
        <Button
          title="Sort by id"
          onPress={() => {
            setSort('id');
          }}
        />
        <Button title="Sort by date" onPress={() => setSort('date')} />
        <Button title="Sort by time" onPress={() => setSort('time')} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(memo) => memo.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.dataBox}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Show', { id: item.id })}
              >
                <View style={styles.row}>
                  <View style={{ gap: 8 }}>
                    <Text style={styles.title}>{item.id}</Text>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>วันที่ : {item.date}</Text>
                    <Text style={styles.text}>เวลา : {item.time}</Text>
                  </View>
                  <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                      {/* <TouchableOpacity onPress={()=>delMemo(item.id)}> */}
                      <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={30}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={{ paddingHorizontal: 10 }}></Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;
