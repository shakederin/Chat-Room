import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element = {<Chat/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
