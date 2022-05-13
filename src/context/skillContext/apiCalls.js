import axios from 'axios';
import { 
  createSkillStart,
  createSkillSuccess,
  createSkillFailure,
  updateSkillStart,
  updateSkillSuccess,
  updateSkillFailure,
  deleteSkillStart, 
  deleteSkillSuccess, 
  deleteSkillFailure, 
  getSkillsFailure, 
  getSkillsStart, 
  getSkillsSuccess 
} from './SkillActions';

// GET SKILLS
export const getSkills = async (dispatch) => {
  dispatch(getSkillsStart())
  try {
    const res = await axios.get('https://secure-savannah-93086.herokuapp.com/api/skills', {
      headers: {
        token: 'Bearer' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getSkillsSuccess(res.data))
  } catch (error) {
    dispatch(getSkillsFailure())
  }
}

// CREATE SKILL
export const createSkill = async (skill, dispatch) => {
  dispatch(createSkillStart())
  try {
    const res = await axios.post(`https://secure-savannah-93086.herokuapp.com/api/skills/create`, skill, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(createSkillSuccess(res.data))
  } catch (error) {
    dispatch(createSkillFailure())
  }
}

// UPDATE SKILL
export const updateSkill = async (skill, dispatch) => {
  dispatch(updateSkillStart())
  try {
    const res = await axios.put(`https://secure-savannah-93086.herokuapp.com/api/skills/update/${skill.id}`, skill, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(updateSkillSuccess(res.data))
  } catch (error) {
    dispatch(updateSkillFailure())
  }
}

// DELETE SKILL
export const deleteSkill = async (id, dispatch) => {
  dispatch(deleteSkillStart())
  try {
    await axios.delete(`https://secure-savannah-93086.herokuapp.com/api/skills/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteSkillSuccess(id))
  } catch (error) {
    dispatch(deleteSkillFailure())
  }
}