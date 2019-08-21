import React, { Component } from 'react';
import LineGraph from '../../components/lineGraph';
import { connect } from 'react-redux';
import { getFilteredIncomeStream } from '../../redux/actionCreators/IncomeStreams';
import { getProducts } from '../../redux/actionCreators/Products';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Card, CardHeader, Col, Row } from 'reactstrap';
import kenya from '../../assets/img/brand/kenya.svg';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import TargetAchievement from '../../components/TargetAchievement'

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

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  componentDidMount() {
    const { getProducts, getFilteredIncomeStream } = this.props;
    const monthly = 'monthly';
    const year = 2019;
    getFilteredIncomeStream(monthly, year);
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
    const { incomeStreams } = this.props;
    return (
      <div className="animated fadeIn">
        <Row />
        <Row>
          <Col xs="12" sm="12" lg="12">
            <LineGraph
              id={'card1'}
              isOpen={this.state.card1}
              toggle={() => {
                this.setState({ card1: !this.state.card1 });
              }}
              incomeStreams={incomeStreams}
              title={'IncomeStreams Performance'}
            />
          </Col>
        </Row>
          <TargetAchievement
          incomeStreams={incomeStreams}
          />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    products: state.getProducts.products,
    incomeStreams: state.incomeStream.incomeStreams
  };
};

const mapDispatchToProps = {
  getProducts: getProducts,
  getFilteredIncomeStream: getFilteredIncomeStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
