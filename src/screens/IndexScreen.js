import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Feather, Fontisto } from '@expo/vector-icons';
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
  const { state, delMemo, clearMemo } = useContext(Context);
  const [data, setData] = useState();
  const [sort, setSort] = useState();

  const confirmDelete = (key) => {
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
          onPress: () => delMemo(key),
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
    if (sort === 1) {
      setData([...state].sort((a, b) => a.id.localeCompare(b.id)));
    }
    else if (sort === 2) {
      setData([...state].sort((a, b) => b.id.localeCompare(a.id)));
    }
    else if (sort === 3) {
      setData([...state].sort((a, b) => a.date.localeCompare(b.date)));
    }
    else if (sort === 4) {
      setData([...state].sort((a, b) => b.date.localeCompare(a.date)));
    }
    else if (sort === 5) {
      setData([...state].sort((a, b) => a.time.localeCompare(b.time)));
    }
    else if (sort === 6) {
      setData([...state].sort((a, b) => b.time.localeCompare(a.time)));
    }
    else if (sort === 7) {
      setData([...state].sort((a, b) => {
        if(a.date.localeCompare(b.date)==0)
        {
          return  a.time.localeCompare(b.time)
        }
        else return a.date.localeCompare(b.date)
      }));
    }
    else if (sort === 8) {
      setData([...state].sort((a, b) => {
        if(b.date.localeCompare(a.date)==0)
        {
          return  b.time.localeCompare(a.time)
        }
        else return b.date.localeCompare(a.date)
      }));
    }
    else setData(state);
  }, [state, sort]);

  // console.log('sortId',sortId,'sortDate',sortDate,'sortTime',sortTime,'sortDateAndTime',sortDateAndTime)
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
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ marginTop: 12 }}>Id</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSort(1);
              }}
            >
              <Fontisto name="caret-up" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSort(2);
              }}
            >
              <Fontisto name="caret-down" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ marginTop: 12 }}>Date</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSort(3);
              }}
            >
              <Fontisto name="caret-up" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSort(4);
              }}
            >
              <Fontisto name="caret-down" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ marginTop: 12 }}>Time</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSort(5);
              }}
            >
              <Fontisto name="caret-up" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSort(6);
              }}
            >
              <Fontisto name="caret-down" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ marginTop: 12 }}>Date&Time</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSort(7);
              }}
            >
              <Fontisto name="caret-up" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSort(8);
              }}
            >
              <Fontisto name="caret-down" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(memo) => memo.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.dataBox}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Show', { key: item.key })}
              >
                <View style={styles.row}>
                  <View style={{ gap: 8 }}>
                    <Text style={styles.title}>{item.id}</Text>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>วันที่ : {item.date}</Text>
                    <Text style={styles.text}>เวลา : {item.time}</Text>
                  </View>
                  <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => confirmDelete(item.key)}>
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


