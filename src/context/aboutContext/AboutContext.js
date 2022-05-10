import AboutReducer from './AboutReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  projects: [],
  isFetching: false,
  error: false,
}

export const AboutContext = createContext(INITIAL_STATE);

export const AboutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AboutReducer, INITIAL_STATE);

  return (
    <AboutContext.Provider
      value={{ 
        about: state.about,
        isFetching: state.isFetching, 
        error: state.error, 
        dispatch 
      }}
    >
      {children}
    </AboutContext.Provider>
  )
}