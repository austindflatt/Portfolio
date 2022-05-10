import SkillReducer from './SkillReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  skills: [],
  isFetching: false,
  error: false,
}

export const SkillContext = createContext(INITIAL_STATE);

export const SkillContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SkillReducer, INITIAL_STATE);

  return (
    <SkillContext.Provider
      value={{ 
        skills: state.skills,
        isFetching: state.isFetching, 
        error: state.error, 
        dispatch 
      }}
    >
        {children}
    </SkillContext.Provider>
  )
}