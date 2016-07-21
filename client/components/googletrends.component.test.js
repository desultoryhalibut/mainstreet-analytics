var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

const LineGraph = (props) => {
  // load your general data
  var chartData = [
  {
    name: "Lavon Hilll I",
    BMI: 20.57,
    age: 12,
    birthday: "1994-10-26T00:00:00.000Z",
    city: "Annatown",
    married: true,
    index: 1
  },
  {
    name: "Clovis Pagac",
    BMI: 24.28,
    age: 26,
    birthday: "1995-11-10T00:00:00.000Z",
    city: "South Eldredtown",
    married: false,
    index: 3
  },
  {
    name: "Gaylord Paucek",
    BMI: 24.41,
    age: 30,
    birthday: "1975-06-12T00:00:00.000Z",
    city: "Koeppchester",
    married: true,
    index: 5
  },
  {
    name: "Ashlynn Kuhn MD",
    BMI: 23.77,
    age: 32,
    birthday: "1985-08-09T00:00:00.000Z",
    city: "West Josiemouth",
    married: false,
    index: 6
  }
];

  var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    };


  return (
    <Chart
      title={title}
      width={width}
      height={height}
      margins= {margins}
      >
      <LineChart
        showXGrid= {false}
        showYGrid= {false}
        margins= {margins}
        title={title}
        data={chartData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
      />
    </Chart>
  );
}

export default LineGraph;
