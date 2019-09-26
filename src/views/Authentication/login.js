import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actionCreators/authentication';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      passwordMessage: '',
      EmailMessage: '',
      companyName: ''
    };

    this.formhandleChange = this.formhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(e) {
    e.preventDefault();
    console.log('check my email');
    const {
      login,
      history
    } = this.props;
    login({ ...this.state });
   
    setTimeout(() => {
      history.push('/dashboard');
    }, 8000);
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
      }
      this.setState({ password: event.target.value });
    }
  }

  render() {
    const {
      emailError,
      emailMessage,
      passwordError,
      passwordMessage
    } = this.state;
    const { loginResponse } = this.props;
    const {token} = loginResponse
    if(token !== undefined){
        localStorage.setItem('token', token)
    }
    console.log(loginResponse, '>>>>>>>>>>>');
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid={emailError}
                          type="text"
                          placeholder="email"
                          autoComplete="email"
                          name="email"
                          onChange={this.formhandleChange}
                        />
                        <FormFeedback>{emailMessage}</FormFeedback>
                      </InputGroup>

                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid={passwordError}
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          name="password"
                          onChange={this.formhandleChange}
                        />
                        <FormFeedback>{passwordMessage}</FormFeedback>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={this.handleSubmit}
                          >
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: '44%' }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    loginResponse: state.authentication.loginData,
    loading: state.authentication.loading
  };
};

const matchDispatchToProps = {
  login: login
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Login);
