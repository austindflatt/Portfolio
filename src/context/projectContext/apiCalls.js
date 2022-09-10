import axios from 'axios';
import { 
  updateProjectStart,
  updateProjectSuccess,
  updateProjectFailure,
  createProjectStart,
  createProjectSuccess,
  createProjectFailure,
  deleteProjectFailure, 
  deleteProjectStart, 
  deleteProjectSuccess, 
  getProjectsFailure, 
  getProjectsStart, 
  getProjectsSuccess 
} from './ProjectActions';

// GET PROJECTS
export const getProjects = async (dispatch) => {
  dispatch(getProjectsStart())
  try {
    const res = await axios.get('http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/projects')
    dispatch(getProjectsSuccess(res.data))
  } catch (error) {
    dispatch(getProjectsFailure())
  }
}

// CREATE PROJECT
export const createProject = async (project, dispatch) => {
  dispatch(createProjectStart())
  try {
    const res = await axios.post(`http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/projects/create`, project, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(createProjectSuccess(res.data))
  } catch (error) {
    dispatch(createProjectFailure())
  }
}

// UPDATE PROJECT
export const updateProject = async (project, dispatch) => {
  dispatch(updateProjectStart())
  try {
    const res = await axios.put(`http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/projects/update/${project.id}`, project, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(updateProjectSuccess(res.data))
  } catch (error) {
    dispatch(updateProjectFailure())
  }
}

// DELETE PROJECT
export const deleteProject = async (id, dispatch) => {
  dispatch(deleteProjectStart())
  try {
    await axios.delete(`http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/projects/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteProjectSuccess(id))
  } catch (error) {
    dispatch(deleteProjectFailure())
  }
}