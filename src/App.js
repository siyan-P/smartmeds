import React, { Fragment } from "react";
import Login from "./Components/Login/Login";
import SignUp from "./Pages/Registration/SignUp";
import { Routes, Route, useNavigate } from "react-router-dom";
import ScreenSplash from "./Pages/ScreenSplash/ScreenSplash";
import ScreenHome from "./Pages/ScreenHome/ScreenHome";
import HistoryMedication from "./Pages/ScreenHome/HistoryMedication/HistoryMedication";
import { ToastContainer } from 'react-toastify';


function App() {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/login");
  };
  //const[pageState,setPageState]=useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() =>{
  //   const StoredLocalStorageValue = localStorage.getItem('LoggedIn');
  //   if(StoredLocalStorageValue === '1'){
  //     setIsLoggedIn(true);
  //   }
  // },[]);

  // const pageStateHandler = () =>{
  //   setPageState('signUp')
  // }
  // const loginHandler = (email, password) => {

  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('LoggedIn');
  //   setIsLoggedIn(false);
  // };

  // const navigate= useNavigate();

  // function handleClick() {
  //   navigation('/SignUp');
  // }
  return (
    // <AuthContext.Provider value={{
    //   isLoggedIn: isLoggedIn
    // }}>
    <Fragment>
      <Routes>
        {/* <Route path="/" element={<ScreenSplash />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<ScreenHome />} />
        <Route path="/history" element={<HistoryMedication />} />
      </Routes>
      <ToastContainer/>
    </Fragment>
  );
}

export default App;
