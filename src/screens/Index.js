import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  button: { backgroundColor: '#fff', padding: 15, borderRadius: 20 },
});

const Index = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006664',
        height: '100%',
      }}
    >
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 96 }}>
        KU
      </Text>
      <Text style={{ color: '#9ACD32', fontWeight: 'bold', fontSize: 28 }}>
        Exam Schedule
      </Text>
      <View style={[styles.button, { margin: 30 }]}>
        <TouchableOpacity onPress={() => navigation.navigate('Index')}>
          <Text style={{ color: '#006664', fontWeight: 'bold', fontSize: 18 }}>
            Let's Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Index;
