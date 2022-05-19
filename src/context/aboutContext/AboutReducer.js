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
    case "UPDATE_ABOUT_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "UPDATE_ABOUT_SUCCESS":
      return {
        abouts: action.payload,
        isFetching: false,
        error: false
      };
    case "UPDATE_ABOUT_FAILURE":
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