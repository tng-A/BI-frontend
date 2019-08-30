import React, { Component } from "react";
import LineGraph from "../../components/lineGraph";
import { ReactComponent as Logo } from "../../../src/assets/svg/BiTool.svg";
import { connect } from "react-redux";
import {
  getValueCenter,
  createValueCenterTargets
} from "../../redux/actionCreators/ValueCenter";
import {
  getPeriods,
  getMetrics
} from "../../redux/actionCreators/IncomeStreams";
import { NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import Widget02 from "../Widgets/Widget02";
import TransactionsHelper from "../../utils/transactions";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  Col,
  Row
} from "reactstrap";
import Targetmodal from "./../../components/Targetmodal";
import ProgressBarCard from "../../components/progressBarCard";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      dropdownOpen3: false,
      radioSelected: 2,
      period: "monthly",
      year: "2019",
      current_transactions_value: 0,
      current_number_transactions: 0,
      modal: false,
      amount: "",
      metric: "",
      description: "",
      IncomeStream: "",
      period_name: "",
      period_type: "",
      period_year: ""
    };
    this.toggle3 = this.toggle3.bind(this);
    this.openModal = this.openModal.bind(this);
    this.FormhandleChange = this.FormhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      getValueCentersAction,
      getPeriodsAction,
      getMetricsActions
    } = this.props;
    getPeriodsAction();
    getMetricsActions();
    getValueCentersAction({ ...this.state });
  }

  componentWillReceiveProps(nextprops) {
    const { ValueCenters } = nextprops;
    let total_amount = TransactionsHelper.getTransactionValue(ValueCenters);
    let total_value = TransactionsHelper.getTransactionsCount(ValueCenters);
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

  openModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle3() {
    this.setState({
      dropdownOpen3: !this.state.dropdownOpen3
    });
  }

  FormhandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = () => {
    const {
      createValueCenterTargetsActions,
      getValueCentersAction
    } = this.props;
    createValueCenterTargetsActions(
      { ...this.state },
      this.setState({ modal: false })
    );
    getValueCentersAction({ ...this.state });
  };

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
  valueCentreCard(ValueCenters) {
    return ValueCenters.map(center => (
      <Col xs="12" sm="6" lg="3" key={center.id}>
        <NavLink to={`/product/${center.id}`} className="nav-link">
          <ProgressBarCard
            metric={center.name}
            value={center.transactions_value}
            percentage={center.achievement_percentage}
            target={center.total_target}
            cardClassName={center.color}
            style={{ backgroundColor: "red !important" }}
            determineColor={this.determineCardColor(
              center.achievement_percentage
            )}
          />
        </NavLink>
      </Col>
    ));
  }

  render() {
    const { ValueCenters, periods, metrics } = this.props;
    const {
      current_number_transactions,
      current_transactions_value
    } = this.state;
    return ValueCenters.length === 0 ? (
      <div>
        {/* Logo is an actual React component */}
        <Loader type="Puff" color="#00BFFF" height="50" width="50" />
        <Logo />
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
                      incomeStreams={ValueCenters}
                      periods={periods}
                      metrics={metrics}
                      handleSubmit={this.handleSubmit}
                      title="Value Centers"
                    />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Card>
          </Col>
        </Row>
        <Row>{this.valueCentreCard(ValueCenters)}</Row>
        <Row>
          <Col xs="12" sm="12" lg="12">
            {LineGraph.plotLineGraphs(ValueCenters, "ValueCenter(s)")}
          </Col>
        </Row>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    ValueCenters: state.getValueCentersReducer.valueCenters,
    periods: state.incomeStream.periods,
    metrics: state.incomeStream.metrics
  };
};

const mapDispatchToProps = {
  getValueCentersAction: getValueCenter,
  createValueCenterTargetsActions: createValueCenterTargets,
  getPeriodsAction: getPeriods,
  getMetricsActions: getMetrics
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
