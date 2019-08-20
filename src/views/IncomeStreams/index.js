import React, { Component } from "react";
import "./index.css";
import ReUseTable from "../../components/Table";
import Tcard from "../../components/Tcard";

import { Col, Row } from "reactstrap";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const ValueCenters = [
      {
        id: 1,
        name: "Enterprise Integration",
        color: "#E08CCB",
        total_target: 0,
        total_okr: 0,
        percentage: 0,
        objective_key_results: [],
        company: {
          name: "Webtribe",
          description: null
        }
      },
      {
        id: 1,
        name: "Enterprise Integration",
        color: "#E08CCB",
        total_target: 0,
        total_okr: 0,
        percentage: 0,
        objective_key_results: [],
        company: {
          name: "Webtribe",
          description: null
        }
      }
    ];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="6" sm="6" lg="3">
            <Tcard
              title={"Embu"}
              Transactions={"Transactions"}
              Value={"Value"}
              count={300}
              total={500000}
              className={"red"}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <ReUseTable
              title={"Transactions"}
              id={"card4"}
              isOpen={this.state.card4}
              toggle={() => {
                this.setState({ card4: !this.state.card4 });
              }}
              column1={"Name"}
              column2={"Time"}
              column3={"Transaction ID"}
              column4={"Amount"}
              column5={"Channel"}
              ValueCenters={ValueCenters}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
