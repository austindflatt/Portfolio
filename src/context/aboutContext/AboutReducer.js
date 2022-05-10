const AboutReducer = (state, action) => {
	switch (action.type){
	  case "GET_ABOUT_START":
      return {
        about: [],
        isFetching: true,
        error: false
      };
	  case "GET_ABOUT_SUCCESS":
      return {
        about: action.payload,
        isFetching: false,
        error: false
      };
	  case "GET_ABOUT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return { ...state }
  }
}
  
export default AboutReducer;