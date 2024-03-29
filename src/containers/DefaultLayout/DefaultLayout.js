import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { addDays, format } from 'date-fns';
import { getValueCenter } from '../../redux/actionCreators/ValueCenter';
import { getNavBarData } from '../../redux/actionCreators/navbar';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { ReactComponent as Logo } from '../../../src/assets/svg/BiTool.svg';
import { Container } from 'reactstrap';
import AuthUtils from '../../utils/authFuncs';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from '@coreui/react';
// sidebar nav config
import NavbarGenerator from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor() {
    super();
    this.state = {
      dateRangePicker: {
        selection: {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      },
      modal: false,
      period: 'monthly',
      year: '2019'
    };
    this.openModal = this.openModal.bind(this);
    this.formatDateDisplay = this.formatDateDisplay.bind(this);
  }

  componentDidMount() {
    const { getNavBarDataAction } = this.props;
    const token = localStorage.getItem('token');
    const tokenInformation = AuthUtils.verifyToken(token);
    const { company_id: companyId } = tokenInformation;
    const payload = { companyId: companyId };
    getNavBarDataAction({ ...payload });
    if (token) {
      if (AuthUtils.checkExpiry(token)) {
        AuthUtils.logout();
        setTimeout(() => {
          this.props.history.push('/login');
        }, 3000);
      }
    }
  }

  openModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    AuthUtils.logout();
    setTimeout(() => {
      this.props.history.push('/login');
    }, 3000);
  }

  formatDateDisplay(date, defaultText) {
    if (!date) return defaultText;
    return format(date, 'MM/DD/YYYY');
  }

  handleRangeChange(which, payload) {
    this.setState({
      [which]: {
        ...this.state[which],
        ...payload
      }
    });
  }

  render() {
    const token = localStorage.getItem('token');
    const tokenInformation = AuthUtils.verifyToken(token);
    const { roles } = tokenInformation;
    const { navbar } = this.props;
    const stringRole = JSON.stringify(roles);
    const roleString = stringRole.slice(2, stringRole.length - 2);
    const role = [roleString];
    return navbar.length === 0 ? (
      <div>
        {/* Logo is an actual React component */}
        <Loader type="Puff" color="#00BFFF" height="50" width="50" />
        <Logo />
      </div>
    ) : (
      <div className="app">
        {console.log(NavbarGenerator.generateNavbarobject(navbar, role))}
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={NavbarGenerator.generateNavbarobject(navbar, role)}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            {/* <Row>
              <Col sm="8" lg="11" className="d-none d-sm-inline-block">
                <ButtonGroup className="float-right">
                  <ButtonDropdown
                    id="card1"
                    isOpen={this.state.card1}
                    toggle={() => {
                      this.setState({ card1: !this.state.card1 });
                    }}
                  >
                    <DropdownToggle
                      style={{ marginRight: -9 + "em" }}
                      caret
                      className="p-0"
                      color="transparent"
                    />
                    <DropdownMenu right>
                      <DropdownItem>
                        <p onClick={this.openModal}>heeeeey</p>
                        <Targetmodal
                          dateRangePicker={this.state.dateRangePicker}
                          handleRangeChange={this.handleRangeChange}
                          modal={this.state.modal}
                          openModal={this.openModal}
                        />
                      </DropdownItem>
                      <DropdownItem>Set Okr</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </Col>
            </Row> */}
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    navbar: state.navBar.navbarData
  };
};

const mapDispatchToProps = {
  getValueCentersAction: getValueCenter,
  getNavBarDataAction: getNavBarData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
