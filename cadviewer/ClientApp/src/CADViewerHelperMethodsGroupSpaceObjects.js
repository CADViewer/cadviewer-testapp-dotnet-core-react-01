import React, { Component }  from 'react';
import jQuery from 'jquery';
import {findDOMNode } from 'react-dom';
import logo from './logo.svg';
import './CADViewerHelperMethods.css';
import { render } from '@testing-library/react';

// We are only accessing the functional interface of CADViewer, not the canvas, so this import is sufficient
import * as cadviewer from "cadviewer";

import * as CV from "./CADViewer.js";




var iconObjectCounter = 1;


 
function hide_object_in_group(){

  var id = jQuery('#copy_new_id').val();    
  var node = cadviewer.cvjs_getSpaceObjectNodefromId(id);
  var objectTag = jQuery('#group_2_subid').val();    
  cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, objectTag);
  
}


function show_object_in_group(){

  var id = jQuery('#copy_new_id').val();    
  var node = cadviewer.cvjs_getSpaceObjectNodefromId(id);
  var objectTag = jQuery('#group_2_subid').val();    
  cadviewer.cvjs_showObjectInSpaceObjectGroup(node, objectTag);
  
}


////////// FETCH ALL SPACE OBJECTS 


function display_all_objects(){
/*
 * Return a JSON structure with  all Space Object content, each entry is of the form: <br>
 * 	SpaceObjects :[  	{	"path":   path, <br>
 *								"tags": tags, <br>
 *								"node": node, <br>
 *								"area": area, <br>
 *								"outerhtml": outerHTML, <br>
 *								"occupancy": occupancy, <br>
 *								"name": name, <br>
 *								"type": type, <br>
 *								"id": id, <br>
 *								"defaultcolor": defaultcolor, <br>
 *								"layer": layer, <br>
 *								"group": group, <br>
 *								"linked": linked, <br>
 *								"attributes": attributes, <br>
 *								"attributeStatus": attributeStatus, <br>
 *								"displaySpaceObjects": displaySpaceObjects, <br>
 *								"translate_x": translate_x, <br>
 *								"translate_y": translate_y, <br>
 *								"scale_x": scale_x ,<br>
 *								"scale_y": scale_y ,<br>
 *								"rotate": rotate, <br>
 *								"transform": transform} <br> ]
 * @param {string} spaceID - Id of the Space Object to return
 * @return {Object} jsonSpaceObject - Object with all space objects content
 */

  //   get json obhect with all spaces processed from drawing
  var allSpaceObjects = cadviewer.cvjs_returnAllSpaceObjects();

  var myString = "";
  for (var spc in allSpaceObjects.SpaceObjects){
    console.log(spc);
    myString += "("+allSpaceObjects.SpaceObjects[spc].id+", "+allSpaceObjects.SpaceObjects[spc].area+")";
  }

  window.alert("The spaces with area (id,area): "+myString);

}



function insert_from_type_id_image(){

    var loadSpaceImage_Location = "/cadviewer/content/drawings/svg/" + jQuery('#image_sensor_location').val();
    var loadSpaceImage_ID = jQuery('#image_ID').val();
    var loadSpaceImage_Type = jQuery('#image_Type').val();
    var loadSpaceImage_Layer = "cvjs_SpaceLayer";

    cadviewer.cvjs_setImageSpaceObjectParameters(loadSpaceImage_Location, loadSpaceImage_ID, loadSpaceImage_Type, loadSpaceImage_Layer);
    cadviewer.cvjs_addFixedSizeImageSpaceObject("floorPlan");
    iconObjectCounter++;

}




