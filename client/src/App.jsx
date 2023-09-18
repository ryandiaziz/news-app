import { useState, useEffect } from 'react';
import ResponsiveAppBar from './components/AppBar'
import MainContent from './components/MainContent'
import { userAccount } from './services/auth.service';


function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userData, setUserData] = useState([]);

  const loginCbHandler = (result) => {
    setLoginStatus(result)
  }

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      userAccount(result => setUserData(result))
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  }, [loginStatus])
  return (
    <>
      <ResponsiveAppBar
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
        userData={userData}
      />
      <MainContent
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
        userData={userData}
      />
    </>
  )
}

export default App
