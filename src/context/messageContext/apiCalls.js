import axios from 'axios';
import { deleteMessageStart, deleteMessageSuccess, deleteMessageFailure, getMessagesFailure, getMessagesStart, getMessagesSuccess } from './MessageActions';

// GET MESSAGES
export const getMessages = async (dispatch) => {
  dispatch(getMessagesStart())
  try {
    const res = await axios.get('http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/messages', {
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
    await axios.delete(`http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/messages/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteMessageSuccess(id))
  } catch (error) {
    dispatch(deleteMessageFailure())
  }
}