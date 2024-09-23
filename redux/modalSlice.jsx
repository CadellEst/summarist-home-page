import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SignupModalOpen: false,
  LoginModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.SignupModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.SignupModalOpen = false;
    },
    openLoginModal: (state) => {
      state.LoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.LoginModalOpen = false;
    },
  },
});

export const {
  openSignupModal,
  closeSignupModal,
  openLoginModal,
  closeLoginModal,
} = modalSlice.actions;

export default modalSlice.reducer;
