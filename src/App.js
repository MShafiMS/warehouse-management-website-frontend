
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from "./Pages/RequireAuth/RequireAuth"
import Home from './Pages/Home/Home';
import Recommendation from './Pages/Home/Recommendation/Recommendation';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddItem from './Pages/AddItem/AddItem';
import MyItem from './Pages/MyItem/MyItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/recommendation' element={<Recommendation></Recommendation>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path='/manageinventories' element={
          <RequireAuth><ManageItem></ManageItem></RequireAuth>
        }></Route>
        <Route path='/addinventories' element={
          <RequireAuth><AddItem></AddItem></RequireAuth>
        }></Route>
        <Route path='/myinventories' element={
          <RequireAuth><MyItem></MyItem></RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
