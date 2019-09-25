import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../../redux/actionCreators/authentication';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      passwordMessage: '',
      EmailMessage: '',
      passwordError: ''
    };

    this.formhandleChange = this.formhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('check my email');
    const {
      registration,
      registrationResponse: { token }
    } = this.props;
    localStorage.setItem('token', token);
    registration({ ...this.state });
  }

  formhandleChange(event) {
    event.preventDefault();
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    let regextTest = regex.test(event.target.value);
    if (event.target.name === 'email') {
      if (regextTest) {
        const companySuite = event.target.value.split('@')[1];
        if (!['jambopay.com', 'webtribe.com'].includes(companySuite)) {
          this.setState({
            emailError: true,
            emailMessage: 'Kindly use your Organizations Email '
          });
        } else {
          this.setState({
            emailError: false,
            email: event.target.value
          });
        }
      } else {
        this.setState({
          emailError: true,
          emailMessage: 'Kindly provide a valid email adress'
        });
      }
      this.setState({ email: event.target.value });
    }

    if (event.target.name === 'password') {
      const regex = /[a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/;
      const regextTest = regex.test(event.target.value);
      const password = event.target.value;
      console.log(regextTest, 'keep changing');
      if (password.length < 8) {
        this.setState({
          passwordError: true,
          passwordMessage: 'Password should have atleast 8 Characters'
        });
      } else if (!regextTest) {
        this.setState({
          passwordError: true,
          passwordMessage:
            'Password should have atleast a number and a special character'
        });
      } else if (regextTest) {
        this.setState({
          passwordError: false
        });
      } else {
        this.setState({ email: event.target.value });
      }
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="username"
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={this.formhandleChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={this.formhandleChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={this.formhandleChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="confirmPassword"
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                      />
                    </InputGroup>
                    <Button color="success" onClick={this.handleSubmit} block>
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return {
    registrationResponse: state.authentication.registrationData,
    loading: state.authentication.loading
  };
};

const matchDispatchToProps = {
  registration: registration
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Register);
