import axios from 'axios';
import { 
  updateAboutStart,
  updateAboutSuccess,
  updateAboutFailure,
  getAboutFailure, 
  getAboutStart, 
  getAboutSuccess 
} from './AboutActions';

// GET ABOUT DATA
export const getAbout = async (dispatch) => {
  dispatch(getAboutStart())
  try {
    const res = await axios.get('https://secure-savannah-93086.herokuapp.com/api/about/find/624e72b4c2ce0e16eca4f860')
    dispatch(getAboutSuccess(res.data.payload))
  } catch (error) {
    dispatch(getAboutFailure())
  }
}

// UPDATE ABOUT DATA
export const updateAbout = async (about, dispatch) => {
  dispatch(updateAboutStart())
  try {
    const res = await axios.put(`https://secure-savannah-93086.herokuapp.com/api/about/update/${about.id}`, about, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(updateAboutSuccess(res.data))
  } catch (error) {
    dispatch(updateAboutFailure())
  }
}