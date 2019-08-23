import React from 'react';
//const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Product = React.lazy(() => import('./views/Products'));
const IncomeStreams = React.lazy(() => import('./views/IncomeStreams'));
const Enterprise = React.lazy(() => import('./views/Enterprise/Enterprise'));
const GovermentBusiness = React.lazy(() => import('./views/GovermentBusiness'));
const County = React.lazy(() => import('./views/County'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'IncomeStreams' },
  { path: '/product', name: 'Product', component: Product },
  { path: '/income-streams', name: 'IncomeStreams', component: IncomeStreams },
  {
    path: '/enterprise',
    exact: true,
    name: 'Enterprise',
    component: Enterprise
  },
  {
    path: '/goverment-business',
    exact: true,
    name: 'GovermentBusiness',
    component: GovermentBusiness
  },
  {
    path: '/embu',
    exact: true,
    name: 'County',
    component: County
  },
  { path: '/dashboard', name: 'IncomeStreams', component: IncomeStreams },
  
];

export default routes;
