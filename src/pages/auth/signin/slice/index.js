import { createSlice } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Constants from '../../../../Constants'
export const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    email: "",
    password: "",
    loading: false
  },
  reducers: {
    signin:(state, actions)=>{
      
      state.email = actions.payload.email;
      state.password = actions.payload.password;
      localStorage.setItem("email", actions.payload.email);
      localStorage.setItem("password", actions.payload.password);
      toast.success( Constants.SUCCESS_SIGNIN, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false
        });
    },
    signinCheck:(state)=>{
      
      state.email = localStorage.getItem("email");
      state.password = localStorage.getItem("password");
    },
    logout:(state, action) => {
      localStorage.clear();
      state.email = "";
      state.password = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { signin, logout, signinCheck } = signinSlice.actions

export default signinSlice.reducer