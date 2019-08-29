import React, { Component } from 'react';
import { Table, Progress } from 'reactstrap';
import './index.css';

export default class TargetAchievement extends Component {
  
  render() {
    const { incomeStreams, determineColor, products } = this.props;
    let tableList = []
    if(products){
      tableList = [...products]
    }
    if(incomeStreams){
      tableList = [...incomeStreams]
    }

    return (
      <div className="target-achievement-table">
        <Table
          hover
          responsive
          className="table-outline mb-0 d-none d-sm-table"
        >
          <thead className="thead-light">
            <tr>
              <th>Income Stream</th>
              <th>Total target</th>
              <th>Amount Achieved</th>
              <th>Percentage Completed</th>
            </tr>
          </thead>
          <tbody>
            {tableList && tableList.map(stream => {
              return (
                <tr>
                  <td>
                    <strong>{stream.name}</strong>
                  </td>
                  <td>{stream.total_target}</td>
                  <td>{stream.transactions_value}</td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>{stream.achievement_percentage} %</strong>
                      </div>
                    </div>
                    <Progress
                      className="progress-xs mt-2"
                      color={determineColor}
                      value={stream.achievement_percentage}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
