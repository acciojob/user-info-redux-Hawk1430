import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
    name: "user",
    initialState:{
        value:{
            name: "",
            email: ""
        }
    },
    reducers:{
        changeName: (state,action) => {
            state.value.name = action.payload;
        },
        changeEmail: (state,action) => {
            state.value.email = action.payload;
        }
    }
});

export const {changeName, changeEmail} = userSlicer.actions;

export default userSlicer.reducer;