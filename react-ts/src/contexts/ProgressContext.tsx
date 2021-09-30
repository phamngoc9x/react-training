import { createContext, ReactNode } from 'react';

interface ProgressContextProviderProps {
  children: ReactNode
}

interface ProgressContextDefaultProps {
  lastTime: string,
  status: string
}

const ProgressDefault = {
  lastTime: '25/09/2021',
  status: 'Close'
}

export const ProgressContext = createContext<ProgressContextDefaultProps>(ProgressDefault)

const ProgressContextProvider = ({children} : ProgressContextProviderProps ) => {
  return (
    <ProgressContext.Provider value={ProgressDefault}>
      {children}
    </ProgressContext.Provider>
  )
}

export default ProgressContextProvider;