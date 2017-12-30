import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { chart } from './reducers/chart';
import { ChartState } from './types/chart';

import Chart from './containers/chart';
import { Provider } from 'react-redux';

const store = createStore<ChartState>(chart, {
  stocks: ['GOOG', 'BTC']
});

ReactDOM.render(
  <Provider store={store}>
    <Chart />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
