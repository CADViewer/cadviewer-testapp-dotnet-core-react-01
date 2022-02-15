import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CADViewer from './CADViewer';
import CADViewerSpaceObjects from './CADViewerSpaceObjects';
/*import CADViewerHelperMethods from './CADViewerHelperMethods';   comment out if CADViewerHelperMetodsGroupSpaceObjects  */
import CADViewerHelperMethodsGroupSpaceObjects from './CADViewerHelperMethodsGroupSpaceObjects';  /*  comment out if CADViewerHelperMetods */
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <CADViewerSpaceObjects/>,
  document.getElementById('CADViewerSpaceObjects')
);

/*
// main helper methods file
// dont forget to activate: import CADViewerHelperMethods from './CADViewerHelperMethods';
ReactDOM.render(
    <CADViewerHelperMethods/>,
  document.getElementById('CADViewerHelperMethods')
);
*/



// Alternative branch for group space objects
// dont forget to activate: import CADViewerHelperMethodsGroupSpaceObjects from './CADViewerHelperMethodsGroupSpaceObjects';
ReactDOM.render(
    <CADViewerHelperMethodsGroupSpaceObjects />,
    document.getElementById('CADViewerHelperMethods')
);




ReactDOM.render(
    <CADViewer/>,
  document.getElementById('CADViewerCanvas')
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
