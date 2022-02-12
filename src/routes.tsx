import React, { ReactElement } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import ProtectedRoutesWrapper from "./common/components/ProtectedRoutesWrapper"
import {
        PATH_LOGIN,
        PATH_MAIN,
} from "./common/constants/web-site-route.constants"
import CompanyLogo from "./common/components/CompanyLogo"
import Login from "./pages/login/Login"
import { RemoveSessionRedirect } from "./common/components/RemoveSessionRedirect"
const WebSiteRoutes = (): ReactElement => {
        return (
                <Router>
                        {/* <React.Fragment> */}
                        <Routes>
                                <Route path={PATH_LOGIN} element={<Login />} />
                                <Route
                                        path={PATH_MAIN}
                                        element={
                                                <ProtectedRoutesWrapper>
                                                        <CompanyLogo />
                                                </ProtectedRoutesWrapper>
                                        }
                                />

                                <Route
                                        element={
                                                <ProtectedRoutesWrapper>
                                                        <RemoveSessionRedirect />
                                                </ProtectedRoutesWrapper>
                                        }
                                        path="*"
                                />
                        </Routes>
                        {/* </React.Fragment> */}
                </Router>
        )
}

export default WebSiteRoutes
