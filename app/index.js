import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './src/routes';
import reducers from './src/reducers';
import initialState from './src/data/people';
import style from './index.css';

const history = createHistory();
const store = createStore(
  reducers,
  initialState
);
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
