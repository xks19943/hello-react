import React from 'react';
import ReactDom from 'react-dom';
//import ControlPanel from './control/ControlPanel';
//import ControlPanel from './control_flux/ControlPanel';
//import ControlPanel from './control_redux/ControlPanel';
//import ControlPanel from './control_redux2/ControlPanel';


import ControlPanel from './control_redux3_context/ControlPanel';
import Provider from './control_redux3_context/Provider';
import Store from './control_redux3_context/Store';


// import Store from './control_redux4_react_redux/Store';
// import ControlPanel from './control_redux4_react_redux/ControlPanel';
// import { Provider } from 'react-redux';

ReactDom.render(
  <Provider store={Store}>
    <ControlPanel/>
  </Provider>,
  document.getElementById('root')
);

