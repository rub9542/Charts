import * as React from 'react';
import { Chart, ChartTitle, ChartLegend, ChartTooltip, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts';
import 'hammerjs';
const data=[ {
    "stat": "Impressions ",
    "count": 434823,
    "color": "#0e5a7e"
}, {
    "stat": "Clicks",
    "count": 356854,
    "color": "#166f99"
}, {
    "stat": "Unique Visitors",
    "count": 280022,
    "color": "#2185b4"
}, {
    "stat": "Downloads",
    "count": 190374,
    "color": "#319fd2"
}, {
    "stat": "Purchases",
    "count": 120392,
    "color": "#3eaee2"
} ]
const tooltipRender = props => {
  if (props.point) {
    return props.point.dataItem.stat;
  }
};

const ChartContainer = () => <Chart style={{
  margin: '0 auto',
  width: 300
}}>
    <ChartTitle text="Sales funnel" />
    <ChartSeries>
      <ChartSeriesItem type="funnel" data={data} categoryField="stat" field="count" colorField="color">
        <ChartSeriesLabels color="white" background="none" format="N0" />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartTooltip render={tooltipRender} />
    <ChartLegend visible={false} />
  </Chart>;
export default ChartContainer;