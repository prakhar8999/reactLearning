import { useState, useEffect } from 'react'
import './App.css'
import Theme from './components/Theme'
import Card from './components/Card'
import { ThemeContextProvider } from './context/theme'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1 className=' bg-slate-500 text-3xl font-bold '>Theme Switcher Using React Context API</h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Theme />                    
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />              
          </div>
        </div>
      </div>
      </ThemeContextProvider>
  )
}

export default App
