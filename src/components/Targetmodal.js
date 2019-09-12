import React, { Component, Fragment } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button
} from "reactstrap";

class Targetmodal extends Component {
  render() {
    const {
      openModal,
      modal,
      className,
      value,
      FormhandleChange,
      incomeStreams,
      metrics,
      handleSubmit, 
      title, 
      onchangePeriod, 
      periodNames
    } = this.props;

   
   
    let newMetrics = []

    metrics.map(metric => {
      newMetrics.push(metric.name.toLowerCase())
    })
   
    const periodTypes = ["quarterly", "monthly"];
    newMetrics = [...new Set(newMetrics)];
    
    return (
      <Fragment>
        <Modal
          isOpen={modal}
          toggle={openModal}
          className={"modal-lg " + className}
        >
          <ModalHeader toggle={openModal}>Target Entry Point</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="target" sm={2}>
                  Target
                </Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="amount"
                    id="target"
                    placeholder="Enter your Target"
                    value={value}
                    onChange={FormhandleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    onChange={FormhandleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="target" sm={2}>
                  Metric
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    value={this.props.value}
                    name="metric"
                    id="metric"
                    onChange={FormhandleChange}
                  >
                    <option>Select Metric ....</option>
                    {newMetrics.map(metric => (
                      <option key={metric}>{metric}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="IncomeStream" sm={2}>
                  {title}
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="IncomeStream"
                    id="IncomeStream"
                    onChange={FormhandleChange}
                  >
                    <option>{`Select ${title} ....`}</option>
                    {incomeStreams && incomeStreams.map(income => (
                      <option key={income.name} value={income.id}>
                        {income.name}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="period" sm={2}>
                  Period Type
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="period_type"
                    id="PeriodType"
                    onChange={e => onchangePeriod(e)}
                  >
                    <option>Select Period Type ...</option>
                    {periodTypes.map(type => (
                      <option key={type}>{type}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="period" sm={2}>
                  Period Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="period_name"
                    id="PeriodName"
                    onChange={FormhandleChange}
                  >
                    <option>Select Period Name ...</option>
                    {periodNames && periodNames.map(name => (
                      <option defaultValue="select" key={name}>
                        {name}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="period" sm={2}>
                  Year
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    value={this.props.value}
                    name="period_year"
                    id="Year"
                    onChange={FormhandleChange}
                  >
                    <option>Select Year ...</option>
                    <option>2019</option>
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
              Send
            </Button>{" "}
            <Button color="secondary" onClick={openModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default Targetmodal;
