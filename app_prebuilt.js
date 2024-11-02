injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
  color: 'rgba(255,255,255,0.4)'
});
var defaultStroke = new ol.style.Stroke({
  color: '#3399CC',
  width: 1.25
});
var defaultSelectionFill = new ol.style.Fill({
  color: 'rgba(255,255,0,0.4)'
});
var defaultSelectionStroke = new ol.style.Stroke({
  color: '#FFFF00',
  width: 1.25
});


                    var textStyleCache_municipiosdelacomunidaddemadrid={}
                    var clusterStyleCache_municipiosdelacomunidaddemadrid={}
                    var style_municipiosdelacomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipiosdelacomunidaddemadrid'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(141,90,153,0.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_municipiosdelacomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipiosdelacomunidaddemadrid'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_parqueregionalcursomediodelroguadarrama = function(){ return {"Mantenimiento de la Actividad": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(166,206,227,1.0)"}),
zIndex: 0
                            })
                            ],
"Máxima Protección": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(251,154,153,1.0)"}),
zIndex: 0
                            })
                            ],
"Protección y Mejora": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,127,0,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_parqueregionalcursomediodelroguadarrama = {"Mantenimiento de la Actividad": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Máxima Protección": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Protección y Mejora": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_parqueregionalcursomediodelroguadarrama={}
                    var clusterStyleCache_parqueregionalcursomediodelroguadarrama={}
                    var style_parqueregionalcursomediodelroguadarrama = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_parqueregionalcursomediodelroguadarrama'
        };
                        
                        var value = feature.get("DS_TIPO_ZO");
                        var style = categories_parqueregionalcursomediodelroguadarrama()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_parqueregionalcursomediodelroguadarrama = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_parqueregionalcursomediodelroguadarrama'
        };
                        var value = feature.get("DS_TIPO_ZO");
                        var style = categoriesSelected_parqueregionalcursomediodelroguadarrama[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_parqueregionaldelacuencaaltadelmanzanares = function(){ return {"A1: Reserva Natural Integral.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(253,231,37,1.0)"}),
zIndex: 0
                            })
                            ],
"A2: Reserva Natural Educativa.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(143,215,68,1.0)"}),
zIndex: 0
                            })
                            ],
"B1: Parque Comarcal Agropecuario Protector.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(53,183,121,1.0)"}),
zIndex: 0
                            })
                            ],
"B2: Parque Comarcal Agropecuario Productor.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(32,144,141,1.0)"}),
zIndex: 0
                            })
                            ],
"B3: Parque Comarcal Agropecuario a regenerar.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(49,104,142,1.0)"}),
zIndex: 0
                            })
                            ],
"P: Áreas a ordenar por Planeamiento Urbanistico.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(68,58,131,1.0)"}),
zIndex: 0
                            })
                            ],
"T: Áreas de Transición.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(68,1,84,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_parqueregionaldelacuencaaltadelmanzanares = {"A1: Reserva Natural Integral.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"A2: Reserva Natural Educativa.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"B1: Parque Comarcal Agropecuario Protector.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"B2: Parque Comarcal Agropecuario Productor.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"B3: Parque Comarcal Agropecuario a regenerar.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"P: Áreas a ordenar por Planeamiento Urbanistico.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"T: Áreas de Transición.": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_parqueregionaldelacuencaaltadelmanzanares={}
                    var clusterStyleCache_parqueregionaldelacuencaaltadelmanzanares={}
                    var style_parqueregionaldelacuencaaltadelmanzanares = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_parqueregionaldelacuencaaltadelmanzanares'
        };
                        
                        var value = feature.get("DS_TIPO_ZO");
                        var style = categories_parqueregionaldelacuencaaltadelmanzanares()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_parqueregionaldelacuencaaltadelmanzanares = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_parqueregionaldelacuencaaltadelmanzanares'
        };
                        var value = feature.get("DS_TIPO_ZO");
                        var style = categoriesSelected_parqueregionaldelacuencaaltadelmanzanares[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_montespreservados = function(){ return {"1": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(182,239,25,1.0)"}),
zIndex: 0
                            })
                            ],
