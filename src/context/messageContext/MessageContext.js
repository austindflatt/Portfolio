import MessageReducer from './MessageReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  messages: [],
  isFetching: false,
  error: false,
}

export const MessageContext = createContext(INITIAL_STATE);

export const MessageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MessageReducer, INITIAL_STATE);

  return (
    <MessageContext.Provider
      value={{ 
        messages: state.messages,
        isFetching: state.isFetching, 
        error: state.error, 
        dispatch 
      }}
    >
        {children}
    </MessageContext.Provider>
  )
}