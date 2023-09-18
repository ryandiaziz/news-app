import { HomePage, ErrorPage, SignInPage, SignUpPage, ArticlePage, NasionalPage } from "../pages"
import { Routes, Route } from 'react-router-dom'

const MainContent = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<ErrorPage />} />
                <Route path="" element={
                    <HomePage />} />
                <Route path="login" element={<SignInPage />} />
                <Route path="nasional" element={<NasionalPage />} />
                <Route path="register" element={<SignUpPage />} />
                <Route path="article/:title" element={<ArticlePage />} />
            </Routes>
        </>
    )
}

export default MainContent