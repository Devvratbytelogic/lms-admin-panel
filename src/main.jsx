import React, { Fragment, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './layouts/App'
import Loader from './layouts/layoutcomponents/loader';
import './index.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {RouterData} from './commondata/routingdata';
import Dashboard from './components/dashboard/dashboard';
const Custompages = lazy(() => import("./layouts/custompages"));

//Errorpages
const Errorpage400 = lazy(()=>import("./components/CustomPages/ErrorPages/400/400"));


ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
  <BrowserRouter>
  <React.Suspense fallback={<Loader/>}>
    <Routes>
 <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            <Route index element={<Dashboard/>} />
       {RouterData.map((idx) => (
              <Route path={idx.path} element={idx.element} key={Math.random()} />
          ))};
          </Route>
      <Route path={`${import.meta.env.BASE_URL}`} element={<Custompages />}>
        <Route path={`${import.meta.env.BASE_URL}custompages/errorpages/errorpage400`} element={<Errorpage400 />}/>
      </Route>
    </Routes>
    </React.Suspense>
  </BrowserRouter>
</Fragment>
  
)
