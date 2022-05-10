import axios from 'axios';
import { getUsersFailure, getUsersStart, getUsersSuccess } from './UserActions';

// GET USERS
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart())
  try {
    const res = await axios.get('https://secure-savannah-93086.herokuapp.com/api/users', {
      headers: {
        token: 'Bearer' + JSON.stringify(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getUsersSuccess(res.data))
  } catch (error) {
    dispatch(getUsersFailure())
  }
}

// DELETE USERS (IN PROGRESS)