function create_group_space_object_01() {

    var loadSpaceImage_ID = "IdentivId_" + iconObjectCounter;
    var loadSpaceImage_Name = "IdentivName_" + iconObjectCounter;

    var loadSpaceImage_Type = "IdentivObject";
    var loadSpaceImage_Layer = "cvjs_SpaceLayer";

    var LocationOr64byteEncodedArr = [];
    var layerArr = [];

    var base64svg = "data:image/svg+xml;base64,";

    //LocationOr64byteEncodedArr[0] = "c:/cadviewer-testapp-dotnet-core-react-01/cadviewer/cadviewer/wwwroot/content/drawings/svg/v04/" + jQuery('#layer1').val();
    //window.alert(LocationOr64byteEncodedArr[0]);

    LocationOr64byteEncodedArr[0] = CV.ServerBackEndUrl + "/content/drawings/svg/v04/" + jQuery('#layer1').val();
    LocationOr64byteEncodedArr[1] = CV.ServerBackEndUrl + "/content/drawings/svg/v04/" + jQuery('#layer2').val();
    LocationOr64byteEncodedArr[2] = CV.ServerBackEndUrl + "/content/drawings/svg/v04/" + jQuery('#layer3').val();

    var cvjs_LoadFile = CV.ServerBackEndUrl + "/CADViewer/LoadFile";   // "/CADViewer/LoadFile";

    //window.alert("cvjs_LoadFile" + cvjs_LoadFile)


    var js_data = {};
    var content = "";
    js_data['file'] = LocationOr64byteEncodedArr[0];
    //window.alert(cvjs_phpLoadConfigFile+"  "+js_data['file']);
    jQuery.ajax({
        url: cvjs_LoadFile,
        type: 'post',
        async: false,
        data: js_data,
        success: function (myfile) {
            				//window.alert("1: "+myfile);
            content = myfile;
        },
        error: function (data_e) { /*window.alert("1 error" + data_e);*/ console.log("Error " + data_e); return; }
    });
    LocationOr64byteEncodedArr[0] = base64svg + btoa(content);


    js_data = {};
    js_data['file'] = LocationOr64byteEncodedArr[1];
    //window.alert(cvjs_phpLoadConfigFile+"  "+js_data['file']);
    jQuery.ajax({
        url: cvjs_LoadFile,
        type: 'post',
        async: false,
        data: js_data,
        success: function (myfile) {
            				//window.alert("2: "+myfile);
            content = myfile;
        },
        error: function (data_e) { /*window.alert("2 error" + data_e);*/  window.alert(data_e); console.log("Error " + data_e); return; }
    });
    LocationOr64byteEncodedArr[1] = base64svg + btoa(content);

    js_data = {};
    js_data['file'] = LocationOr64byteEncodedArr[2];
    //window.alert(cvjs_phpLoadConfigFile+"  "+js_data['file']);
    jQuery.ajax({
        url: cvjs_LoadFile,
        type: 'post',
        async: false,
        data: js_data,
        success: function (myfile) {
            				//window.alert("3: "+myfile);
            content = myfile;
        },
        error: function (data_e) { /* window.alert("3 error" + data_e); */ console.log("Error " + data_e); return; }
    });
    LocationOr64byteEncodedArr[2] = base64svg + btoa(content);



    /*
            LocationOr64byteEncodedArr[0] = "http://localhost/cadviewer/content/drawings/svg/v04/Door-closed.svg";
            LocationOr64byteEncodedArr[1] = "http://localhost/cadviewer/content/drawings/svg/v04/Door-open.svg";
            LocationOr64byteEncodedArr[2] = "http://localhost/cadviewer/content/drawings/svg/v04/Door-lockdown.svg";
    */





    layerArr[0] = "closed";
    layerArr[1] = "open";
    layerArr[2] = "lockdown";

    //		window.alert(loadSpaceImage_LocationOr64byteEncoded);

    // load the drawing
    // read viewport
    // set width+height

    // encode as 64byte
    // determine on how to handle secondary layers in the drawing


    iconObjectCounter++;

    var jsonSpaceObject = cadviewer.cvjs_createNewJSonSpaceObject();

    jsonSpaceObject.id = loadSpaceImage_ID;  // "id_001" can be repeat objects from custom part
    jsonSpaceObject.name = loadSpaceImage_Name; // "Vessel A"
    jsonSpaceObject.type = loadSpaceImage_Type; // "Vessel A"
    jsonSpaceObject.layer = loadSpaceImage_Layer;   // "Vessel Layer"
    //jsonSpaceObject.customContent =  {".customContent" : "all.customContentstructure"};

    var baseAttributes = {
        fill: '#D30000',   // #FFF   #ffd7f4
        "fill-opacity": "0.15",   // 0.1
        stroke: '#CCC',
        'stroke-width': 1,
        'stroke-linejoin': 'round',
    };

    var highlightAttributes = {
        fill: '#a4d7f4',
        "fill-opacity": "0.5",
        stroke: '#a4d7f4',
        'stroke-width': 3
    };

    var selectAttributes = {
        fill: '#5BBEF6',
        "fill-opacity": "0.5",
        stroke: '#5BBEF6',
        'stroke-width': 3
    };


    jsonSpaceObject.defaultcolor = baseAttributes;
    jsonSpaceObject.highlightcolor = highlightAttributes;
    jsonSpaceObject.selectcolor = selectAttributes;


    var scale = 1;     // if scale = 1 or null, no action is taken
    var width = null;    // null, autoscale, value
    var height = null;  // null, autoscale, value

    var width = 20;    // null, autoscale, value
    var height = 26;  // null, autoscale, value


    var unit = "svg";   // svg = svg coordinates,  modelspace  = modelspace units,   mm, cm, m, inch , feet  = using transformation matrix values

    jsonSpaceObject.rotate = 0;


    // this is optional!!

    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    var strDate2 = d.getFullYear() + "/" + (d.getMonth() + 2) + "/" + 8;

    // users can add custom objects freely designed
    // this is just a template holder

    var customObject = {
        "insertType": "IdentivObject",
        "generalInfo": { "id": jsonSpaceObject.id, "name": loadSpaceImage_Name, "type": loadSpaceImage_Type, "begindate": strDate, "enddate": strDate2 },
        "dimension": { "unit": "svg", "width": width, "length": height, "rotationInsert": 0 },
        "insertRules": { "initialPositionVerified": false, "positionChanged": false, "infoAdded": false, "inserted": false },
        "logicalRules": [
        ],
        "userAddedInfo": {}
    };

    jsonSpaceObject.customContent = customObject;

    //cvjs_addSpaceObject("floorPlan", loadSpaceImage_ID, loadSpaceImage_LocationOr64byteEncoded, scale, width, height, 0, unit, jsonSpaceObject);
    cadviewer.cvjs_addLayeredSpaceObject("floorPlan", loadSpaceImage_ID, LocationOr64byteEncodedArr, layerArr, scale, width, height, 0, unit, jsonSpaceObject)

}

