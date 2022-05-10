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