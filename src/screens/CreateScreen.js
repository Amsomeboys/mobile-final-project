import React, { useContext } from 'react';
import MemoForm from '../components/MemoForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addMemo } = useContext(Context);
  return (
    <MemoForm
      onSubmit={(id, name, room , date, time, dateEnd, timeEnd) => {
        addMemo(id, name, room , date, time, dateEnd, timeEnd);
        navigation.navigate('Index');
      }}
    />
  );
};

export default CreateScreen;
