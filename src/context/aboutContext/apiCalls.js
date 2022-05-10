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
    const res = await axios.get('https://secure-savannah-93086.herokuapp.com/api/about/find/624e72b4c2ce0e16eca4f860', {
      headers: {
        token: 'Bearer ' + JSON.stringify(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getAboutSuccess(res.data))
  } catch (error) {
    dispatch(getAboutFailure())
  }
}