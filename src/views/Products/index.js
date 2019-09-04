import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LineGraph from "../../components/lineGraph";
import { connect } from "react-redux";
import {
  getFilteredProducts,
  createProductsTarget
} from "../../redux/actionCreators/Products";
import { getProducts } from "../../redux/actionCreators/Products";
import Loader from "react-loader-spinner";
import { ReactComponent as Logo } from "../../../src/assets/svg/BiTool.svg";
import {
  getPeriods,
  getMetrics
} from "../../redux/actionCreators/IncomeStreams";
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
import BackButton from "../../components/backButton";
import Widget02 from "../Widgets/Widget02";
import Targetmodal from "./../../components/Targetmodal";
import TransactionsHelper from "../../utils/transactions";
import ProgressBarCard from "../../components/progressBarCard";

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
      current_number_transactions: 0,
      initial_load: false
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
      getFilteredProducts,
      getPeriodsAction,
      getMetricsActions,
      match: {
        params: { productID }
      }
    } = this.props;
    getPeriodsAction();
    getMetricsActions();

    this.timer = setInterval(async () => {
      await getFilteredProducts(
        { ...this.state, productID },
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
    const { products } = nextProps;
    const {
      products: productsLate,
      match: {
        params: { productID }
      }
    } = this.props;
    if (products !== productsLate) {
      getFilteredProducts({ ...this.state, productID });
    }
    if (products) {
      const total_value = TransactionsHelper.getTransactionsCount(products);
      const total_amount = TransactionsHelper.getTransactionValue(products);
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
        const { getFilteredProducts } = this.props;
        getFilteredProducts({ ...this.state });
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

  handleSubmit = () => {
    const { createProductsTarget } = this.props;
    createProductsTarget({ ...this.state }, this.setState({ modal: false }));
    getFilteredProducts(
      { ...this.state },
      this.setState({
        initial_load: true
      })
    );
  };

  productsCard(products) {
    return products.map(product => (
      <Col xs="12" sm="6" lg="3" key={product.id}>
        <NavLink to={`/revenue/${product.id}`} className="nav-link">
          <ProgressBarCard
            metric={product.name}
            value={product.total_okr}
            percentage={product.achievement_percentage}
            target={`Ksh: ${new Intl.NumberFormat().format(
              product.transactions_value
            )}`}
            cardClassName={product.color}
            style={{ backgroundColor: "red !important" }}
            determineColor={this.determineCardColor(product.percentage)}
          />
        </NavLink>
      </Col>
    ));
  }

  render() {
    const { products, periods, metrics } = this.props;
    const {
      current_number_transactions,
      current_transactions_value,
      initial_load
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
                      incomeStreams={products}
                      periods={periods}
                      metrics={metrics}
                      handleSubmit={this.handleSubmit}
                      title={"Products"}
                    />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Card>
          </Col>
        </Row>
        <Row />
        <Row>{this.productsCard(products)}</Row>
        <Row>
          <Col xs="12" sm="12" lg="12">
            {LineGraph.plotLineGraphs(products, "Product(s)")}
          </Col>
        </Row>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    products: state.getProducts.products,
    loading: state.incomeStream.loading,
    periods: state.incomeStream.periods,
    metrics: state.incomeStream.metrics
  };
};

const mapDispatchToProps = {
  getProducts: getProducts,
  getFilteredProducts: getFilteredProducts,
  getPeriodsAction: getPeriods,
  getMetricsActions: getMetrics,
  createProductsTarget: createProductsTarget
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
