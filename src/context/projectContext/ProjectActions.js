export const getProjectsStart = () => ({
	type: 'GET_PROJECTS_START',
});

export const getProjectsSuccess = (projects) => ({
	type: 'GET_PROJECTS_SUCCESS',
	payload: projects
});

export const getProjectsFailure = () => ({
	type: 'GET_PROJECTS_FAILURE',
});

export const createProjectStart = () => ({
	type: 'CREATE_PROJECT_START',
});

export const createProjectSuccess = (project) => ({
	type: 'CREATE_PROJECT_SUCCESS',
	payload: project
});

export const createProjectFailure = () => ({
	type: 'CREATE_PROJECT_FAILURE',
});

export const updateProjectStart = () => ({
	type: 'UPDATE_PROJECT_START',
});

export const updateProjectSuccess = (project) => ({
	type: 'UPDATE_PROJECT_SUCCESS',
	payload: project
});

export const updateProjectFailure = () => ({
	type: 'UPDATE_PROJECT_FAILURE',
});

export const deleteProjectStart = () => ({
	type: 'DELETE_PROJECT_START',
});

export const deleteProjectSuccess = (id) => ({
	type: 'DELETE_PROJECT_SUCCESS',
	payload: id
});

export const deleteProjectFailure = () => ({
	type: 'DELETE_PROJECT_FAILURE',
});