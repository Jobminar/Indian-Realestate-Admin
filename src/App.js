
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homeagent from './components/Home/Home';
import Header from './components/Header/Header';
import MyAgents from './components/Myagents/Myagents';
import Signup from './components/signup/signup';
import Login from './components/Login/Login';
import Listingrequest from "./components/ListingRequest/Listingrequest.js";
import Viewdocuments from './components/Viewdocuments/viewdocuments.js'
import Valuationrequest from "./components/Valuationrequest/Valuationrequest.js"
import Myclients from "./components/MyClinets/Myclients.js";
import Mylandlords from "./components/MyLandLords/Mylandlords.js";
import Mytenats from "./components/MyTenants/Mytenats.js";
import Myrentalrequests from "./components/Myrental/myrentalrequests.jsx";
// import Listaproperty from "./components/Lista-property/Lista-property";
import Mylistedproperties from "./components/Mylistedproperties/mylistedproperties.jsx";




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
      <Route path='/valuationrequest' element={<Valuationrequest/>}/>
      <Route path="/listingrequest" element={<Listingrequest/>} />      
      <Route path="/valuationrequest" element={<Valuationrequest/>}/>
      <Route path="/myclients" element={<Myclients />} />
      <Route path="/mylandlords" element={<Mylandlords />}/>
      <Route path="/mytenats" element={<Mytenats />} />
      <Route path="/myrentalrequests" element={<Myrentalrequests/>}/>
      {/* <Route path="/listaproperty" element={<Listaproperty/>}/> */}
      <Route path="/mylistedproperties" element={<Mylistedproperties />}/>



    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