"2": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(84,112,9,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_montespreservados = {"1": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"2": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_montespreservados={}
                    var clusterStyleCache_montespreservados={}
                    var style_montespreservados = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_montespreservados'
        };
                        
                        var value = feature.get("CD_TIPO");
                        var style = categories_montespreservados()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_montespreservados = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_montespreservados'
        };
                        var value = feature.get("CD_TIPO");
                        var style = categoriesSelected_montespreservados[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_montesdeutilidadpblica={}
                    var clusterStyleCache_montesdeutilidadpblica={}
                    var style_montesdeutilidadpblica = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_montesdeutilidadpblica'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(35,35,35,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(101,248,172,1.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_montesdeutilidadpblica = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_montesdeutilidadpblica'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_humedalesprotegidos = function(){ return {"COMPLEJO HUMEDAL": [ new ol.style.Style({
                                fill: new ol.style.Fill({
                                color: function() {
                                   var canvas = document.createElement('canvas');
                                   var context = canvas.getContext('2d');
                                   var grad = context.createLinearGradient(0,0,1000,0);
                                   grad.addColorStop(0, "rgba(93,48,100,1.0)");
                                   grad.addColorStop(1, "rgba(170,87,183,1.0)");
                                   return grad;
                                }()
                         }),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(119,61,128,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(152,78,163,0.0)"}),
zIndex: 0
                            })
                            ],
"LÁMINA DE AGUA": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(128,62,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255,127,0,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_humedalesprotegidos = {"COMPLEJO HUMEDAL": [ new ol.style.Style({
                                fill: new ol.style.Fill({
                                color: function() {
                                   var canvas = document.createElement('canvas');
                                   var context = canvas.getContext('2d');
                                   var grad = context.createLinearGradient(0,0,1000,0);
                                   grad.addColorStop(0, "rgba(93,48,100,1.0)");
                                   grad.addColorStop(1, "rgba(170,87,183,1.0)");
                                   return grad;
                                }()
                         }),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"LÁMINA DE AGUA": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_humedalesprotegidos={}
                    var clusterStyleCache_humedalesprotegidos={}
                    var style_humedalesprotegidos = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_humedalesprotegidos'
        };
                        
                        var value = feature.get("DS_CATEGOR");
                        var style = categories_humedalesprotegidos()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_humedalesprotegidos = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_humedalesprotegidos'
        };
                        var value = feature.get("DS_CATEGOR");
                        var style = categoriesSelected_humedalesprotegidos[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_embalsesprotegidos={}
                    var clusterStyleCache_embalsesprotegidos={}
                    var style_embalsesprotegidos = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_embalsesprotegidos'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                fill: new ol.style.Fill({
                                color: function() {
                                   var canvas = document.createElement('canvas');
                                   var context = canvas.getContext('2d');
                                   var grad = context.createLinearGradient(0,0,1000,0);
                                   grad.addColorStop(0, "rgba(47,110,158,1.0)");
                                   grad.addColorStop(1, "rgba(72,169,242,1.0)");
                                   return grad;
                                }()
                         }),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(38,89,128,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(55,126,184,0.0)"}),
zIndex: 1
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_embalsesprotegidos = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_embalsesprotegidos'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                fill: new ol.style.Fill({
                                color: function() {
                                   var canvas = document.createElement('canvas');
                                   var context = canvas.getContext('2d');
                                   var grad = context.createLinearGradient(0,0,1000,0);
                                   grad.addColorStop(0, "rgba(47,110,158,1.0)");
                                   grad.addColorStop(1, "rgba(72,169,242,1.0)");
                                   return grad;
                                }()
                         }),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 1
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'Stamen terrain',
    source: new ol.source.Stamen({
        crossOrigin: 'anonymous',
        layer: 'terrain'}),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world street map',
    source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        attributions: [new ol.Attribution({ html: 'Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">ArcGIS</a>'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_municipiosdelacomunidaddemadrid = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_municipiosdelacomunidaddemadrid,
                    selectedStyle: selectionStyle_municipiosdelacomunidaddemadrid,
                    title: "Municipios de la Comunidad de Madrid",
                    id: "solo_madrid_776bab72_1b20_4537_a300_a8d462878380",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<style type='text/css'> .popup-table tr td { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:10px } .popup-table tr th { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:12px; font-style:inherit }  </style> <table class='popup-table' style=''><tr bgcolor='#D8D3D3'>     <th height='24' colspan='2'>Municipios de la Comunidad de Madrid</th><tr valign='middle'>     <td width='155' height='14'>Nombre</td><td width='220' style='text-align:left'><p><span style='text-align:right'>[NAME_4]</span></p></td></tr> </table>",
                    attributes: ["ID_0", "ISO", "NAME_0", "ID_1", "NAME_1", "ID_2", "NAME_2", "ID_3", "NAME_3", "ID_4", "NAME_4", "VARNAME_4", "TYPE_4", "ENGTYPE_4"],
                    geometryType: "Polygon"
                });
var lyr_municipiosdelacomunidaddemadrid_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_municipiosdelacomunidaddemadrid});
municipiosdelacomunidaddemadrid_geojson_callback = function(geojson) {
                              lyr_municipiosdelacomunidaddemadrid.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_municipiosdelacomunidaddemadrid_overview.setSource(lyr_municipiosdelacomunidaddemadrid.getSource());
                        };
var lyr_parqueregionalcursomediodelroguadarrama = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_parqueregionalcursomediodelroguadarrama,
                    selectedStyle: selectionStyle_parqueregionalcursomediodelroguadarrama,
                    title: "Parque Regional Curso Medio del Río Guadarrama",
                    id: "SIGI_MA_PR_GUADARRAMAPolygon_91fa0583_2f91_48ca_bf37_7f0e3975d361",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<style type='text/css'> .popup-table tr td { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:10px } .popup-table tr th { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:12px; font-style:inherit }  </style> <table class='popup-table' style=''><tr bgcolor='#D8D3D3'>     <th height='24' colspan='2'>Parque Regional del Curso Medio del Río Guadarrama</th><tr valign='middle'>     <td width='155' height='14'>Número de tipo de zona</td><td width='220' style='text-align:left'><p>[CD_TIPO_ZO]</p></td></tr>     <tr valign='middle' bgcolor='#F0F0F0'><td height='14'><p>Tipo de zona</p></td> <td style='text-align:left'><p>[DS_TIPO_ZO]</p></td></tr> </table>",
                    attributes: ["CDID", "CD_TIPO_ZO", "DS_TIPO_ZO", "NM_AREA_HA"],
                    geometryType: "Polygon"
                });
var lyr_parqueregionalcursomediodelroguadarrama_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_parqueregionalcursomediodelroguadarrama});
parqueregionalcursomediodelroguadarrama_geojson_callback = function(geojson) {
                              lyr_parqueregionalcursomediodelroguadarrama.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_parqueregionalcursomediodelroguadarrama_overview.setSource(lyr_parqueregionalcursomediodelroguadarrama.getSource());
                        };
