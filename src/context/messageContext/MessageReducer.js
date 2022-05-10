const MessageReducer = (state, action) => {
	switch (action.type){
	  case "GET_MESSAGES_START":
      return {
        messages: [],
        isFetching: true,
        error: false
      };
	  case "GET_MESSAGES_SUCCESS":
      return {
        messages: action.payload,
        isFetching: false,
        error: false
      };
	  case "GET_MESSAGES_FAILURE":
      return {
        messages: [],
        isFetching: false,
        error: true
      };
    case "DELETE_MESSAGE_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case "DELETE_MESSAGE_SUCCESS":
      return {
        messages: state.messages.filter((message) => message._id !== action.payload),
        isFetching: false,
        error: false
      };
    case "DELETE_MESSAGE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return { ...state }
  }
}
  
export default MessageReducer;