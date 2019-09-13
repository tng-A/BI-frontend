import React, { Component } from "react";
import { Card, CardBody, Progress } from "reactstrap";

class ProgressBarCard extends Component {
  render() {
    const {
      metric,
      value,
      percentage,
      target,
      cardClassName,
      determineColor
    } = this.props;
    return (
      <Card
        style={{
          backgroundColor: `${cardClassName}`,
          color: "white",
          fontWeight: "bold"
        }}
      >
        <CardBody className="pb-0">
          <div className="text-value">{target}</div>
          <div>{metric}</div>
        </CardBody>
        <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
          <strong style={{ color: "white" }}>
            {value} {percentage}%
          </strong>
          <Progress
            className="progress-xs mt-2"
            color={determineColor}
            value={value}
          />
        </div>
      </Card>
    );
  }
}
export default ProgressBarCard;
