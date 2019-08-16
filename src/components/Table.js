import React, { Component } from "react";
import Loader from "react-loader-spinner";
import {
  ButtonGroup,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Table
} from "reactstrap";

export default class ReUseTable extends Component {
  render() {
    const {
      title,
      id,
      isOpen,
      toggle,
      column1,
      column2,
      column3,
      column4,
      column5,
      ValueCenters
    } = this.props;
    return (
      <Card>
        <CardHeader>
          {title}
          <ButtonGroup className="float-right">
            <ButtonDropdown id={id} isOpen={isOpen} toggle={toggle}>
              <DropdownToggle caret className="p-0" color="transparent" />
              <DropdownMenu right>
                <DropdownItem>Select Period</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </CardHeader>
        <CardBody>
          <br />
          <Table
            hover
            responsive
            className="table-outline mb-0 d-none d-sm-table"
          >
            <thead className="thead-light">
              <tr>
                <th>{column1}</th>
                <th>{column2}</th>
                <th className="text-center">{column3}</th>
                <th>{column4}</th>
                <th>{column5}</th>
              </tr>
            </thead>
            <tbody>
              {ValueCenters.length === "0" ? (
                <div style={{ marginLeft: 580 }}>
                  <Loader type={"Puff"} color={"#00BFFF"} height={"50"} width={"50"} />
                </div>
              ) : (
                ValueCenters.map(table => (
                  <tr key={table.id}>
                    <td>
                      <div>{table.name}</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>{table.percentage}</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Target: {table.total_target}
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="50"
                      />
                    </td>
                    <td className="text-center">
                      <strong>{table.total_okr}</strong>
                    </td>
                    <td>
                      <div className="small text-muted">
                        Duration of Operation
                      </div>
                      <strong>{table.color}</strong>
                    </td>
                    <td>
                      <div className="small text-muted">
                        Duration of Operation
                      </div>
                      <strong>10 Years</strong>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}
