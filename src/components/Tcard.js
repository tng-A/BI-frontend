import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardFooter } from "reactstrap";
import "./index.css";

export default class Tcard extends Component {
  render() {
    const { title, Transactions, Value, count, total, className } = this.props;
    return (
      <Card className="brand-card">
        <CardBody className="brand-card-header" style={{backgroundColor:`${className}`}}>
          <CardTitle
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25
            }}
          >
            {title}
          </CardTitle>
        </CardBody>
        <CardFooter style={{ height: 70 }} id="trans">
          <div className="container">
            <span>
              <p>{Transactions}</p>
              <p>{count}</p>
            </span>
            <span className="divider"> </span>
            <span style={{ marginLeft: 15 }}>
              <p>{Value}</p>
              <p>{total}</p>
            </span>
          </div>
        </CardFooter>
      </Card>
    );
  }
}
