// src/components/ChartComponent.js
import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { fetchData } from '../utils/api';

ChartJS.register(LineElement, CategoryScale, LinearScale, BarElement);

const ChartComponent = ({ url, chartType = 'line', labels, datasets }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData(url);
      if (data && Array.isArray(data)) {
        setChartData({
          labels: labels || data.map(item => item.label),
          datasets: datasets || [
            {
              label: 'Dataset',
              data: data.map(item => item.value),
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            },
          ],
        });
      } else {
        setChartData(null); // Handle undefined data
      }
    };

    loadData();
  }, [url, labels, datasets]);

  if (!chartData) {
    return <div>Loading...</div>; // Or any other fallback UI
  }

  return (
    <div>
      {chartType === 'line' ? <Line data={chartData} /> : <Bar data={chartData} />}
    </div>
  );
};

export default ChartComponent;
