import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import SingleComicLayout from "../pages/SingleComicPage";
import SingleCharacterLayout from "../pages/SingleCharacterPage";

const Error404 = lazy(() => import("../pages/ErrorPage404"))
const Home = lazy(() => import("../pages/HomePage"))
const SinglePage = lazy(() => import("../pages/SinglePage"))
const Comics = lazy(() => import("../pages/ComicsPage"))



function App() {
    const location = useLocation()
    // const currentOutlet = useOutlet()

    return (
        <div className="app">
            <AppHeader/>
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    // nodeRef={nodeRef}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                    mountOnEnter
                >
                    <main className="page">
                        <Suspense fallback={<Spinner/>}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character' />} />
                                <Route path="/comics" element={<Comics />} />
                                <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic' />} /> 
                                <Route path="*" element={<Error404 />} />
                            </Routes>
                        </Suspense>
                    </main>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default App;