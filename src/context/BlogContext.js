import createDataContext from './createDataContext';

const memoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'clear-memo':
      return [];
    case 'edit-memo':
      return state.map((memo) =>
        memo.id === action.payload.id ? action.payload : memo,
      );
    case 'del-memo':
      return state.filter((memo) => memo.id != action.payload);
    case 'add-memo':
      return [
        ...state,
        {
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
  return (id) => dispatch({ type: 'del-memo', payload: id });
};
const editMemo = (dispatch) => {
  return (id, name, date, time) =>
    dispatch({
      type: 'edit-memo',
      payload: { id, name, date, time },
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
