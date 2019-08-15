import React, { Component } from 'react';
import {
  Row,
  Card,
  CardBody,
  Col,
  CardTitle,
  ButtonDropdown,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
} from 'reactstrap';
import { Line } from 'react-chartjs-2';
import {moment} from 'moment';
class LineGraph extends Component {
  render() {
    const { mainChartOpts, isOpen, id, toggle, ValueCenters, typeToggle } = this.props;

    let datasets = [];
    let labels = [];
    let default_max = 20000;
    ValueCenters.forEach(center => {
      let amounts = [];
      center.objective_key_results.map(result => {
        amounts.push(result.amount);
        labels.push(result.period);
      });

      if (default_max < Math.max(amounts)) {
        default_max = Math.max(amounts);
      }

      datasets.push({
        label: center.name,
        fill: false,
        lineTension: 0.3,
        backgroundColor: center.color,
        borderColor:center.color,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: amounts
      });
    });

    labels.map((item)=>{
      moment.month()
    })
    const Mdata = {
      labels: labels,
      datasets: datasets
    };

    
    mainChartOpts.scales.yAxes[0].ticks.max = default_max;

    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">Value Centers Perfomance</CardTitle>
              <div className="small text-muted">Yearly</div>
            </Col>
            <Col sm="7" className="d-none d-sm-inline-block">
              <ButtonGroup className="float-right">
                <ButtonDropdown id={id} isOpen={isOpen} toggle={toggle}>
                  <DropdownToggle caret className="p-0" color="transparent" />
                  <DropdownMenu right>
                    <DropdownItem>2019</DropdownItem>
                    <DropdownItem>2018</DropdownItem>
                    <DropdownItem>2017</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </ButtonGroup>
            </Col>
          </Row>
          <div
            className="chart-wrapper"
            style={{ height: 460 + 'px', marginTop: 40 + 'px' }}
          >
            <Line data={Mdata} options={mainChartOpts} />
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default LineGraph;
