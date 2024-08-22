// src/components/TotalSalesDaily.js
import React from 'react';
import ChartComponent from './ChartComponent';

const TotalSalesDaily = () => {
  const url = 'http://127.0.0.1:8000/analytics/total-sales/daily/';

  return (
    <ChartComponent
      url={url}
      chartType="line"
    />
  );
};

export default TotalSalesDaily;
