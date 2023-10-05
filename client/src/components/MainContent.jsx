/* eslint-disable react/prop-types */
import { Routes, Route } from 'react-router-dom'
import {
    InternasionalPage,
    ErrorPage,
    SignInPage,
    SignUpPage,
    ArticlePage,
    NasionalPage,
    LikePage,
    ProfilePage
} from "../pages"

const MainContent = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<ErrorPage />} />
                <Route path="" element={
                    <InternasionalPage />} />
                <Route path="login" element={<SignInPage />}
                />
                <Route path="nasional" element={<NasionalPage />} />
                <Route path="register" element={<SignUpPage />} />
                <Route path="article/:title" element={<ArticlePage />} />
                <Route path="liked" element={<LikePage />} />
                <Route path='profiles' element={<ProfilePage />} />
            </Routes>
        </>
    )
}

export default MainContent