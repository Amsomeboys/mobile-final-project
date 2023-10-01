import createDataContext from './createDataContext';

const memoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'clear-memo':
      return [];
    case 'edit-memo':
      return state.map((memo) =>
        memo.key === action.payload.key ? action.payload : memo,
      );
    case 'del-memo':
      return state.filter((memo) => memo.key != action.payload);
    case 'add-memo':
      return [
        ...state,
        {
          key: Math.floor(Math.random() * 99999),
          id: action.payload.id,
          name: action.payload.name,
          date: action.payload.date,
          time: action.payload.time,
        },
      ];

    default:
      return state;
  }
};

const addMemo = (dispatch) => {
  return (id, name, date, time) => {
    dispatch({ type: 'add-memo', payload: { id, name, date, time } });
  };
};
const delMemo = (dispatch) => {
  return (key) => dispatch({ type: 'del-memo', payload: key });
};
const editMemo = (dispatch) => {
  return (key, id, name, date, time) =>
    dispatch({
      type: 'edit-memo',
      payload: { key, id, name, date, time },
    });
};
const clearMemo = (dispatch) => {
  return () => {
    dispatch({ type: 'clear-memo' });
  };
};
export const { Context, Provider } = createDataContext(
  memoReducer,
  { addMemo, delMemo, editMemo, clearMemo },
  [],
);
