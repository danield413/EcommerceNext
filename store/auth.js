import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startGoogleLogin = createAsyncThunk('auth/google', async () => {

    //Firebase auth
    const resp = await firebase.auth().signInWithPopup( googleAuthProvider );

    const data = {
        uid: resp.user.uid,
        displayName: resp.user.displayName,
        email: resp.user.email,
        picture: resp.user.photoURL
    }

    const url = 'http://localhost:3000' || process.env.URL;

    const tokenResp = await axios.post(`${url}/api/create`, data)

    localStorage.setItem('Ecomm-tkn', tokenResp.data.token)

    return data;
})

export const startChecking = createAsyncThunk('auth/token-verify', async () => {

    const url = 'http://localhost:3000' || process.env.URL;
    
    //JWT auth verify
    const token = localStorage.getItem('Ecomm-tkn');
    const resp = await axios.post(`${url}/api/verify`, {
        token
    } );

    localStorage.setItem('Ecomm-tkn', resp.data.token);
    return resp.data.data;
    
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: null,
        displayName: null,
        email: null,
        picture: null,
        status: '',
        checking: false
    },
    reducers: {
        logout: (state) => {
            state.uid = null;
            state.displayName = null;
            state.email = null;
            state.picture = null;
            state.status = '';
        }
    },
    extraReducers: {
        [startGoogleLogin.pending]: (state, action) => {
            state.status = 'loading';
          },
        [startGoogleLogin.fulfilled]: (state, action) => {
            state.status = 'success';
            state.uid = action.payload.uid;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.picture = action.payload.picture;
        },
        [startGoogleLogin.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [startChecking.pending]: (state) => {
            state.checking = true;
          },
        [startChecking.fulfilled]: (state, action) => {
            state.checking = false;
            state.uid = action.payload.uid;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.picture = action.payload.picture;
        },
        [startChecking.rejected]: (state) => {
            state.checking = false;
        },
    }
})
export const { logout } = authSlice.actions;
export default authSlice.reducer;
