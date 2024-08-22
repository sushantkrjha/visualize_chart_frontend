import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchData } from '../utils/api';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement
);

const ChartComponent = ({ url, chartType = 'line', labels, datasets }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData(url)
      
      
      if (data && Array.isArray(data.data)) {
        
        
        const fetchedLabels = labels || data.data.map(item => {
          const firstKey = Object.keys(item)[0];
          return item[firstKey];
        });
        const fetchedData = datasets || [{
          label: 'Customer Count',
          data: data.data.map(item => {
            const secondKey = Object.keys(item)[1];
            return item[secondKey];
          }),
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        }];

        setChartData({
          labels: fetchedLabels,
          datasets: fetchedData,
        });
      }
    };
    
    loadData();
  }, [url, labels, datasets]);

  if (!chartData || !chartData.labels || !chartData.datasets) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {chartType === 'line' ? <Line data={chartData} /> : <Bar data={chartData} />}
    </div>
  );
};

export default ChartComponent;