function close_all() {

        // note - we loop over all objects

    var spaceObjectIds = cadviewer.cvjs_getSpaceObjectNodeList();
    for (var spc in spaceObjectIds) {
        var node = spaceObjectIds[spc];

        cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, "open");
        cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, "lockdown");
        cadviewer.cvjs_showObjectInSpaceObjectGroup(node, "closed");
    }

}


function lockdown_all() {

        // note - we loop over all objects

    var spaceObjectIds = cadviewer.cvjs_getSpaceObjectNodeList();
    for (var spc in spaceObjectIds) {
        var node = spaceObjectIds[spc];

        cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, "open");
        cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, "closed");
        cadviewer.cvjs_showObjectInSpaceObjectGroup(node, "lockdown");
    }

}



function open_all() {

    // note - we loop over all objects
    var spaceObjectIds = cadviewer.cvjs_getSpaceObjectNodeList();
    for (var spc in spaceObjectIds) {
        var node = spaceObjectIds[spc];

        cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, "closed");
        cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, "lockdown");
        cadviewer.cvjs_showObjectInSpaceObjectGroup(node, "open");
    }

}

function open_last() {

    // note - we just open the last one in the set!

    var spaceObjectIds = cadviewer.cvjs_getSpaceObjectNodeList();
    var node = spaceObjectIds[spaceObjectIds.length-1];
    cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, "closed");
    cadviewer.cvjs_hideObjectInSpaceObjectGroup(node, "lockdown");
    cadviewer.cvjs_showObjectInSpaceObjectGroup(node, "open");
}


