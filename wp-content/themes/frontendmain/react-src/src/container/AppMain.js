import React from "react";
import AppNavbar from "./AppNavbar";

const AppMain = () => {
  return (
    <div className="app-main">
      <AppNavbar />
      {/* <AppSidebar /> */}
      <div className="app-content">
        <h1>APP CONTENT</h1>
      </div>
      {/* <AppFooter /> */}
    </div>
  );
};

export default AppMain;
