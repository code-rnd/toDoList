import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./store";
import * as serviceWorker from './serviceWorker';
import {WidjetContainer} from "./containers/tasks/WidjetContainer";

import './style.scss';
import './styleMedia/style.scss';

ReactDOM.render(
    <Provider store={store}>
        <WidjetContainer/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();