import { createContext, useContext, useEffect, useState } from 'react'

const getInitialTheme = () => {
  // FIXIME(euforic): fix theme provider to work with dark mode
  return 'light'

  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  // If you want to use dark theme as the default, return 'dark' instead
  return 'light'
}

export const ThemeContext = createContext({ theme: 'light', enabled: false, setTheme: (theme: string) => {} })

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ initialTheme, children }: any) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (rawTheme: any) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')

    localStorage.setItem('color-theme', rawTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={{ enabled: false, theme, setTheme }}>{children}</ThemeContext.Provider>
}
