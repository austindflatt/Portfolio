export const getAboutStart = () => ({
	type: 'GET_ABOUT_START',
});

export const getAboutSuccess = (about) => ({
	type: 'GET_ABOUT_SUCCESS',
	payload: about
});

export const getAboutFailure = () => ({
	type: 'GET_ABOUT_FAILURE',
});

export const updateAboutStart = () => ({
	type: 'UPDATE_ABOUT_START',
});

export const updateAboutSuccess = (about) => ({
	type: 'UPDATE_PROJECT_SUCCESS',
	payload: about
});

export const updateAboutFailure = () => ({
	type: 'UPDATE_ABOUT_FAILURE',
});