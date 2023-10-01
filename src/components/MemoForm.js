import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import dayjs from 'dayjs';

const MemoForm = ({ onSubmit, initValues }) => {
  const [id, setId] = useState(initValues.id);
  const [name, setName] = useState(initValues.name);
  const [date, setDate] = useState();
  const [time, setTime] = useState(initValues.time);
  const [showPicker, setShowPicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const toogleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else toogleDatePicker();
  };

  const active = () => {
    setShowPicker(true);
  };
  const deactive = () => {
    setShowPicker(false);
  };
  const activeTime = () => {
    setShowTimePicker(true);
  };
  const deactiveTime = () => {
    setShowTimePicker(false);
  };

  return (
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
      <Text style={styles.label}>วันที่</Text>
      <TextInput
        style={styles.input}
        placeholder="วัน/เดือน/ปี"
        onFocus={active}
        onBlur={deactive}
        editable={true}
        value={date}
        onChangeText={onChange}
      />
      <Modal animationType="slide" transparent={true} visible={showPicker}>
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
                setShowPicker(!showPicker);
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
        onChangeText={onChange}
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

      <View style={{ marginTop: 20 }}>
        <Button
          color="#B2BB1E"
          title="เพิ่มรายวิชา"
          onPress={() => {
            onSubmit(id, name, date, time);
          }}
        />
      </View>
    </View>
  );
};
MemoForm.defaultProps = {
  initValues: { id: '', name: '', date: '', time: '' },
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
