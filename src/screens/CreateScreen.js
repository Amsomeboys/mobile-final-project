import React, { useContext } from 'react';
import MemoForm from '../components/MemoForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addMemo } = useContext(Context);
  return (
    <MemoForm
      onSubmit={(id, name, date, time) => {
        addMemo(id, name, date, time);
        navigation.navigate('Index');
      }}
    />
  );
};

export default CreateScreen;
