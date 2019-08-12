import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
  Table
} from 'reactstrap';
import ProgressBarCard from '../../components/progressBarCard';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import kenya from '../../assets/img/brand/kenya.svg';
import { SvgLoader, SvgProxy } from 'react-svgmt';

// eslint-disable-next-line no-unused-vars
const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandDanger = getStyle('--danger');

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const pie = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const doughnut = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
};

const mainChartOpts = {
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
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

class Product extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  determineCardColor(value) {
    let className = '';
    if (value <= 20) {
      className = 'bg-danger';
    } else if (value <= 40) {
      className = 'bg-warning';
    } else if (value <= 50) {
      className = 'bg-info';
    } else if (value > 79) {
      className = 'bg-primary';
    }
    return className;
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <ProgressBarCard
              cardId={'card1'}
              toggle={() => {
                this.setState({ card1: !this.state.card1 });
              }}
              isOpen={this.state.card1}
              metric={'Revenue'}
              value={30.987}
              percentage={100}
              target={100}
              className={this.determineCardColor(100)}
            />
          </Col>

          <Col xs="12" sm="6" lg="3">
            <ProgressBarCard
              cardId={'card2'}
              toggle={() => {
                this.setState({ card2: !this.state.card2 });
              }}
              isOpen={this.state.card2}
              metric={'Customers'}
              value={80.987}
              percentage={80}
              target={100}
              className={this.determineCardColor(80)}
            />
          </Col>

          <Col xs="12" sm="6" lg="3">
            <ProgressBarCard
              cardId={'card3'}
              toggle={() => {
                this.setState({ card3: !this.state.card3 });
              }}
              isOpen={this.state.card4}
              metric={'Reliability'}
              value={50.987}
              percentage={50}
              target={100}
              className={this.determineCardColor(50)}
            />
          </Col>

          <Col xs="12" sm="6" lg="3">
            <ProgressBarCard
              cardId={'card4'}
              toggle={() => {
                this.setState({ card4: !this.state.card4 });
              }}
              isOpen={this.state.card5}
              metric={'Revenue'}
              value={30.987}
              percentage={30}
              target={100}
              className={this.determineCardColor(10)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ height: 580 + 'px' }}>
              <SvgLoader path={kenya} id="maps">
                <SvgProxy selector="path" fill="grey" />
                <SvgProxy selector="#KE-13,#KE-12,#KE-26,#KE-14" fill="black" />
              </SvgLoader>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right">
                      <i className="icon-cloud-download" />
                    </Button>
                    <ButtonToolbar
                      className="float-right"
                      aria-label="Toolbar with button groups"
                    >
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(1)}
                          active={this.state.radioSelected === 1}
                        >
                          Day
                        </Button>
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(2)}
                          active={this.state.radioSelected === 2}
                        >
                          Month
                        </Button>
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(3)}
                          active={this.state.radioSelected === 3}
                        >
                          Year
                        </Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div
                  className="chart-wrapper"
                  style={{ height: 460 + 'px', marginTop: 40 + 'px' }}
                >
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ height: 93 + '%' }}>
              <CardHeader>
                Bar Chart
                <div className="card-header-actions">
                  <a
                    href="http://www.chartjs.org"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar
                    data={bar}
                    options={options}
                    style={{ height: 70 + '%' }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="6">
            <Card>
              <CardHeader>
                Pie Chart
                <div className="card-header-actions">
                  <a
                    href="http://www.chartjs.org"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Pie data={pie} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <br />
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">
                        <i className="icon-people" />
                      </th>
                      <th>Product</th>
                      <th>Perfomance</th>
                      <th className="text-center">Income Generated</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ fontSize: 24 + 'px' }}
                          />
                        </div>
                      </td>
                      <td>
                        <div>Product a</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="50"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 12,000,000 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>10 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ fontSize: 24 + 'px' }}
                          />
                        </div>
                      </td>
                      <td>
                        <div>Product f</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>24%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="24"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 1,000,050 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>10 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ fontSize: 24 + 'px' }}
                          />
                        </div>
                      </td>
                      <td>
                        <div>Product a</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="50"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 12,000,000 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>10 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ fontSize: 24 + 'px' }}
                          />
                        </div>
                      </td>
                      <td>
                        <div>Product d</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>35%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="warning"
                          value="35"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 1,000,000 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>5 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ fontSize: 24 + 'px' }}
                          />
                        </div>
                      </td>
                      <td>
                        <div>Product b</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="10"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 1,000,456 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>5 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ fontSize: 24 + 'px' }}
                          />
                        </div>
                      </td>
                      <td>
                        <div>Product c</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>46%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="46"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 2,000,000 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>5 Years</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Product;
