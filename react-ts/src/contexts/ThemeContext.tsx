import { PropTypes } from '@material-ui/core'
import { createContext, ReactNode, useState } from 'react'


interface ThemeContextProps {
  children: ReactNode
}

interface ThemeContextDefaultProps {
  theme: PropTypes.Color
}

const themeContextDefaultData = {
  theme: 'secondary' as PropTypes.Color
}

export const ThemeContext = createContext<ThemeContextDefaultProps>(themeContextDefaultData)

const ThemeContextProvider = ({children}: ThemeContextProps) => {
  const [theme, setTheme] = useState<PropTypes.Color>(themeContextDefaultData.theme)

  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);

  const themeContextDynamicData = {theme, toggleTheme}

  return <ThemeContext.Provider value={themeContextDynamicData}>
    {children}
  </ThemeContext.Provider>
}
export default ThemeContextProvider;