import React, { Component } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  Dropdown,
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
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import kenya from "../../assets/img/brand/kenya.svg";
import { SvgLoader, SvgProxy } from "react-svgmt";

// eslint-disable-next-line no-unused-vars
const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandDanger = getStyle("--danger");

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

const bar = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const pie = {
  labels: ["Parking", "Land Rates", "Transactions"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const doughnut = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
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
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: data1
    },
    {
      label: "My Second dataset",
      backgroundColor: "transparent",
      borderColor: brandSuccess,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: data2
    },
    {
      label: "My Third dataset",
      backgroundColor: "transparent",
      borderColor: brandDanger,
      pointHoverBackgroundColor: "#fff",
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
      label: "Product a",
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
    }
  ]
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
    let className = "";
    if (value <= 20) {
      className = "bg-danger";
    } else if (value <= 40) {
      className = "bg-warning";
    } else if (value <= 60) {
      className = "bg-info";
    } else if (value <= 100) {
      className = "bg-primary";
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
              cardId={"card1"}
              toggle={() => {
                this.setState({ card1: !this.state.card1 });
              }}
              isOpen={this.state.card1}
              metric={"Embu"}
              value={30.987}
              percentage={100}
              target={100}
              className={this.determineCardColor(100)}
            />
          </Col>

          <Col xs="12" sm="6" lg="3">
            <ProgressBarCard
              cardId={"card2"}
              toggle={() => {
                this.setState({ card2: !this.state.card2 });
              }}
              isOpen={this.state.card2}
              metric={"Nairobi"}
              value={80.987}
              percentage={80}
              target={100}
              className={this.determineCardColor(56)}
            />
          </Col>

          <Col xs="12" sm="6" lg="3">
            <ProgressBarCard
              cardId={"card3"}
              toggle={() => {
                this.setState({ card3: !this.state.card3 });
              }}
              isOpen={this.state.card4}
              metric={"Meru"}
              value={50.987}
              percentage={50}
              target={100}
              className={this.determineCardColor(35)}
            />
          </Col>

          <Col xs="12" sm="6" lg="3">
            <ProgressBarCard
              cardId={"card4"}
              toggle={() => {
                this.setState({ card4: !this.state.card4 });
              }}
              isOpen={this.state.card5}
              metric={"Kiambu"}
              value={30.987}
              percentage={30}
              target={100}
              className={this.determineCardColor(10)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
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
                        >
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Date picker</DropdownItem>
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
        </Row>
      </div>
    );
  }
}

export default Product;
