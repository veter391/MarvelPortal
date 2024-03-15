import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";


const Error404 = lazy(() => import("../pages/ErrorPage404"))
const Home = lazy(() => import("../pages/HomePage"))
const Comics = lazy(() => import("../pages/ComicsPage"))
const SingleComic = lazy(() => import("../pages/SingleComicPage"))



function App() {

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/comics" element={<Comics />} />
                        <Route path="/comics/:comicId" element={<SingleComic />} /> 
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}

export default App;