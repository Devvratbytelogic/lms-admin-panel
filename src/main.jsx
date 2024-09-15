import React, { Fragment, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './layouts/App'
import Loader from './layouts/layoutcomponents/loader';
import './index.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouterData } from './commondata/routingdata';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import '@fontsource/poppins';
const Switcherlayout = lazy(() => import("./layouts/switcherlayout"));
const Custompages = lazy(() => import("./layouts/custompages"));
//custom Pages
const Login = lazy(() => import("./components/custompages/login/login"));
const Register = lazy(() => import("./components/custompages/register/register"));
const ForgotPassword = lazy(() => import("./components/custompages/forgotpassword/forgotpassword"));
const LockScreen = lazy(() => import("./components/custompages/lockscreen/lockscreen"));
//Errorpages
const Errorpage400 = lazy(() => import("./components/custompages/errorpages/400/400"));
const Errorpage401 = lazy(() => import("./components/custompages/errorpages/401/401"));
const Errorpage403 = lazy(() => import("./components/custompages/errorpages/403/403"));
const Errorpage500 = lazy(() => import("./components/custompages/errorpages/500/500"));
const Errorpage503 = lazy(() => import("./components/custompages/errorpages/503/503"));

const Auth = lazy(() => import('./layouts/firebase/firebaseauth/auth'))
const Authlogin = lazy(() => import('./layouts/firebase/firebaseauth/authlogin'))
const Signup = lazy(() => import('./layouts/firebase/firebaseauth/signup'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<Loader />}>
          <Routes>

            <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />} >
              <Route index element={<Authlogin />} />
              <Route path={`${import.meta.env.BASE_URL}firebaseauth/authlogin`} element={<Authlogin />} />
              <Route path={`${import.meta.env.BASE_URL}firebaseauth/signup`} element={<Signup />} />
            </Route>

            {RouterData.map((idx) => (
              <Route path={`${import.meta.env.BASE_URL}`} element={<App />} key={Math.random()}>
                <Route path={idx.path} element={idx.element} />
              </Route>
            ))};
            <Route
              path={`${import.meta.env.BASE_URL}pages/themeStyle`} element={<Switcherlayout />} />
            <Route
              path={`${import.meta.env.BASE_URL}`} element={<Custompages />}>
              <Route path={`${import.meta.env.BASE_URL}custompages/login`} element={<Login />} />
              <Route path={`${import.meta.env.BASE_URL}custompages/register`} element={<Register />} />
              <Route path={`${import.meta.env.BASE_URL}custompages/forgotpassword`} element={<ForgotPassword />} />
              <Route path={`${import.meta.env.BASE_URL}custompages/lockscreen`} element={<LockScreen />} />
              <Route path={`${import.meta.env.BASE_URL}custompages/errorpages/errorpage401`} element={<Errorpage401 />} />
              <Route path={`${import.meta.env.BASE_URL}custompages/errorpages/errorpage403`} element={<Errorpage403 />} />
              <Route path={`${import.meta.env.BASE_URL}custompages/errorpages/errorpage500`} element={<Errorpage500 />} />
              <Route path={`${import.meta.env.BASE_URL}custompages/errorpages/errorpage503`} element={<Errorpage503 />} />
              <Route path="*" element={<Errorpage400 />} />
            </Route>
          </Routes>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  </Fragment>

)
