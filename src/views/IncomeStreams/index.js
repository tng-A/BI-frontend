import React, { Component } from "react";
import LineGraph from "../../components/lineGraph";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../../src/assets/svg/BiTool.svg";
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
import TransactionsHelper from "../../utils/transactions";
import BackButton from "../../components/backButton";
import FormHelper from "../../utils/formHelpers"; 
import AuthUtils from '../../utils/authFuncs';
import { months, quarters } from "../../utils/constants";
import "./index.css";

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

class IncomeStream extends Component {
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
      current_number_transactions: 0,
      initial_load: false, 
      periodNames:[]
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
      getMetricsActions,
      match: {
        params: { incomeStreamID }
      }
    } = this.props;
    const token = localStorage.getItem('token');
    const tokenInformation = AuthUtils.verifyToken(token);
    const { company_id: companyId } = tokenInformation;
    const payload = { companyId: companyId };
    getPeriodsAction(payload);
    getMetricsActions(payload);

    this.timer = setInterval(async () => {
      await getFilteredIncomeStream(
        { ...this.state, incomeStreamID },
        this.setState({
          initial_load: true
        })
      );
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    const { incomeStreams } = nextProps;
    const {
      incomeStreams: incomeStreamLate,
      match: {
        params: { incomeStreamID }
      }
    } = this.props;
    if (incomeStreams !== incomeStreamLate) {
      getFilteredIncomeStream({ ...this.state, incomeStreamID });
    }
    const total_value = TransactionsHelper.getTransactionsCount(incomeStreams);
    const total_amount = TransactionsHelper.getTransactionValue(incomeStreams);
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

  setTheState = (type, stateName, periodState, periodMonths, periodQuarters) => {
    if (type === "monthly") {
      this.setState({
        [stateName]:periodMonths, 
        [periodState]:type
    })
    }
    if (type === "quarterly") {
      this.setState({
        [stateName]:periodQuarters, 
        [periodState]:type
    })
    }
  }

  openModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  FormhandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChange(e) {
    this.setState(
      {
        period: e.currentTarget.textContent
      },
      () => {
        const {
          getFilteredIncomeStream,
          match: {
            params: { incomeStreamID }
          }
        } = this.props;
        getFilteredIncomeStream({ ...this.state, incomeStreamID });
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
    if(percentage === 0){
      className = "danger";
    }
    else if (percentage <= 20) {
      className = "danger";
    } else if (percentage <= 40) {
      className = "warning";
    } else if (percentage <= 50) {
      className = "info";
    } else if (percentage > 79) {
      className = "primary";
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

  render() {
    const { incomeStreams, periods, metrics } = this.props;
    const {
      current_number_transactions,
      current_transactions_value,
      initial_load, 
      periodNames
    } = this.state;

    return !initial_load ? (
      <div>
        {/* Logo is an actual React component */}
        <Loader type="Puff" color="#00BFFF" height="50" width="50" />
        <Logo />
      </div>
    ) : (
      <div className="animated fadeIn">
        <Row>
          <Col lg="1" sm="1" xs="1">
            <BackButton history={this.props.history} />
          </Col>
        </Row>
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
              <ButtonDropdown disabled id={"card2"}>
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
                      title="Income Streams"
                      onchangePeriod={(e) => (FormHelper.onchangePeriod(e, "periodNames","period_type", this.setTheState, months, quarters))}
                      periodNames={periodNames}
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
            {LineGraph.plotLineGraphs(incomeStreams)}
          </Col>
        </Row>
        <TargetAchievement incomeStreams={incomeStreams} determineCardColor={this.determineCardColor} />
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IncomeStream)
);
