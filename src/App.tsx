// import { useState } from 'react'
import "/src/null.css"
import './App.css'
import { Dispatch, createContext} from "react"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { Provider } from "react-redux"
import { store } from "./redux/store"


type ContextType = {
  theme: string ,
  setTheme : Dispatch<React.SetStateAction<string>>; 
}

export const ThemeContext = createContext <ContextType | null>(null);


function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
    );
};
export default App;






  // const [filteredValue , setFilterValue] = useState("")

  // const [theme , setTheme] = useState("light")


  // const windowSize = useDeviceType()



{/* <ThemeContext.Provider value={{theme  , setTheme}}>
<div className={`conteiner ${theme}`}>
   <Header />
   <Example />
   <Cards filteredValue = {filteredValue} />
</div>
</ThemeContext.Provider> */}









