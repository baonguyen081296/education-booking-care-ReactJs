import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux';
import { ToastContainer } from 'react-toastify';

import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from '../hoc/authentication';

import Home from '../routes/Home';

import System from '../routes/System';
import './App.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { CustomToastCloseButton } from '../components/CustomToast';
import Login from './Auth/Login';
import HomePage from './HomePage/HomePage';
import CustomScrollbars from 'components/CustomScrollbars';
import { paths } from 'configs/paths';
import DetailDoctor from './Patient/Doctor/DetailDoctor';
import DoctorRoutes from 'routes/DoctorRoutes';
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <div className='_app main-container'>
            <div className='content-container'>
              <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                <Switch>
                  <Route
                    path={paths.LOGIN}
                    component={userIsNotAuthenticated(Login)}
                  />
                  <Route
                    path={paths.SYSTEM.SYSTEM}
                    component={userIsAuthenticated(System)}
                  />
                  <Route
                    path={paths.DOCTOR.MANAGE_SCHEDULE}
                    component={userIsAuthenticated(DoctorRoutes)}
                  />
                  <Route path={paths.HOME_PAGE} component={HomePage} />
                  <Route
                    // path={`${paths.DOCTOR.DETAIL}/:id`}
                    path={`/doctor/:id`}
                    component={DetailDoctor}
                  />
                  <Route path={paths.HOME} exact component={Home} />
                </Switch>
              </CustomScrollbars>
            </div>

            <ToastContainer
            // className='toast-container'
            // toastClassName='toast-item'
            // bodyClassName='toast-item-body'
            // autoClose={false}
            // hideProgressBar={true}
            // pauseOnHover={false}
            // pauseOnFocusLoss={true}
            // closeOnClick={false}
            // draggable={false}
            // closeButton={<CustomToastCloseButton />}
            />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
