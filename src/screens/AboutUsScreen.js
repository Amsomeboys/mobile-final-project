import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Members from '../data/Members.json';

const AboutUsScreen = () => {
  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
      <View
        style={{
          borderWidth: 1,
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 12,
          marginVertical: 15,
          backgroundColor: '#222221',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#F2F2F2' }}>รายชื่อสมาชิก</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={Members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: item.image_url }}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 80,
                  borderColor: '#000',
                  borderWidth: 2,
                }}
              />
              <View
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                  borderRadius: 12,
                  marginVertical: 15,
                  backgroundColor: '#F2F2F2',
                  height: 53,
                }}
              >
                <Text>
                  {item.id} {''}
                  {item.first_name} {''} {item.last_name}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default AboutUsScreen;
