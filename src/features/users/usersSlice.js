import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  fetching: false,
  response: []
}

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, {dispatch}) => {
    await axios('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
      .then(response => {
        dispatch(getResponse(response.data))
        dispatch(setUsers(response.data.users))
      })
  }
)

export const getMoreUsers = createAsyncThunk(
  'users/setMoreUsers',
  async (_, {dispatch}) => {
    try {
      await axios(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${1}&count=6`)
        .then(response => dispatch(setMoreUsers(response.data.users)))
    } catch (error) {
    
    }
  }
)

export const authUser = createAsyncThunk(
  'users/authUser',
  async (fromData, {dispatch}) => {
    const token = await axios('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    console.log('a')
    try{
      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: fromData,
        headers: {
          'Token': token.data.token
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
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
      console.log(state.response)
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
        .addCase(authUser.fulfilled)
    }
  }
})

export const {setUsers, setMoreUsers, getResponse} = usersSlice.actions
export default usersSlice.reducer
