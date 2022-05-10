import axios from 'axios';
import { deleteVideoStart, deleteVideoSuccess, deleteVideoFailure, getVideosFailure, getVideosStart, getVideosSuccess } from './VideoActions';

// GET VIDEOS
export const getVideos = async (dispatch) => {
  dispatch(getVideosStart())
  try {
    const res = await axios.get('https://secure-savannah-93086.herokuapp.com/api/videos', {
      headers: {
        token: 'Bearer' + JSON.stringify(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getVideosSuccess(res.data))
  } catch (error) {
    dispatch(getVideosFailure())
  }
}

// DELETE VIDEO (IN PROGRESS)
export const deleteVideo = async (id, dispatch) => {
  dispatch(deleteVideoStart())
  try {
    await axios.delete(`https://secure-savannah-93086.herokuapp.com/api/videos/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.stringify(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteVideoSuccess(id))
  } catch (error) {
    dispatch(deleteVideoFailure())
  }
}