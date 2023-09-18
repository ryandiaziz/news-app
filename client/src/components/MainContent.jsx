/* eslint-disable react/prop-types */
import { HomePage, ErrorPage, SignInPage, SignUpPage, ArticlePage, NasionalPage, LikePage } from "../pages"
import { Routes, Route } from 'react-router-dom'

const MainContent = ({ loginStatus, loginCbHandler, userData, }) => {
    return (
        <>
            <Routes>
                <Route path="*" element={<ErrorPage />} />
                <Route path="" element={
                    <HomePage userData={userData} />} />
                <Route path="login" element={<SignInPage
                    loginStatus={loginStatus}
                    loginCbHandler={loginCbHandler}
                    userData={userData} />}
                />
                <Route path="nasional" element={<NasionalPage />} />
                <Route path="register" element={<SignUpPage loginCbHandler={loginCbHandler} />} />
                <Route path="article/:title" element={<ArticlePage
                    loginStatus={loginStatus}
                    userData={userData}
                />} />
                <Route path="liked" element={<LikePage />} />
            </Routes>
        </>
    )
}

export default MainContent