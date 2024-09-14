import React, { Fragment } from "react";
import Header from "./layoutcomponents/header";
import Sidebar from "./layoutcomponents/sidebar";
import Footer from "./layoutcomponents/footer";
import Switcher from "./layoutcomponents/Switcher";
import RightSidebar from "./layoutcomponents/rightsidebar";
import * as Switcherdata from "../commondata/Switcherdata";
import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App() {

  document.querySelector("body")?.classList.add("app", "sidebar-mini", "ltr", "light-mode");
  document.querySelector("body")?.classList.remove("login-img");

  return (
    <Fragment>
      <Provider store={store}>
        <div className="horizontalMenucontainer">
          <Switcher />
          <div className="page">
            <div className="page-main">
              <Header />
              <Sidebar />
              <div className="main-content app-content ">
                <div className="side-app">
                  <div className="main-container container-fluid"
                    onClick={() => {
                      Switcherdata.responsiveSidebarclose();
                      Switcherdata.Horizontalmenudefultclose();
                    }}>
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
            <RightSidebar />
            <Footer />
          </div>
        </div>
      </Provider>
    </Fragment>
  );
}

