
import {INSERT, UPDATE, DELETE, UPDATE_INDEX} from './actions'

let initialState = {
    currentIndex: -1,
    list: [],
    // list: JSON.parse(localStorage.getItem('transactions'))
}

export const reducer = (state=initialState, action={})=>{
    
    switch(action.type){

        case INSERT:
            let newList = [...state.list];
            newList.push(action.payload);
            return {...state, list: newList, currentIndex:-1}

        case UPDATE:
            state.list[state.currentIndex] = action.payload;
            return {...state, list: [...state.list], currentIndex:-1}

        case UPDATE_INDEX:
            return {...state, currentIndex: action.payload}

        case DELETE:
            state.list.splice(action.payload, 1);
            let newList1 = [...state.list];
            newList1.push(action.payload);
            return {...state, list: newList1, currentIndex:-1}
        default:
            return {...state}
    }
}