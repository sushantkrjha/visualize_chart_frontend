// src/components/GeographicalDistribution.js
import React from 'react';
import ChartComponent from './ChartComponent';

const GeographicalDistribution = () => {
  const url = 'http://127.0.0.1:8000/analytics/geographical-distribution/';

  return (
    <ChartComponent
      url={url}
      chartType="bar" // Assuming geographical data is better suited for bar charts
      labels={null} // Customize if needed
      datasets={null} // Customize if needed
    />
  );
};

export default GeographicalDistribution;
