
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homeagent from './components/Home/Home';
import Header from './components/Header/Header';
import MyAgents from './components/Myagents/Myagents';
import Signup from './components/signup/signup';
import Login from './components/Login/Login';
import Listingrequest from "./components/ListingRequest/Listingrequest.js";
import Viewdocuments from './components/Viewdocuments/viewdocuments.js'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Homeagent />} />
      <Route path='/myagents' element={<MyAgents />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='/listingrequest' element={<} */}
      <Route path="/viewdocuments" element={<Viewdocuments/>}/>
      <Route path="/listingrequest" element={<Listingrequest/>} />      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
