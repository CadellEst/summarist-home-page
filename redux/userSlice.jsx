import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    password: null,
    username: null,
    uid: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.email = action.payload.email
        state.password = action.payload.password
        state.username = action.payload.username
        state.uid = action.payload.uid
    },

    signOutUser : (state) => {
        state.email = null,
        state.password = null,
        state.username = null,
        state.uid = null
    }
  }
});

export const {setUser, signOutUser} = userSlice.actions

export default userSlice.reducer