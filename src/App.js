// src/App.js
import React from 'react';
import GeographicalDistribution from './components/GeographicalDistribution';
import CustomerLifetimeValue from './components/CustomerLifetimeValue';
import NewCustomersPerMonth from './components/NewCustomersPerMonth';
import RepeatCustomers from './components/RepeatCustomers';
import SalesGrowth from './components/SalesGrowth';
import TotalSalesDaily from './components/TotalSalesDaily';

function App() {
  return (
    <div className="App">
      <h1>Shopify Analytics Dashboard</h1>
      <GeographicalDistribution />
      <CustomerLifetimeValue />
      <NewCustomersPerMonth />
      <RepeatCustomers />
      <SalesGrowth />
      <TotalSalesDaily />
    </div>
  );
}

export default App;
