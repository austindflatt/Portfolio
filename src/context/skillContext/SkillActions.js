export const getSkillsStart = () => ({
	type: 'GET_SKILLS_START',
});

export const getSkillsSuccess = (skills) => ({
	type: 'GET_SKILLS_SUCCESS',
	payload: skills
});

export const getSkillsFailure = () => ({
	type: 'GET_SKILLS_FAILURE',
});

export const createSkillStart = () => ({
	type: 'CREATE_SKILL_START',
});

export const createSkillSuccess = (skill) => ({
	type: 'CREATE_SKILL_SUCCESS',
	payload: skill
});

export const createSkillFailure = () => ({
	type: 'CREATE_SKILL_FAILURE',
});

export const updateSkillStart = () => ({
	type: 'UPDATE_SKILL_START',
});

export const updateSkillSuccess = (skill) => ({
	type: 'UPDATE_SKILL_SUCCESS',
	payload: skill
});

export const updateSkillFailure = () => ({
	type: 'UPDATE_SKILL_FAILURE',
});

export const deleteSkillStart = () => ({
	type: 'DELETE_SKILL_START',
});

export const deleteSkillSuccess = (id) => ({
	type: 'DELETE_SKILL_SUCCESS',
	payload: id
});

export const deleteSkillFailure = () => ({
	type: 'DELETE_SKILL_FAILURE',
});