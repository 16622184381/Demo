﻿
var map;
function mainmap() {
    require([
      "esri/map",
      "esri/toolbars/draw",
      "esri/graphic",
      "esri/layers/ArcGISDynamicMapServiceLayer",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/symbols/SimpleFillSymbol",

      "dojo/parser", "dijit/registry",

      "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
      "dijit/form/Button", "dijit/WidgetSet", "dojo/domReady!"
    ], function (
      Map, Draw, Graphic, ArcGISDynamicMapServiceLayer,
      SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol,
      parser, registry
    ) {
        parser.parse();
        map = new Map("map");
        var agoServiceURL = "https://172.20.53.158:6443/arcgis/rest/services/MyMapService/MapServer";
        var agoLayer = new esri.layers.ArcGISDynamicMapServiceLayer(agoServiceURL);
        map.addLayer(agoLayer);
    });

}
mainmap();