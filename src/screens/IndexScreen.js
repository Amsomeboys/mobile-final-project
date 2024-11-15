import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Feather, Fontisto, AntDesign } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const default_color = '#222221';
const click_color = '#9ACD32';
let color_sort_1 = default_color;
let color_sort_2 = default_color;
let color_sort_3 = default_color;
let color_sort_4 = default_color;
let color_sort_5 = default_color;
let color_sort_6 = default_color;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#9ACD32',
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

    color_sort_1=default_color
    color_sort_2=default_color
    color_sort_3=default_color
    color_sort_4=default_color
    color_sort_5=default_color
    color_sort_6=default_color

    if (sort === 1) {
      setData([...state].sort((a, b) => a.id.localeCompare(b.id)));
      color_sort_1 = click_color;
    } else if (sort === 2) {
      setData([...state].sort((a, b) => b.id.localeCompare(a.id)));
      color_sort_2=click_color
    }
    else if (sort === 3) {
      setData([...state].sort((a, b) => {
        if (a.date.localeCompare(b.date) == 0) {
          return a.time.localeCompare(b.time)
        }
        else return a.date.localeCompare(b.date)
      }));
      color_sort_3=click_color
    }
    else if (sort === 4) {
      setData([...state].sort((a, b) => {
        if (b.date.localeCompare(a.date) == 0) {
          return b.time.localeCompare(a.time)
        }
        else return b.date.localeCompare(a.date)
      }));
      color_sort_4=click_color
    }
    else if (sort === 5) {
      setData([...state].sort((a, b) => {
        if (a.dateEnd.localeCompare(b.dateEnd) == 0) {
          return a.timeEnd.localeCompare(b.timeEnd)
        }
        else return a.dateEnd.localeCompare(b.dateEnd)
      }));
      color_sort_5=click_color
    }
    else if (sort === 6) {
      setData([...state].sort((a, b) => {
        if (b.dateEnd.localeCompare(a.dateEnd) == 0) {
          return b.timeEnd.localeCompare(a.timeEnd)
        }
        else return b.dateEnd.localeCompare(a.dateEnd)
      }));
      color_sort_6=click_color
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
          <MaterialCommunityIcons name="delete-off" size={30} color="#9ACD32" />
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
          <Text style={{ marginTop: 22, textAlign:'center'}}>รหัสวิชา</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSort(1);
              }}
            >
              <Fontisto name="caret-up" size={20} color={color_sort_1} marginTop={12}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSort(2);
              }}
            >
              <Fontisto name="caret-down" size={20} color={color_sort_2} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ marginTop: 12, textAlign:'center'}}>วันและเวลา{'\n'}เริ่มสอบ</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSort(3);
              }}
            >
              <Fontisto name="caret-up" size={20} color={color_sort_3} marginTop={12} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSort(4);
              }}
            >
              <Fontisto name="caret-down" size={20} color={color_sort_4} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ marginTop: 12, textAlign:'center'}}>วันและเวลา{'\n'}จบการสอบ</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSort(5);
              }}
            >
              <Fontisto name="caret-up" size={20} color={color_sort_5} marginTop={12}/>
            </TouchableOpacity>
            {/* <Text>{'\n'}</Text> */}
            <TouchableOpacity
              onPress={() => {
                setSort(6);
              }}
            >
              <Fontisto name="caret-down" size={20} color={color_sort_6} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(memo) => memo.key}
        renderItem={({ item }) => {
          return (
            <View style={styles.dataBox}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Show', { key: item.key })}
              >
                <View style={styles.row}>
                  <View style={{ gap: 8 }}>
                    <Text style={styles.title}>{item.id} </Text>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>ห้อง : {item.room}</Text>
                    <Text style={styles.text}>เริ่มสอบวันที่ : {item.date}</Text>
                    <Text style={styles.text}>เวลา : {item.time}</Text>
                    <Text style={styles.text}>จบการสอบวันที่ : {item.dateEnd}</Text>
                    <Text style={styles.text}>เวลา : {item.timeEnd}</Text>
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
