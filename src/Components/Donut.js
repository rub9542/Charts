import React from 'react';
import ReactDOM from 'react-dom';
import Donut from 'react-donut';

export default function DonutSample() {
  return (
    <div className="App-donut">
      <h1>Charts</h1>
      <Donut
              chartData={[
                  { name: 'Black Panther', data: 30 },
                  { name: 'Avengers', data: 50 },
                  { name: 'Antman', data: 20 },
              ]}
              chartWidth={300}
              chartHeight={500}
              title="Marvel movies that were popular this year"
              chartThemeConfig={{
                  series: {
                      colors: ['#ffe0bd', '#DCDCDC', '#6cbfce'],
                  },
              }}      />
    </div>
  );
}