var lyr_parqueregionaldelacuencaaltadelmanzanares = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_parqueregionaldelacuencaaltadelmanzanares,
                    selectedStyle: selectionStyle_parqueregionaldelacuencaaltadelmanzanares,
                    title: "Parque Regional de la Cuenca Alta del Manzanares",
                    id: "SIGI_MA_PR_CA_MANZANARESPolygon_522c16ef_a76e_441a_9ff0_b59a41702f5c",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<style type='text/css'> .popup-table tr td { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:10px } .popup-table tr th { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:12px; font-style:inherit }  </style> <table class='popup-table' style=''><tr bgcolor='#D8D3D3'>     <th height='24' colspan='2'>Parque Regional de la Cuenca Alta del Manzanares</th><tr valign='middle'>     <td width='155' height='14'>Número de tipo de zona</td><td width='220' style='text-align:left'><p>[CD_TIPO_ZO]</p></td></tr>     <tr valign='middle' bgcolor='#F0F0F0'><td height='14'><p>Tipo de zona</p></td> <td style='text-align:left'><p>[DS_TIPO_ZO]</p></td></tr> </table>",
                    attributes: ["CDID", "CD_TIPO_ZO", "DS_TIPO_ZO", "NM_AREA_M", "NM_AREA_HA"],
                    geometryType: "Polygon"
                });
