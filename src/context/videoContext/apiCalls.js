import axios from 'axios';
import { 
  updateVideoStart,
  updateVideoSuccess,
  updateVideoFailure,
  createVideoStart,
  createVideoSuccess,
  createVideoFailure,
  deleteVideoFailure, 
  deleteVideoStart, 
  deleteVideoSuccess, 
  getVideosFailure, 
  getVideosStart, 
  getVideosSuccess 
} from './VideoActions';

// GET VIDEOS
export const getVideos = async (dispatch) => {
  dispatch(getVideosStart())
  try {
    const res = await axios.get('https://secure-savannah-93086.herokuapp.com/api/videos')
    dispatch(getVideosSuccess(res.data))
  } catch (error) {
    dispatch(getVideosFailure())
  }
}

// CREATE VIDEO
export const createVideo = async (video, dispatch) => {
  dispatch(createVideoStart())
  try {
    const res = await axios.post(`https://secure-savannah-93086.herokuapp.com/api/videos/create`, video, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(createVideoSuccess(res.data))
  } catch (error) {
    dispatch(createVideoFailure())
  }
}

// UPDATE VIDEO
export const updateVideo = async (video, dispatch) => {
  dispatch(updateVideoStart())
  try {
    const res = await axios.put(`https://secure-savannah-93086.herokuapp.com/api/videos/update/${video.id}`, video, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(updateVideoSuccess(res.data))
  } catch (error) {
    dispatch(updateVideoFailure())
  }
}

// DELETE VIDEO
export const deleteVideo = async (id, dispatch) => {
  dispatch(deleteVideoStart())
  try {
    await axios.delete(`https://secure-savannah-93086.herokuapp.com/api/videos/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteVideoSuccess(id))
  } catch (error) {
    dispatch(deleteVideoFailure())
  }
}