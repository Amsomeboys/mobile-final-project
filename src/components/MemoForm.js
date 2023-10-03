import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import dayjs from 'dayjs';

const MemoForm = ({ onSubmit, initValues }) => {
  const [id, setId] = useState(initValues.id);
  const [name, setName] = useState(initValues.name);
  const [room, setRoom] = useState(initValues.room);
  const [date, setDate] = useState(initValues.date);
  const [time, setTime] = useState(initValues.time);
  const [dateEnd, setDateEnd] = useState(initValues.dateEnd);
  const [timeEnd, setTimeEnd] = useState(initValues.timeEnd);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDateEndPicker, setShowDateEndPicker] = useState(false);
  const [showTimeEndPicker, setShowEndTimePicker] = useState(false);
  // const toogleDatePicker = () => {
  //   showDatePicker(!showDatePicker);
  // };

  // const toggleTimePicker = () => {
  //   setShowTimePicker(!showTimePicker);
  // };

  // const onChangeDate = ({ type }, selectedDate) => {
  //   if (type === 'set') {
  //     const currentDate = selectedDate;
  //     setDate(currentDate);
  //   } else toogleDatePicker();
  // };

  // const onChangeTime = ({ type }, selectedTime) => {
  //   if (type === 'set') {
  //     const currentTime = selectedTime;
  //     setTime(currentTime);
  //   } else toggleTimePicker();
  // };

  // const onChangeDateEnd = ({ type }, selectedDate) => {
  //   if (type === 'set') {
  //     const currentDate = selectedDate;
  //     setDateEnd(currentDate);
  //   } else toogleDatePicker();
  // };

  // const onChangeTimeEnd = ({ type }, selectedTime) => {
  //   if (type === 'set') {
  //     const currentTime = selectedTime;
  //     setTimeEnd(currentTime);
  //   } else toggleTimePicker();
  // };

  const activeDate = () => {
    setShowDatePicker(true);
  };
  const deactiveDate = () => {
    setShowDatePicker(false);
  };
  const activeTime = () => {
    setShowTimePicker(true);
  };
  const deactiveTime = () => {
    setShowTimePicker(false);
  };
  const activeDateEnd = () => {
    setShowDateEndPicker(true);
  };
  const deactiveDateEnd = () => {
    setShowDateEndPicker(false);
  };
  const activeTimeEnd = () => {
    setShowEndTimePicker(true);
  };
  const deactiveTimeEnd = () => {
    setShowEndTimePicker(false);
  };
  return (
    <ScrollView>
    <View>
      <Text style={styles.label}>รหัสวิชา</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. 01418344"
        value={id}
        inputMode="numeric"
        keyboardType="numeric"
        onChangeText={(id) => setId(id)}
      />
      <Text style={styles.label}>ชื่อรายวิชา</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. Mobile Aplication Design and Development"
        numberOfLines={2}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>ห้อง</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. SC9-330"
        value={room}
        onChangeText={(room) => setRoom(room)}
      />
      <Text style={styles.label}>เริ่มสอบวันที่</Text>
      <TextInput
        style={styles.input}
        placeholder="วัน/เดือน/ปี"
        onFocus={activeDate}
        onBlur={deactiveDate}
        editable={true}
        value={date}
        // onChangeText={onChangeDate}
      />
      <Modal animationType="slide" transparent={true} visible={showDatePicker}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              current={dayjs().format('YYYY-MM-DD')}
              minimumDate="2023-10-24"
              maximumDate="2023-11-03"
              onDateChange={(date) => setDate(dayjs(date).format('DD/MM/BBBB'))}
            />
            <TouchableOpacity
              onPress={() => {
                setShowDatePicker(!showDatePicker);
              }}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.label}>เวลา</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. 00.00"
        onFocus={activeTime}
        onBlur={deactiveTime}
        value={time}
        // onChangeText={onChangeTime}
      />
      <Modal animationType="slide" transparent={true} visible={showTimePicker}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="time"
              minuteInterval={1}
              onTimeChange={(selectedTime) => {
                setTime(selectedTime);
                setShowTimePicker(!showTimePicker);
              }}
            />
          </View>
        </View>
      </Modal>
              
      <Text style={styles.label}>จบการสอบวันที่</Text>
      <TextInput
        style={styles.input}
        placeholder="วัน/เดือน/ปี"
        onFocus={activeDateEnd}
        onBlur={deactiveDateEnd}
        editable={true}
        value={dateEnd}
        // onChangeText={onChangeDateEnd}
      />
      <Modal animationType="slide" transparent={true} visible={showDateEndPicker}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              current={dayjs().format('YYYY-MM-DD')}
              minimumDate="2023-10-24"
              maximumDate="2023-11-03"
              onDateChange={(date) => setDateEnd(dayjs(date).format('DD/MM/BBBB'))}
            />
            <TouchableOpacity
              onPress={() => {
                setShowDateEndPicker(!showDateEndPicker);
              }}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.label}>เวลา</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. 00.00"
        onFocus={activeTimeEnd}
        onBlur={deactiveTimeEnd}
        value={timeEnd}
        // onChangeText={onChangeTimeEnd}
      />
      <Modal animationType="slide" transparent={true} visible={showTimeEndPicker}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="time"
              minuteInterval={1}
              onTimeChange={(selectedTime) => {
                setTimeEnd(selectedTime);
                setShowEndTimePicker(!showTimeEndPicker);
              }}
            />
          </View>
        </View>
      </Modal>

      <View style={{ marginTop: 20 }}>
        <Button
          color="#B2BB1E"
          title="เพิ่มรายวิชา"
          onPress={() => {
            onSubmit(id, name, room , date, time, dateEnd, timeEnd);
          }}
        />
      </View>
    </View>
    </ScrollView>
  );
};
MemoForm.defaultProps = {
  initValues: { id: '', name: '',room:'', date: '', time: '' ,dateEnd: '', timeEnd: ''},
};
const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#9DB2BF',
    borderRadius: 14,
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  centeredView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
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

export default MemoForm;
