import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import {
  ButtonGroup,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardBody,
  CardHeader
} from "reactstrap";

export default class PieChart extends Component {
  render() {
    let labels = [];
    let data = [];
    let dataColor = [];

    const { title, id, isOpen, toggle } = this.props;

    const pie = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: dataColor,
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#20c997"]
        }
      ]
    };
    return (
      <Card>
        <CardHeader>
          {title}
          <div className="card-header-actions">
            <ButtonGroup className="float-right">
              <ButtonDropdown id={id} isOpen={isOpen} toggle={toggle}>
                <DropdownToggle caret className="p-0" color="transparent" />
                <DropdownMenu right>
                  <DropdownItem>Select Period</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
          </div>
        </CardHeader>
        <CardBody>
          <div className="chart-wrapper">
            <Pie data={pie} />
          </div>
        </CardBody>
      </Card>
    );
  }
}
