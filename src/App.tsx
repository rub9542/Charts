import React from 'react';
import BarSample from './Components/BarChart.js'
import './App.css';
import DonutSample from './Components/Donut.js';
import PieSample from './Components/PieChart.js';
import LineSample from './Components/LineChart.js';
import ChartContainer from './Components/Funnel.js'
import BasicTable from './Components/Table.js'
import ProgressSample from './Components/Progress.js';
function App() {
  return (
    <div className="App">
      <div className='chart'>
        <DonutSample/>
        <PieSample/>
      </div>
      <div className='chart'>
        <BarSample/>
        <ChartContainer/>
      </div>
      <div className='table-chart'>
        <BasicTable/>
      </div>
      <div className='progress-app'>
        <ProgressSample/>
      </div>
      <div className='progress-app'>
        <LineSample/>
      </div>
    </div>
  );
}

export default App;

