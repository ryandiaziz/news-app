/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUser } from './redux/authSlice';
import ResponsiveAppBar from './components/AppBar'
import MainContent from './components/MainContent'
import Loader from './components/Loader';


function App() {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      dispatch(fetchUser(token))
    }

  }, [])
  return (
    <>
      {
        loading.fetch
          ? <Loader />
          : <><ResponsiveAppBar />
            <MainContent />
          </>
      }

    </>
  )
}

export default App
