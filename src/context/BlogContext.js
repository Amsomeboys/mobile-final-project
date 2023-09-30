import createDataContext from "./createDataContext";

const memoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "clear-memo":
            return [];
        case "edit-memo":  
            return state.map((memo)=>memo.id === action.payload.id?action.payload:memo);
        case "del-memo":
            return state.filter((memo)=>memo.id!=action.payload);
        case "add-memo":
            var date = new Date().getDate(); 
            var month = new Date().getMonth() + 1; 
            var year = new Date().getFullYear(); 
            var hours = new Date().getHours(); 
            var min = new Date().getMinutes(); 
            var sec = new Date().getSeconds(); 
            var getTime = date+'/'+month+'/'+year+' '+hours+':'+min+':'+sec;
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                    lastModified:getTime,
                },
            ];
         
        default:
            return state;
    }
};

const addMemo = (dispatch) => {
    return (title, content) => {
        dispatch({ type: "add-memo", payload: { title, content } });
    };
};
const delMemo = dispatch => {
    return (id) => dispatch({ type: 'del-memo', payload: id });
};
const editMemo = dispatch =>{
    return (id,title,content,lastModified) => dispatch({type:'edit-memo',payload:{id,title,content,lastModified}});
};
const clearMemo = (dispatch) => {
    return () => {
        dispatch({ type: "clear-memo" });
    };
};
export const { Context, Provider } = createDataContext(
    memoReducer,
    { addMemo ,delMemo,editMemo,clearMemo },
    // [{id:0,title:'Title0',content:'Content0'}]
    []
);