import React from "react";
//const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Product = React.lazy(() => import("./views/Products"));
const IncomeStreams = React.lazy(() => import("./views/IncomeStreams"));
const RevenueStream = React.lazy(() => import("./views/RevenueStreams"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "IncomeStreams" },
  { path: "/product", name: "Product", component: Product },
  { path: "/income-streams", name: "IncomeStreams", component: IncomeStreams },
  { path: "/dashboard", name: "IncomeStreams", component: IncomeStreams },
  { path: "/revenue", name: "RevenueStreams", component: RevenueStream }
];
export default routes;
