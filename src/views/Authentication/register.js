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
  FormFeedback,
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
      username: '',
      companyName: '',
      usernamError: false,
      usernameErrorMessage: '',
      emailError: false,
      passwordError: false,
      passwordMessage: '',
      emailMessage: '',
      confirmPassword: '',
      confirmPasswordError: false,
      confirmPasswordErrorMessage: '',
      companyNameError: false,
      companyNameErrorMessage: ''
    };

    this.formhandleChange = this.formhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponseErrors = this.handleResponseErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { errorResponseData } = this.props;
    const { errorResponseData: errorNext } = nextProps;
    console.log(errorNext, 'what is here');
   
    if (errorNext !== errorResponseData) {
        this.handleResponseErrors(errorNext);
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('check my email');
    const {
      registration,
      registrationResponse,
      errorResponseData,
      history
    } = this.props;
    console.log(registrationResponse, errorResponseData, 'JJJJJJJJJ');
    registration({ ...this.state });
    setTimeout(() => {
      history.push('/dashboard');
    }, 8000);
  }

  handleResponseErrors(responsdata) {
    console.log('PPPPPPPP', responsdata);
    const { company, username, password, email } = responsdata;
    console.log(company, 'UUUUUU')
    if (company && company.length > 0) {
     
      this.setState({
        companyNameError: true,
        companyNameErrorMessage: company[0]
      });
    }

    if (username && username.length > 0){
      this.setState({
        usernamError: true,
        usernameErrorMessage: username[0]
      });
    }
    if (password && password.length > 0){
      this.setState({
        passwordError: true,
      passwordMessage: password[0]
      });
    }
    if (email && email.length > 0){
      this.setState({
        emailError: true,
        emailMessage: email[0]
      });
    }


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
      const regex = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])/;
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

    if (event.target.name === 'confirmPassword') {
      const { password } = this.state;
      if (event.target.value !== password) {
        this.setState({
          confirmPasswordError: true,
          confirmPasswordErrorMessage: 'Passwords do not match'
        });
      } else {
        this.setState({
          confirmPasswordError: false
        });
      }
    }
    if (event.target.name === 'username') {
      if (event.target.name.length < 3) {
        this.setState({
          usernamError: true,
          usernameErrorMessage:
            'Username length should be atleast three characters long'
        });
      } else {
        this.setState({
          usernameEror: false
        });
      }
      this.setState({ username: event.target.value });
    }
    if (event.target.name === 'companyName') {
      this.setState({ companyName: event.target.value });
    }
  }

  render() {
    const {
      emailError,
      emailMessage,
      usernamError,
      usernameErrorMessage,
      passwordError,
      passwordMessage,
      confirmPasswordError,
      confirmPasswordErrorMessage,
      companyNameError,
      companyNameErrorMessage
    } = this.state;
    const { registrationResponse } = this.props;
    const { token } = registrationResponse;
    if (token !== undefined) {
      localStorage.setItem('token', token);
    }

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
                        invalid={usernamError}
                        name="username"
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={this.formhandleChange}
                      />
                      <FormFeedback>{usernameErrorMessage}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        invalid={emailError}
                        name="email"
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={this.formhandleChange}
                      />
                      <FormFeedback>{emailMessage}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        invalid={passwordError}
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={this.formhandleChange}
                      />
                      <FormFeedback>{passwordMessage}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        invalid={confirmPasswordError}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        autoComplete="new-password"
                        onChange={this.formhandleChange}
                      />
                      <FormFeedback>{confirmPasswordErrorMessage}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        invalid={companyNameError}
                        name="companyName"
                        type="text"
                        placeholder="Company Name"
                        autoComplete="Company Name"
                        onChange={this.formhandleChange}
                      />
                      <FormFeedback>{companyNameErrorMessage}</FormFeedback>
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
    loading: state.authentication.loading,
    errorResponseData: state.authentication.errorResponseData
  };
};

const matchDispatchToProps = {
  registration: registration
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Register);
