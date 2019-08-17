import React, { Component } from 'react';
import LineGraph from '../../components/lineGraph';
import { connect } from 'react-redux';
import {
  getValueCenter,
  getFilteredValueCenter
} from '../../redux/actionCreators/ValueCenter';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Pie from '../../components/PieChart';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ReUseTable from '../../components/Table';

import {
  ButtonGroup,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardBody,
  CardHeader,
  Col,
  Progress,
  Row,
  Table
} from 'reactstrap';
import ProgressBarCard from '../../components/progressBarCard';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import kenya from '../../assets/img/brand/kenya.svg';
import { SvgLoader, SvgProxy } from 'react-svgmt';

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

  handleTypeToggle() {
    const { getFilteredValueCenter } = this.props;
    getFilteredValueCenter();
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
    let className = '';
    if (percentage <= 20) {
      className = 'bg-danger';
    } else if (percentage <= 40) {
      className = 'bg-warning';
    } else if (percentage <= 50) {
      className = 'bg-info';
    } else if (percentage > 79) {
      className = 'bg-primary';
    }
    return className;
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    const { ValueCenters } = this.props;
    console.log('ValueCenterswe', ValueCenters);
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
                    style={{ backgroundColor: 'red !important' }}
                    determineColor={this.determineCardColor(center.percentage)}
                  />
                </NavLink>
              </Col>
            ))
          )}
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="12">
            <LineGraph
              mainChartOpts={mainChartOpts}
              id={'card1'}
              isOpen={this.state.card1}
              toggle={() => {
                this.setState({ card1: !this.state.card1 });
              }}
              ValueCenters={ValueCenters}
              typeToggle={this.handleTypeToggle}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ height: 580 }}>
              <CardHeader id="activeT">Active centers</CardHeader>
              <div
                className="svg-container"
                style={{ marginLeft: 1.2 + 'em', marginRight: 1.2 + 'em' }}
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

          <Col xs="12" sm="6" lg="6">
            <Pie
              title={'Value Center'}
              id={'card3'}
              isOpen={this.state.card3}
              toggle={() => {
                this.setState({ card3: !this.state.card3 });
              }}
              ValueCenters={ValueCenters}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    ValueCenters: state.getValueCentersReducer.valueCenters,
    getFilteredValueCenter: getFilteredValueCenter.valueCenters
  };
};

const mapDispatchToProps = {
  getValueCentersAction: getValueCenter,
  getFilteredValueCenter: getFilteredValueCenter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
