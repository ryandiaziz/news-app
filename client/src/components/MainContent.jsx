/* eslint-disable react/prop-types */
import { Routes, Route } from 'react-router-dom'
import {
    InternasionalPage,
    ErrorPage,
    SignInPage,
    SignUpPage,
    ArticlePage,
    NasionalPage,
    LikePage
} from "../pages"

const MainContent = ({ loginStatus, loginCbHandler, userData, }) => {
    return (
        <>
            <Routes>
                <Route path="*" element={<ErrorPage />} />
                <Route path="" element={
                    <InternasionalPage userData={userData} />} />
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