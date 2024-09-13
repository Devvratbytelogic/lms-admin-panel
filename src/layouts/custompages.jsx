import  {Fragment,useEffect } from 'react';
import {Outlet} from 'react-router-dom'
import * as Switcherdata from "../commondata/Switcherdata";
import Switcher from './layoutcomponents/Switcher';

export default function Custompages()  {

  useEffect(() => {
    Switcherdata.localStorageBackUp();
  },[]);

  document.querySelector("body").classList.remove("app", "sidebar-mini", "ltr", "light-mode");
 document.querySelector("body").classList.add("login-img");
  return (
    <Fragment>
    <div className="page login-page"> 
    <Switcher/>
      <Outlet />
      </div>
    </Fragment>
  );
}
