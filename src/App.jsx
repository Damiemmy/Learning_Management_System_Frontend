import { Route,Routes,BrowserRouter } from "react-router-dom"
import MainWrapper from "./layouts/MainWrapper"
import PrivateRoute from "./layouts/PrivateRoute"
import Register from "./views/auth/Register"
import Login from "./views/auth/Login"

function App() {
  return (
   <BrowserRouter>
    <MainWrapper>
      <Routes>
        <Route path="/register/" element={<Register/>}/>
        <Route path="/login/" element={<Login/>}/>
      </Routes>
    </MainWrapper>
   </BrowserRouter>
   
  )
}

export default App
