import React from "react";

const Home = React.lazy(() => import("./views/Home"));

const routes = [
    { path: "/", name: "Home", exact: true, component: Home },
    
];

export default routes;
