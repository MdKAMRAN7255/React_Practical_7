import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      // adding signUp page here
      addData: (state, action) => {
        state = [
          ...state, action.payload
        ]
        //add Data to sessionStorage so that if page is refresh data will still availabel
        sessionStorage.setItem("loginData", JSON.stringify(state));
        return state;
      }
    }
  })
export const { addData } = counterSlice.actions;
export default counterSlice.reducer;
