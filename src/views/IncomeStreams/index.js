import React, { Component } from "react";
import LineGraph from "../../components/lineGraph";
import { connect } from "react-redux";
import {
  getFilteredIncomeStream,
  getPeriods,
  getMetrics,
  CreateIncomeStreamTarget
} from "../../redux/actionCreators/IncomeStreams";
import { getProducts } from "../../redux/actionCreators/Products";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  Card,
  Col,
  Row,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import TargetAchievement from "../../components/TargetAchievement";
import Widget02 from "../Widgets/Widget02";
import Targetmodal from "./../../components/Targetmodal";

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

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      radioSelected: 2,
      period: "monthly",
      year: "2019",
      modal: false,
      amount: "",
      metric: "",
      description: "",
      IncomeStream: "",
      period_name: "",
      period_type: "",
      period_year: "",
      current_transactions_value: 0,
      current_number_transactions: 0
    };

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.FormhandleChange = this.FormhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      getFilteredIncomeStream,
      getPeriodsAction,
      getMetricsActions
    } = this.props;
    getPeriodsAction();
    getMetricsActions();
    getFilteredIncomeStream({ ...this.state });
    return setInterval(() => {
      getFilteredIncomeStream({ ...this.state });
    }, 10000);
  }

  componentWillReceiveProps(nextProps) {
    const { incomeStreams } = nextProps;
    const { incomeStreams: incomeStreamLate } = this.props;
    if (incomeStreams !== incomeStreamLate) {
      getFilteredIncomeStream({ ...this.state });
    }
  }
  openModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  closeModal;

  FormhandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChange(e) {
    this.setState(
      {
        period: e.currentTarget.textContent
      },
      () => {
        const { getFilteredIncomeStream } = this.props;
        getFilteredIncomeStream({ ...this.state });
      }
    );
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggle2() {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  }

  toggle3() {
    this.setState({
      dropdownOpen3: !this.state.dropdownOpen3
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
      className = "bg-danger";
    } else if (percentage <= 40) {
      className = "bg-warning";
    } else if (percentage <= 50) {
      className = "bg-info";
    } else if (percentage > 79) {
      className = "bg-primary";
    }
    return className;
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  handleSubmit = () => {
    const { CreateIncomeStreamTargetActions } = this.props;
    CreateIncomeStreamTargetActions(
      { ...this.state },
      this.setState({ modal: false })
    );
    getFilteredIncomeStream({ ...this.state });
  };

  getTransactionsCount = incomeStreams => {
    let raw_transactions = [];
    let total_value;
    incomeStreams.forEach(income => {
      raw_transactions.push(income.number_of_transactions);
      total_value = raw_transactions.reduce((a, b) => a + b, 0);
    });
    if (this.state.current_number_transactions !== total_value) {
      this.setState({
        current_number_transactions: total_value
      });
    }
    return total_value;
  };

  getTransactionValue = incomeStreams => {
    let raw_total = [];
    let total_amount;
    incomeStreams.forEach(income => {
      raw_total.push(income.transactions_value);
      total_amount = Math.round(raw_total.reduce((a, b) => a + b, 0));
    });
    if (this.state.current_transactions_value !== total_amount) {
      this.setState({
        current_transactions_value: total_amount
      });
    }
    return total_amount;
  };

  render() {
    const { incomeStreams, periods, metrics } = this.props;
    const {
      period,
      current_number_transactions,
      current_transactions_value
    } = this.state;
    this.getTransactionsCount(incomeStreams);
    this.getTransactionValue(incomeStreams);
    return (
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
                // isOpen={this.state.dropdownOpen2}
                // toggle={this.toggle2}
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

          <Col lg="2" sm="4" xs="4">
            <Card>
              <ButtonDropdown
                id={"card3"}
                isOpen={this.state.dropdownOpen3}
                toggle={this.toggle3}
              >
                <DropdownToggle caret color="primary">
                  Target
                </DropdownToggle>
                <DropdownMenu right tag="a">
                  <DropdownItem>
                    <div onClick={this.openModal}>Set Target</div>
                    <Targetmodal
                      modal={this.state.modal}
                      openModal={this.openModal}
                      value={this.state.target}
                      FormhandleChange={this.FormhandleChange}
                      incomeStreams={incomeStreams}
                      periods={periods}
                      metrics={metrics}
                      handleSubmit={this.handleSubmit}
                    />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Card>
          </Col>
        </Row>
        <Row />
        <Row>
          <Col xs="12" sm="12" lg="12">
            <LineGraph
              id={"card1"}
              isOpen={this.state.card1}
              toggle={() => {
                this.setState({ card1: !this.state.card1 });
              }}
              incomeStreams={incomeStreams}
              title={"IncomeStreams Performance"}
              period={period}
            />
          </Col>
        </Row>
        <TargetAchievement incomeStreams={incomeStreams} />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    products: state.getProducts.products,
    incomeStreams: state.incomeStream.incomeStreams,
    loading: state.incomeStream.loading,
    periods: state.incomeStream.periods,
    metrics: state.incomeStream.metrics
  };
};

const mapDispatchToProps = {
  getProducts: getProducts,
  getFilteredIncomeStream: getFilteredIncomeStream,
  getPeriodsAction: getPeriods,
  getMetricsActions: getMetrics,
  CreateIncomeStreamTargetActions: CreateIncomeStreamTarget
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