var lyr_parqueregionaldelacuencaaltadelmanzanares_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_parqueregionaldelacuencaaltadelmanzanares});
parqueregionaldelacuencaaltadelmanzanares_geojson_callback = function(geojson) {
                              lyr_parqueregionaldelacuencaaltadelmanzanares.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_parqueregionaldelacuencaaltadelmanzanares_overview.setSource(lyr_parqueregionaldelacuencaaltadelmanzanares.getSource());
                        };
var lyr_montespreservados = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_montespreservados,
                    selectedStyle: selectionStyle_montespreservados,
                    title: "Montes Preservados",
                    id: "SIGI_MA_MONTES_PRESERVADOSPolygon_99b05b06_4876_4f86_8c3e_1de1be732311",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<style type='text/css'> .popup-table tr td { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:10px } .popup-table tr th { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:12px; font-style:inherit }  </style> <table class='popup-table' style=''><tr bgcolor='#D8D3D3'>     <th height='24' colspan='2'>Montes Preservados</th><tr valign='middle'>     <td width='155' height='14'>Número de tipo</td><td width='220' style='text-align:left'><p><span style='text-align:right'>[CD_TIPO]</span></p></td></tr>     <tr valign='middle' bgcolor='#F0F0F0'><td height='14'><p>Tipo</p></td> <td style='text-align:left'><p><span style='text-align:right'>[DS_TIPO]</span></p></td></tr> </table>",
                    attributes: ["CDID", "CD_TIPO", "DS_TIPO", "NM_AREA_M", "NM_AREA_HA"],
                    geometryType: "Polygon"
                });
var lyr_montespreservados_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_montespreservados});
montespreservados_geojson_callback = function(geojson) {
                              lyr_montespreservados.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_montespreservados_overview.setSource(lyr_montespreservados.getSource());
                        };
var lyr_montesdeutilidadpblica = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_montesdeutilidadpblica,
                    selectedStyle: selectionStyle_montesdeutilidadpblica,
                    title: "Montes de Utilidad Pública",
                    id: "SIGI_MA_MONTES_UPPolygon_ffdff9d5_ee46_4a72_a3a3_c9030bd9a9d3",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<style type='text/css'> .popup-table tr td { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:10px } .popup-table tr th { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:12px; font-style:inherit }  </style> <table class='popup-table' style=''><tr bgcolor='#D8D3D3'>     <th height='24' colspan='2'>Montes de Utilidad Pública</th><tr valign='middle'>     <td width='155' height='14'>Número</td><td width='220' style='text-align:left'><p>[NM_UP]</p></td></tr>     <tr valign='middle' bgcolor='#F0F0F0'><td height='14'><p>Nombre</p></td> <td style='text-align:left'><p>[DS_NOMBRE]</p></td></tr>     <tr valign='middle'><td height='14' nowrap><p>Municipio</p></td><td style='text-align:left'><p>[DS_MUNICIP]</p></td></tr>     <tr valign='middle' bgcolor='#F0F0F0'><td height='14'><p>Propietario</p></td><td style='text-align:left'><p>[DS_PROPIET]</p></td></tr> </table>",
                    attributes: ["CDID", "NM_UP", "DS_ELENCO", "DS_NOMBRE", "DS_MUNICIP", "CD_COMARCA", "DS_PROPIET", "DS_NOM_PRO", "DS_GESTION", "CD_ANNO_IN", "DS_DESLIND", "FC_APROB_D", "DS_AMOJONA", "FC_APROB_A", "NM_SUPERFI", "NM_AREA_HA"],
                    geometryType: "Polygon"
                });
var lyr_montesdeutilidadpblica_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_montesdeutilidadpblica});
montesdeutilidadpblica_geojson_callback = function(geojson) {
                              lyr_montesdeutilidadpblica.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_montesdeutilidadpblica_overview.setSource(lyr_montesdeutilidadpblica.getSource());
                        };
