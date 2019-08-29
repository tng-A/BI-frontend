import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Col,
  CardTitle,
  Row
} from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
class LineGraph extends Component {

  render() {
    const { incomeStreams, valueCenters } = this.props;

    const chart1MainChartOpts = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function(tooltipItem, chart) {
            return {
              backgroundColor:
                chart.data.datasets[tooltipItem.datasetIndex].borderColor
            };
          }
        }
      },
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: true
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 10,
              stepSize: Math.ceil(250 / 5),
              max: 1000
            }
          }
        ]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 5,
          hoverRadius: 4,
          hoverBorderWidth: 1
        }
      }
    };
    const chart2MainChartOpts = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function(tooltipItem, chart) {
            return {
              backgroundColor:
                chart.data.datasets[tooltipItem.datasetIndex].borderColor
            };
          }
        }
      },
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: true
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 10,
              stepSize: Math.ceil(250 / 5),
              max: 1000
            }
          }
        ]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 5,
          hoverRadius: 4,
          hoverBorderWidth: 1
        }
      }
    };



    let lineGraphList = []


    if(incomeStreams && incomeStreams.length > 1){
      lineGraphList = [...incomeStreams]
    }

    if(valueCenters && valueCenters.length > 1){
      lineGraphList = [...valueCenters]
    }
    


    let datasetsBig = [];
    let datasetSmall = [];
    let allLabels = [];
    let testArray = [];
    let lenOfLabels;

    if (lineGraphList) {
      lineGraphList.forEach(stream => {
        lenOfLabels = stream.graph_data.length;
        stream.graph_data.map(result => {
          testArray.push(result.value);
          allLabels.push(result.label)
          return 'success'
        });
      });
    }
    let max_amount = Math.max(...testArray);
    let min_amount = Math.min(...testArray);
    let median = Math.ceil((max_amount + min_amount) / 2);
    let smallStream = [];
    let bigStreams = [];
    if (lineGraphList) {
      lineGraphList.forEach(stream => {
        stream.graph_data.map(result => {
          if (result.value >= median) {
            bigStreams.push(stream);
            return 'success'

          }
          if (result.value < median) {
            smallStream.push(stream);
            return 'success'
          }
          return 'success'

        });
      });
    }

    let smallGraphMax = [];
    let bigGraphMax = [];
    let bigSet = new Set(bigStreams);
    let smallSet = new Set(smallStream);
    let smallArray = [...smallSet];
    let newArray = [...bigSet];

    smallArray = smallArray.filter(val => !newArray.includes(val));

    if (newArray.length > 0) {
      newArray.forEach(stream => {
        let amounts = [];
        stream.graph_data.map(result => {
          amounts.push(result.value);
          smallGraphMax.push(result.value);
          return 'success'

        });
        datasetsBig.push({
          label: stream.name,
          fill: false,
          lineTension: 0.3,
          backgroundColor: stream.color,
          borderColor: stream.color,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: amounts
        });
      });
    }

    if (smallArray.length > 0) {
      smallArray.forEach(stream => {
        let amounts = [];
        stream.graph_data.map(result => {
          amounts.push(result.value);
          bigGraphMax.push(result.value);
          return 'success'

        });
        datasetSmall.push({
          label: stream.name,
          fill: false,
          lineTension: 0.3,
          backgroundColor: stream.color,
          borderColor: stream.color,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: amounts
        });
      });
    }
    
    const labels = allLabels.slice(0, lenOfLabels)
    
    const BigMdata = {
      labels: labels,
      datasets: datasetsBig
    };

    const smallMdata = {
      labels: labels,
      datasets: datasetSmall
    };

    const smallMax = Math.max(...smallGraphMax);
    const bigMax = Math.max(...bigGraphMax);

    chart1MainChartOpts.scales.yAxes[0].ticks.max =
      bigMax + Math.ceil(bigMax / 5);
    chart1MainChartOpts.scales.yAxes[0].ticks.stepSize = Math.ceil(bigMax / 5);

    chart2MainChartOpts.scales.yAxes[0].ticks.max =
      smallMax + Math.ceil(smallMax / 5);
    chart2MainChartOpts.scales.yAxes[0].ticks.stepSize = Math.ceil(
      smallMax / 5
    );

    return (
      <div>
        <Card>
          <CardBody>
            <Row>
              <Col sm="5">
                <CardTitle className="mb-0">High Perfoming Income Streams</CardTitle>
                <div className="small text-muted">Yearly</div>
              </Col>
            </Row>
            <div
              className="chart-wrapper"
              style={{ height: 600 + 'px', marginTop: 10 + 'px' }}
            >
              <Line
                data={BigMdata}
                options={chart2MainChartOpts}
                height={300 + 'px'}
              />
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Row>
              <Col sm="5">
                <CardTitle className="mb-0">Income Streams</CardTitle>
                <div className="small text-muted">Yearly</div>
              </Col>
            </Row>

            <div
              className="chart-wrapper"
              style={{ height: 600 + 'px', marginTop: 10 + 'px' }}
            >
              <Line
                data={smallMdata}
                options={chart1MainChartOpts}
                height={300 + 'px'}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LineGraph;
