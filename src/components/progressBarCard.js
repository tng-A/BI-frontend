import React, { Component } from 'react';
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress
} from 'reactstrap';

class ProgressBarCard extends Component {
  render() {
    const {
      cardId,
      isOpen,
      metric,
      value,
      percentage,
      target,
      className,
      toggle
    } = this.props;
    return (
      <Card
        className={className ? ` text-white ${className}` : 'text-white'}
        style={{ backgroundColor: 'black' }}
      >
        <CardBody className="pb-0">
          <div className="text-value">{target}</div>
          <div>{metric}</div>
        </CardBody>
        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
          <strong style={{ color: 'white' }}>
            {value} ({percentage}%)
          </strong>
          <Progress
            className="progress-xs mt-2"
            color="success"
            value={value}
          />
        </div>
      </Card>
    );
  }
}
export default ProgressBarCard;