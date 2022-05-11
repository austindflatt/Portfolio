import axios from 'axios';
import { 
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
export const updateAbout = async () => {
  try {
    await axios.put('https://secure-savannah-93086.herokuapp.com/api/about/update/624e72b4c2ce0e16eca4f860', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
  } catch (error) {
    console.log(error.response)
  }
}