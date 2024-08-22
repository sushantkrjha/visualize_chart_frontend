// src/components/SalesGrowth.js
import React from 'react';
import ChartComponent from './ChartComponent';

const SalesGrowth = () => {
  const url = 'http://127.0.0.1:8000/analytics/sales-growth/';

  return (
    <ChartComponent
      url={url}
      chartType="line"
    />
  );
};

export default SalesGrowth;
