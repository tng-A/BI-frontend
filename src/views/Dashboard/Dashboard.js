import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { getValueCenter } from "../../redux/actionCreators/ValueCenter";
import { NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import Pie from "../../components/PieChart";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import ReUseTable from "../../components/Table";

import {
  ButtonGroup,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
  Table
} from "reactstrap";
import ProgressBarCard from "../../components/progressBarCard";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import kenya from "../../assets/img/brand/kenya.svg";
import { SvgLoader, SvgProxy } from "react-svgmt";

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

const bar = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [100, 59, 80]
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

const Mdata = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  datasets: [
    {
      label: "Merchant Business",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 59, 80, 81, 56, 55, 40, 79, 85, 120, 150, 155]
    },
    {
      label: "Consumer Business",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "orange",
      borderColor: "orange",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [45, 40, 55, 10, 45, 35, 70, 85, 120, 150, 180, 200]
    },
    {
      label: "Enterprise Integration",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "purple",
      borderColor: "purple",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [34, 12, 25, 30, 58, 15, 92, 77, 80, 100, 118, 150]
    },
    {
      label: "Platform Business",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "green",
      borderColor: "green",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [140, 120, 150, 130, 200, 215, 200, 200, 170, 150, 180, 200]
    }
  ]
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: "index",
    position: "nearest",
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
      hitRadius: 5,
      hoverRadius: 4,
      hoverBorderWidth: 1
    }
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  componentDidMount() {
    const { getValueCentersAction } = this.props;
    getValueCentersAction();
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

  determineCardColor(percentage) {
    let className = "";
    if (percentage <= 20) {
      className = "danger";
    } else if (percentage <= 40) {
      className = "warning";
    } else if (percentage <= 50) {
      className = "info";
    } else if (percentage > 79) {
      className = "success";
    }
    return className;
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    const { ValueCenters } = this.props;
    console.log("ValueCenterswe", ValueCenters);

    return (
      <div className="animated fadeIn">
        <Row>
          {ValueCenters.length === 0 ? (
            <div style={{ marginLeft: 580 }}>
              <Loader type="Puff" color="#00BFFF" height="50" width="50" />
            </div>
          ) : (
            ValueCenters.map(center => (
              <Col xs="12" sm="6" lg="3" key={center.id}>
                <NavLink to="enterprise" className="nav-link">
                  <ProgressBarCard
                    metric={center.name}
                    value={center.total_okr}
                    percentage={center.percentage}
                    target={center.total_target}
                    cardClassName={center.color}
                    style={{ backgroundColor: "red !important" }}
                    determineColor={this.determineCardColor(center.percentage)}
                  />
                </NavLink>
              </Col>
            ))
          )}
        </Row>
        <Row>
          <Col xs="8" sm="7.3" lg="7.5">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">
                      Value Centers Perfomance
                    </CardTitle>
                    <div className="small text-muted">Yearly</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <ButtonGroup className="float-right">
                      <ButtonDropdown
                        id="card1"
                        isOpen={this.state.card1}
                        toggle={() => {
                          this.setState({ card1: !this.state.card1 });
                        }}
                      >
                        <DropdownToggle
                          caret
                          className="p-0"
                          color="transparent"
                        />
                        <DropdownMenu right>
                          <DropdownItem>Select Period</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </ButtonGroup>
                  </Col>
                </Row>
                <div
                  className="chart-wrapper"
                  style={{ height: 460 + "px", marginTop: 40 + "px" }}
                >
                  <Line data={Mdata} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4" sm="4.7" lg="4.5">
            <Card style={{ height: 580 }}>
              <CardHeader id="activeT">Active centers</CardHeader>
              <div
                className="svg-container"
                style={{ marginLeft: 1.2 + "em", marginRight: 1.2 + "em" }}
              >
                <SvgLoader
                  path={kenya}
                  className="svg-content"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="3 3 600 600"
                >
                  <SvgProxy selector="path" fill="grey" />
                  <SvgProxy
                    selector="#KE-13,#KE-12,#KE-26,#KE-14"
                    fill="#20a8d8"
                  />
                </SvgLoader>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ height: 93 + "%" }}>
              <CardHeader>
                Target Achievements Trends
                <div className="card-header-actions">
                  <ButtonGroup className="float-right">
                    <ButtonDropdown
                      id="card2"
                      isOpen={this.state.card2}
                      toggle={() => {
                        this.setState({ card2: !this.state.card2 });
                      }}
                    >
                      <DropdownToggle
                        caret
                        className="p-0"
                        color="transparent"
                      />
                      <DropdownMenu right>
                        <DropdownItem>Select Period</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper bar-custom">
                  <Bar
                    data={bar}
                    options={options}
                    style={{ height: 80 + "%" }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="6">
            <Pie
              title={"Value Center"}
              id={"card3"}
              isOpen={this.state.card3}
              toggle={() => {
                this.setState({ card3: !this.state.card3 });
              }}
              ValueCenters={ValueCenters}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <ReUseTable
              title={"System Perfomance"}
              id={"card4"}
              isOpen={this.state.card4}
              toggle={() => {
                this.setState({ card4: !this.state.card4 });
              }}
              column1={"name"}
              column2={"timestamp"}
              column3={"Transaction ID"}
              column4={"Status"}
              column5={"Channel"}
              ValueCenters={ValueCenters}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Transactions
                <ButtonGroup className="float-right">
                  <ButtonDropdown
                    id="card4"
                    isOpen={this.state.card4}
                    toggle={() => {
                      this.setState({ card4: !this.state.card4 });
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent" />
                    <DropdownMenu right>
                      <DropdownItem>Select Period</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </CardHeader>
              <CardBody>
                <br />
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th>Product</th>
                      <th>Perfomance</th>
                      <th className="text-center">Income Generated</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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

export const mapStateToProps = state => {
  return {
    ValueCenters: state.getValueCentersReducer.valueCenters
  };
};

const mapDispatchToProps = {
  getValueCentersAction: getValueCenter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
