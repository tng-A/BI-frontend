import React, { Component } from 'react';
import {
  Col,
  Container,
  Row,
  Card,
  CardBody
} from 'reactstrap';
import './index.scss'

class PageAdminContact extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="admin-card">
                <CardBody>
                  <span className="clearfix">
                    <h1 className="float-left display-3 mr-4">Admin</h1>
                    <h4 className="pt-3">Contact Admin to issue rights!</h4>
                    <p className="text-muted float-left">
                     You cant view your details without the rights!
                    </p>
                  </span>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageAdminContact;
