import React, { Component } from 'react';
import LineGraph from '../../components/lineGraph';
import { connect } from 'react-redux';
import { getValueCenter } from '../../redux/actionCreators/ValueCenter';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import Widget02 from "../Widgets/Widget02";
import TransactionsHelper from '../../utils/transactions';
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  Col,
  Row,
} from 'reactstrap';
import ProgressBarCard from '../../components/progressBarCard';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


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
      radioSelected: 2,
      period: "monthly",
      year: "2019",
      current_transactions_value: 0,
      current_number_transactions: 0
    };
  }

  componentDidMount() {
    const { getValueCentersAction } = this.props;
    getValueCentersAction({ ...this.state });
  }

  componentWillReceiveProps(nextprops) {
    const { ValueCenters } = nextprops;
    let total_amount = 0;
    let total_value = 0;
    ValueCenters.forEach(valueCentre => {
      valueCentre.product_data.forEach(product =>{
        product.revenue_stream_data.forEach(revenue_stream => {
          const income_streams = revenue_stream.income_stream_transaction_data
          total_value += TransactionsHelper.getTransactionsCount(income_streams)
          total_amount += TransactionsHelper.getTransactionValue(income_streams)
        })
      })
    })
    if (this.state.current_number_transactions !== total_value) {
      this.setState({
        current_number_transactions: total_value
      });
    }
    if (this.state.current_transactions_value !== total_amount) {
      this.setState({
        current_transactions_value: total_amount
      });
    }

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

  valueCentreCard (ValueCenters) {
    return (
      ValueCenters.map(center => (
        <Col xs="12" sm="6" lg="3" key={center.id}>
          <NavLink to="/" className="nav-link">
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
    )
  }

  render() {
    const { ValueCenters } = this.props;
    const {
      current_number_transactions,
      current_transactions_value
    } = this.state;
    return (
      ValueCenters.length === 0 ? (
        <div style={{ marginLeft: 580 }}>
          <Loader type="Puff" color="#00BFFF" height="50" width="50" />
        </div>
      ) : (
        <div className="animated fadeIn">
              <Row>
                <Col lg="3" sm="6" xs="12">
                  <Widget02
                    header={current_number_transactions}
                    mainText="Total Transactions"
                    icon="fa fa-cogs"
                    color="warning"
                    starting={current_number_transactions}
                  />
                </Col>
                <Col lg="3" sm="6" xs="12">
                  <Widget02
                    header={current_transactions_value}
                    prefix="Ksh: "
                    mainText="Transaction Value"
                    icon="fa fa-money"
                    color="info"
                    starting={current_transactions_value}
                  />
                </Col>
                <Col lg="2" sm="4" xs="8">
                  <Card>
                    <ButtonDropdown
                      id={"card1"}
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                    >
                      <DropdownToggle caret color="primary">
                        Period Types
                      </DropdownToggle>
                      <DropdownMenu right tag="a">
                        <DropdownItem>
                          <div onClick={this.handleChange}>Past_Week</div>
                        </DropdownItem>
                        <DropdownItem>
                          <div onClick={this.handleChange}>Past_Month</div>
                        </DropdownItem>
                        <DropdownItem>
                          <div onClick={this.handleChange}>Monthly</div>
                        </DropdownItem>
                        <DropdownItem>
                          <div onClick={this.handleChange}>Quarterly</div>
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </Card>
                </Col>
                <Col lg="2" sm="4" xs="4">
                  <Card>
                    <ButtonDropdown
                      disabled
                      id={"card2"}
                    >
                      <DropdownToggle caret color="primary" disabled>
                        Year
                      </DropdownToggle>
                      <DropdownMenu right tag="a">
                        <DropdownItem>
                          <div onClick={this.handleChange}>Monthly</div>
                        </DropdownItem>
                        <DropdownItem>
                          <div onClick={this.handleChange}>Quarterly</div>
                        </DropdownItem>
                        <DropdownItem>
                          <div onClick={this.handleChange}>Semi-annually</div>
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </Card>
                </Col>
              </Row>
            <Row>
                {this.valueCentreCard(ValueCenters)}
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
        </div>
      ));
  }
}

export const mapStateToProps = state => {
  return {
    ValueCenters: state.getValueCentersReducer.valueCenters,
  };
};

const mapDispatchToProps = {
  getValueCentersAction: getValueCenter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
