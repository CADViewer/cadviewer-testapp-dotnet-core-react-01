# cadviewer-testapp-dotnet-core-react-01
 CADViewer dotNetCore with ReactJS front-end sample

The repository contains a full setup of CADViewer with CAD Converters and script controllers for dotNet Core React.

## This package contains

1: CADViewer script library  - npm installed into ClientApp as part of React JS front-end.

2: AutoXchange AX2022 Converter and DWG Merge 2022 Converter - in their preferred folder structure

3: All structures for file-conversion, sample drawings, redlines, etc. 

4: ClientApp/src/index.js invokes helper script documents with CADViewer.js (CADViewer canvas initialization), script document with helper methods for testing the API (CADViewerHelperMethods.js and CADViewerHelperMethodsGroupSpaceMethods.js) and drag-place div to add objects to the canvas CADViewerSpaceObjects.js.

     4a:  Edit ClientApp/src/index.js to run: CADViewerHelperMethods.js
     4b:  Edit ClientApp/src/index.js to run: CADViewerHelperMethodsGroupSpaceMethods.js

5: The folder structure for dotNet core script handlers for communication between CADViewer and the back-end AutoXchange 2022.


## This package does not contain

6: The converter folder structure contains a larger set of fonts, installed in /cadviewer/converters/ax2022/windows/fonts/, but a fuller set of fonts can be installed. 

Read the sections on installing and handling [Fonts](https://tailormade.com/ax2020techdocs/installation/fonts/) in [AutoXchange 2022 TechDocs](https://tailormade.com/ax2020techdocs/) and [TroubleShooting](https://tailormade.com/ax2020techdocs/troubleshooting/).


## How to Use

Once installed, open cadviewer.sln the sample can be run from a web-browser. Use http://localhost:xxxxx/ as a starting point (assuming that your have installed under http://localhost:xxxxx).



## General Documentation 

-   [CADViewer Techdocs and Installation Guide](https://cadviewer.com/cadviewertechdocs/download)



## Updating CAD Converters

This repository should contain the latest converters, but in case you need to update any of the back-end converters please follow: 

* [Download **AutoXchange**](/download/) (and other converters), install (unzip) AX2022 in **cadviewer/converters/ax2022/windows** or **cadviewer/converters/ax2022/linux** or in the designated folder structure.

* Read the sections on installing and handling [Fonts](https://tailormade.com/ax2020techdocs/installation/fonts/) in [AutoXchange 2022 TechDocs](https://tailormade.com/ax2020techdocs/) and [TroubleShooting](https://tailormade.com/ax2020techdocs/troubleshooting/).

* Try out the samples and build your own application!
 

