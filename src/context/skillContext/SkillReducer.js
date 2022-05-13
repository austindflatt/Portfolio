const SkillReducer = (state, action) => {
	switch (action.type){
	  case "GET_SKILLS_START":
      return {
        skills: [],
        isFetching: true,
        error: false
      };
	  case "GET_SKILLS_SUCCESS":
      return {
        skills: action.payload,
        isFetching: false,
        error: false
      };
	  case "GET_SKILLS_FAILURE":
      return {
        skills: [],
        isFetching: false,
        error: true
      };
    case "CREATE_SKILL_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "CREATE_SKILL_SUCCESS":
      return {
        skills: [...state.skills, action.payload],
        isFetching: false,
        error: false
      };
    case "CREATE_SKILL_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case "UPDATE_SKILL_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "UPDATE_SKILL_SUCCESS":
      return {
        skills: action.payload,
        isFetching: false,
        error: false
      };
    case "UPDATE_SKILL_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case "DELETE_SKILL_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "DELETE_SKILL_SUCCESS":
      return {
        skills: state.skills.filter((skill) => skill._id !== action.payload),
        isFetching: false,
        error: false
      };
    case "DELETE_SKILL_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return { ...state }
  }
}
  
export default SkillReducer;