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
  Button,
  Row
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
      periods,
      metrics,
      handleSubmit
    } = this.props;

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
                    type="text"
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
                    {metrics.map(metric => (
                      <option key={metric.name}>{metric.name}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="IncomeStream" sm={2}>
                  Income Stream
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="IncomeStream"
                    id="IncomeStream"
                    onChange={FormhandleChange}
                  >
                    <option>Select Income stream ....</option>
                    {incomeStreams.map(income => (
                      <option key={income.name} value={income.id}>{income.name}</option>
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
                    {periods.map(period => (
                      <option defaultValue="select" key={period.name}>
                        {period.name}
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
                    onChange={FormhandleChange}
                  >
                    <option>Select Period Type ...</option>
                    {periods.map(period => (
                      <option key={period.period_type}>
                        {period.period_type}
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
              close
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default Targetmodal;