var loadSpaceImage_ID = "";
var loadSpaceImage_Type = "topImage";
var loadSpaceImage_Layer = "toplayer";






// END - SAMPLE TO DRAG RECTANGLE over HANDLES



/////////  CANVAS CONTROL METHODS END


class CADViewerHelperMethodsGroupSpaceObjects extends Component {


  async componentDidMount () {

     /*
    var slider = document.getElementById("myRange");
    var output = document.getElementById("iconsize");
    output.innerHTML = slider.value+"%";
    
    slider.oninput = function() {
      output.innerHTML = this.value+"%";
      // SETTTING THE CADVIEWER GLOBAL CONTROLS:
      
      cadviewer.cvjs_setGlobalSpaceImageObjectScaleFactor(this.value/100.0);
      
    }
    */

  }  

  render(){
    return (
      <div className="CADViewerHelperMethodsGroupSpaceObjects">

{/*}
        CADViewer: Space Objects and Canvas Methods Interface  <font size="-1"> - Read more: <strong><a href="https://cadviewer.com/cadviewertechdocs/samples/spaceicons/">Tech Docs</a></strong>. Contact: <a href="mailto:developer@tailormade.com">developer@tailormade.com</a>.</font></h4>
        New Space Type/ID/Image:&nbsp; <button className="w3-button demo" onClick="insert_from_type_id_image();">New Space Object</button>&nbsp;&nbsp; Update Group ID: &nbsp; <button className="w3-button demo" onClick="update_group_with_path();">Add Path Object to Group</button>&nbsp; 
        <br/>Second group ID: &nbsp; &nbsp;<input type="text" id="group_2" defaultValue="NODE_xx" />&nbsp;<input type="text" id="group_2_subid" defaultValue="id_01" />&nbsp;<button className="w3-button demo" onClick="update_group_with_group();">Add Group to Group</button>&nbsp; &nbsp; <button className="w3-button demo" onClick="hide_object_in_group();">Hide Object In Group</button>&nbsp;&nbsp;  <button className="w3-button demo" onClick="show_object_in_group();">Show Object In Group</button>&nbsp;
    */}

<canvas id="dummy" width="5" height="21"></canvas>
	<strong>Space Type:</strong>&nbsp; 	<input type="text" id="image_Type" defaultValue="Wifi" />
    <strong>Space ID:</strong>&nbsp; 	<input type="text" id="image_ID" defaultValue="wifi_1" />
    <strong>Space Image:</strong>&nbsp; 	<input type="text" id="image_sensor_location" defaultValue="wifi_25.svg" />
    <strong>Create:</strong>&nbsp; 	<button className="w3-button demo" onClick={insert_from_type_id_image}>New Space Object</button>
    <br/>
    <canvas id="dummy" width="5" height="22"></canvas>    
	
    <button className="w3-button demo" onClick={create_group_space_object_01}>create_group_space_object</button>
	<input type="text" id="layer1" defaultValue="Door-closed.svg" />
	<input type="text" id="layer2" defaultValue="Door-open.svg" />
	<input type="text" id="layer3" defaultValue="Door-lockdown.svg" /><br/>

    <button className="w3-button demo" onClick={open_all}>open_all</button>
	<button className="w3-button demo" onClick={close_all}>close_all</button>
	<button className="w3-button demo" onClick={lockdown_all}>lockdown_all</button>
    <button className="w3-button demo" onClick={open_last}>open last</button>

    </div>

    );

  }
}

export default CADViewerHelperMethodsGroupSpaceObjects;
