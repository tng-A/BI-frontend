import React from "react";
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Product = React.lazy(() => import("./views/Products"));
const IncomeStreams = React.lazy(() => import("./views/IncomeStreams"));
const RevenueStream = React.lazy(() => import("./views/RevenueStreams"));
const page404 = React.lazy(()=> import("./views/404"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "IncomeStreams" },
  { path: "/product/:productID", name: "Product", component: Product },
  { path: "/income-streams/:incomeStreamID", name: "IncomeStreams", component: IncomeStreams },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/revenue/:revenueID", name: "RevenueStreams", component: RevenueStream }, 
  {path: "/404", name:"404Page", component: page404}

];
export default routes;
