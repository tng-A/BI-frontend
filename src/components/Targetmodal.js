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
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

class Targetmodal extends Component {
  render() {
    const {openModal, modal, className, handleRangeChange, dateRangePicker:{ selection } } = this.props
    return (
      <Fragment>
        <Modal
          isOpen={modal}
          toggle={openModal}
          className={"modal-lg " + className}
        >
          <ModalHeader toggle={openModal}>
            Target Entry Point
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="target" sm={2}>
                  Target
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="Tatargetrget"
                    id="target"
                    placeholder="Enter your Target"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input type="textarea" name="description" id="description" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="target" sm={2}>
                  Metric
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="Metric"
                    id="metric"
                    placeholder="Enter your metric e.g ksh"
                  />
                </Col>
              </FormGroup>
            </Form>
            <div>
              <DateRangePicker
                onChange={handleRangeChange.bind(this, "dateRangePicker")}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                className={"PreviewArea"}
                months={1}
                ranges={[selection]}
                direction="horizontal"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={openModal}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={openModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default Targetmodal;
