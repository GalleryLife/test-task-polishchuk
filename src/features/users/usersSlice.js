import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  response: {},
  authResponse: {}
}

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, {
    dispatch
  }) => {
    try {
      await axios(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
        .then(response => {
          dispatch(getResponse(response.data))
          dispatch(setUsers(response.data.users))
        })
    } catch (error) {
      console.log(error)
    }
  }
)

export const getMoreUsers = createAsyncThunk(
  'users/setMoreUsers',
  async (page, {dispatch}) => {
    try {
      await axios(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
        .then(response => dispatch(setMoreUsers(response.data.users)))
    } catch (error) {
      console.log(error)
    }
  }
)

export const authUser = createAsyncThunk(
  'users/authUser',
  async (fromData, {dispatch}) => {
    try {
      const token = await axios('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: fromData,
        headers: {
          'Token': token.data.token
        }
      })
        .then(response => response.json())
        .then(data => dispatch(getAuthResponse((data))))
    } catch (error) {
      console.log(error)
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setMoreUsers: (state, action) => {
      state.users = [...state.users, ...action.payload]
    },
    getResponse: (state, action) => {
      state.response = action.payload
    },
    getAuthResponse: (state, action) => {
      state.authResponse = action.payload
    },
    extraReducers: (builder) => {
      builder
        .addCase(getUsers.fulfilled, (state, action) => {
          usersSlice.caseReducers.setUsers(state, action)
        })
        .addCase(getMoreUsers.fulfilled, (state, action) => {
          usersSlice.caseReducers.setMoreUsers(state, action)
          usersSlice.caseReducers.getResponse(state, action)
        })
    }
  }
})

export const {setUsers, setMoreUsers, getResponse, getAuthResponse} = usersSlice.actions
export default usersSlice.reducer
