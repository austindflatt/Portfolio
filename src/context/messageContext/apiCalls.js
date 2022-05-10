import axios from 'axios';
import { deleteMessageStart, deleteMessageSuccess, deleteMessageFailure, getMessagesFailure, getMessagesStart, getMessagesSuccess } from './MessageActions';

// GET MESSAGES
export const getMessages = async (dispatch) => {
  dispatch(getMessagesStart())
  try {
    const res = await axios.get('https://secure-savannah-93086.herokuapp.com/api/messages', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getMessagesSuccess(res.data))
  } catch (error) {
    dispatch(getMessagesFailure())
  }
}

// DELETE MESSAGE (IN PROGRESS)
export const deleteMessage = async (id, dispatch) => {
  dispatch(deleteMessageStart())
  try {
    await axios.delete(`https://secure-savannah-93086.herokuapp.com/api/messages/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteMessageSuccess(id))
  } catch (error) {
    dispatch(deleteMessageFailure())
  }
}