var lyr_humedalesprotegidos = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_humedalesprotegidos,
                    selectedStyle: selectionStyle_humedalesprotegidos,
                    title: "Humedales protegidos",
                    id: "humedales_protegidos_CM_elab_propia_2f8d411c_602c_4660_8c36_abd0aa6a7388",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<style type='text/css'> .popup-table tr td { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:10px } .popup-table tr th { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:12px; font-style:inherit }  </style> <table class='popup-table'><tr bgcolor='#D8D3D3'>     <th height='29' colspan='2'>Humedales Protegidos</th><tr>     <td width='155'>Nombre</td><td width='220' style='text-align:left'><p>[<span style='text-align:right'>[DS_EMB_HUM]</span>]</p></td></tr><tr bgcolor='#F1F1F1'>       <td>Término municipal</td><td style='text-align:left'><p>[DS_TERMINO]</p></td></tr><tr>         <td>Subcuenca</td><td style='text-align:left'><p>[DS_SUBCUEN]</p></td></tr><tr bgcolor='#F1F1F1'>           <td>Relevancia</td><td style='text-align:left'><p>[DS_RELEVAN]</p></td></tr>                  <td height='14'>Categoría</td>           <td style='text-align:left'><span style='text-align:right'>[DS_CATEGOR]</span></td>         </tr> </table>",
                    attributes: ["CDID", "DS_EMB_HUM", "DS_TERMINO", "NM_ALTITUD", "DS_SUBCUEN", "DS_RELEVAN", "DS_PROTECC", "DS_CATEGOR", "NM_SUP_HA", "NM_UTMX", "NM_UTMY", "bbox"],
                    geometryType: "Polygon"
                });
var lyr_humedalesprotegidos_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_humedalesprotegidos});
humedalesprotegidos_geojson_callback = function(geojson) {
                              lyr_humedalesprotegidos.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_humedalesprotegidos_overview.setSource(lyr_humedalesprotegidos.getSource());
                        };
var lyr_embalsesprotegidos = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_embalsesprotegidos,
                    selectedStyle: selectionStyle_embalsesprotegidos,
                    title: "Embalses protegidos",
                    id: "embalses_protegidos_CM_elab_prop_971d562c_8235_4aa6_8bf3_9c74165c8491",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<style type='text/css'> .popup-table tr td { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:10px } .popup-table tr th { 	font-family: Cambria, Hoefler Text, Liberation Serif, Times, Times New Roman, serif; font-size:12px; font-style:inherit }  </style> <table class='popup-table'><tr bgcolor='#D8D3D3'>     <th height='29' colspan='2'>Embalses Protegidos</th><tr>     <td width='155'>Nombre</td><td width='220' style='text-align:left'><p>[<span style='text-align:right'>[DS_EMB_HUM]</span>]</p></td></tr><tr bgcolor='#F1F1F1'>       <td>Término municipal</td><td style='text-align:left'><p>[DS_TERMINO]</p></td></tr><tr>         <td>Subcuenca</td><td style='text-align:left'><p>[DS_SUBCUEN]</p></td></tr><tr bgcolor='#F1F1F1'>           <td>Relevancia</td><td style='text-align:left'><p>[DS_RELEVAN]</p></td></tr>                  <td height='14'>Categoría</td>           <td style='text-align:left'><span style='text-align:right'>[DS_CATEGOR]</span></td>         </tr> </table>",
                    attributes: ["CDID", "DS_EMB_HUM", "DS_TERMINO", "NM_ALTITUD", "DS_SUBCUEN", "DS_RELEVAN", "DS_PROTECC", "DS_CATEGOR", "NM_SUP_HA", "NM_UTMX", "NM_UTMY", "bbox"],
                    geometryType: "Polygon"
                });
var lyr_embalsesprotegidos_overview = new ol.layer.Vector({
                    source: new ol.source.Vector(),
                     
                    style: style_embalsesprotegidos});
embalsesprotegidos_geojson_callback = function(geojson) {
                              lyr_embalsesprotegidos.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_embalsesprotegidos_overview.setSource(lyr_embalsesprotegidos.getSource());
                        };

lyr_municipiosdelacomunidaddemadrid.setVisible(true);
lyr_parqueregionalcursomediodelroguadarrama.setVisible(true);
lyr_parqueregionaldelacuencaaltadelmanzanares.setVisible(true);
lyr_montespreservados.setVisible(true);
lyr_montesdeutilidadpblica.setVisible(true);
lyr_humedalesprotegidos.setVisible(true);
lyr_embalsesprotegidos.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_municipiosdelacomunidaddemadrid,lyr_parqueregionalcursomediodelroguadarrama,lyr_parqueregionaldelacuencaaltadelmanzanares,lyr_montespreservados,lyr_montesdeutilidadpblica,lyr_humedalesprotegidos,lyr_embalsesprotegidos];layersList.unshift(baseLayersGroup);
var layersMap  = {'lyr_municipiosdelacomunidaddemadrid':lyr_municipiosdelacomunidaddemadrid,'lyr_parqueregionalcursomediodelroguadarrama':lyr_parqueregionalcursomediodelroguadarrama,'lyr_parqueregionaldelacuencaaltadelmanzanares':lyr_parqueregionaldelacuencaaltadelmanzanares,'lyr_montespreservados':lyr_montespreservados,'lyr_montesdeutilidadpblica':lyr_montesdeutilidadpblica,'lyr_humedalesprotegidos':lyr_humedalesprotegidos,'lyr_embalsesprotegidos':lyr_embalsesprotegidos};
var legendData = {"SIGI_MA_PR_CA_MANZANARESPolygon_522c16ef_a76e_441a_9ff0_b59a41702f5c": [{"href": "2_0.png", "title": "A1: Reserva Natural Integral."}, {"href": "2_1.png", "title": "A2: Reserva Natural Educativa."}, {"href": "2_2.png", "title": "B1: Parque Comarcal Agropecuario Protector."}, {"href": "2_3.png", "title": "B2: Parque Comarcal Agropecuario Productor."}, {"href": "2_4.png", "title": "B3: Parque Comarcal Agropecuario a regenerar."}, {"href": "2_5.png", "title": "P: \u00c1reas a ordenar por Planeamiento Urbanistico."}, {"href": "2_6.png", "title": "T: \u00c1reas de Transici\u00f3n."}], "SIGI_MA_MONTES_UPPolygon_ffdff9d5_ee46_4a72_a3a3_c9030bd9a9d3": [{"href": "4_0.png", "title": ""}], "embalses_protegidos_CM_elab_prop_971d562c_8235_4aa6_8bf3_9c74165c8491": [{"href": "6_0.png", "title": ""}], "SIGI_MA_PR_GUADARRAMAPolygon_91fa0583_2f91_48ca_bf37_7f0e3975d361": [{"href": "1_0.png", "title": "Mantenimiento de la Actividad"}, {"href": "1_1.png", "title": "M\u00e1xima Protecci\u00f3n"}, {"href": "1_2.png", "title": "Protecci\u00f3n y Mejora"}], "humedales_protegidos_CM_elab_propia_2f8d411c_602c_4660_8c36_abd0aa6a7388": [{"href": "5_0.png", "title": "Complejo humedal"}, {"href": "5_1.png", "title": "L\u00e1mina de agua"}], "SIGI_MA_MONTES_PRESERVADOSPolygon_99b05b06_4876_4f86_8c3e_1de1be732311": [{"href": "3_0.png", "title": "1"}, {"href": "3_1.png", "title": "2"}], "solo_madrid_776bab72_1b20_4537_a300_a8d462878380": [{"href": "0_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [-492605.338327, 4857387.870480, -394450.784091, 4977956.099513];
var unitsConversion = 1;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: []
});



var BasicApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: getMuiTheme()
    };
  },
  componentDidMount: function() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_municipiosdelacomunidaddemadrid_overview,lyr_parqueregionalcursomediodelroguadarrama_overview,lyr_parqueregionaldelacuencaaltadelmanzanares_overview,lyr_montespreservados_overview,lyr_montesdeutilidadpblica_overview,lyr_humedalesprotegidos_overview,lyr_embalsesprotegidos_overview]}));
  },
  _toggle: function(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable: function() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST: function() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery: function() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit: function() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _hideAboutPanel: function(evt) {
    evt.preventDefault();
    document.getElementById('about-panel').style.display = 'none';
  },
  _toggleChartPanel: function(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  render: function() {
    var toolbarOptions = {title:"Parques Regionales. Montes. Embalses. Humedales"};
    return React.createElement("div", {id: 'content'},
      React.createElement(Header, toolbarOptions ),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
      )
      ,
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:false,
                                        showZoomTo:false, allowReordering:true,
                                        allowFiltering:false, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', showUpload:false, map:map,
                                        includeLegend:true, allowStyling:false, showTable:false})),
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in',
                                    zoomOutTipLabel: 'Zoom out',
                                    delta: 1.2,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));
