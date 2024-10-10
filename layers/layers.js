var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUMBERAIRMINUMRUMAHTANGGA2021_1 = new ol.format.GeoJSON();
var features_SUMBERAIRMINUMRUMAHTANGGA2021_1 = format_SUMBERAIRMINUMRUMAHTANGGA2021_1.readFeatures(json_SUMBERAIRMINUMRUMAHTANGGA2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMBERAIRMINUMRUMAHTANGGA2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMBERAIRMINUMRUMAHTANGGA2021_1.addFeatures(features_SUMBERAIRMINUMRUMAHTANGGA2021_1);
var lyr_SUMBERAIRMINUMRUMAHTANGGA2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMBERAIRMINUMRUMAHTANGGA2021_1, 
                style: style_SUMBERAIRMINUMRUMAHTANGGA2021_1,
                popuplayertitle: "SUMBER AIR MINUM RUMAH TANGGA 2021",
                interactive: true,
    title: 'SUMBER AIR MINUM RUMAH TANGGA 2021<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2021_1_0.png" /> 64.9 - 78.5<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2021_1_1.png" /> 78.5 - 84.4<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2021_1_2.png" /> 84.4 - 90<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2021_1_3.png" /> 90 - 93.4<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2021_1_4.png" /> 93.4 - 99.9<br />'
        });
var format_SUMBERAIRMINUMRUMAHTANGGA2022_2 = new ol.format.GeoJSON();
var features_SUMBERAIRMINUMRUMAHTANGGA2022_2 = format_SUMBERAIRMINUMRUMAHTANGGA2022_2.readFeatures(json_SUMBERAIRMINUMRUMAHTANGGA2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMBERAIRMINUMRUMAHTANGGA2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMBERAIRMINUMRUMAHTANGGA2022_2.addFeatures(features_SUMBERAIRMINUMRUMAHTANGGA2022_2);
var lyr_SUMBERAIRMINUMRUMAHTANGGA2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMBERAIRMINUMRUMAHTANGGA2022_2, 
                style: style_SUMBERAIRMINUMRUMAHTANGGA2022_2,
                popuplayertitle: "SUMBER AIR MINUM RUMAH TANGGA 2022",
                interactive: true,
    title: 'SUMBER AIR MINUM RUMAH TANGGA 2022<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2022_2_0.png" /> 65.4 - 80.6<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2022_2_1.png" /> 80.6 - 86.1<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2022_2_2.png" /> 86.1 - 90.4<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2022_2_3.png" /> 90.4 - 93.8<br />\
    <img src="styles/legend/SUMBERAIRMINUMRUMAHTANGGA2022_2_4.png" /> 93.8 - 98.4<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_SUMBERAIRMINUMRUMAHTANGGA2021_1.setVisible(true);lyr_SUMBERAIRMINUMRUMAHTANGGA2022_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SUMBERAIRMINUMRUMAHTANGGA2021_1,lyr_SUMBERAIRMINUMRUMAHTANGGA2022_2];
lyr_SUMBERAIRMINUMRUMAHTANGGA2021_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'Objectid': 'Objectid', });
lyr_SUMBERAIRMINUMRUMAHTANGGA2022_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'Objected': 'Objected', });
lyr_SUMBERAIRMINUMRUMAHTANGGA2021_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'Objectid': 'TextEdit', });
lyr_SUMBERAIRMINUMRUMAHTANGGA2022_2.set('fieldImages', {'PROVINSI': 'TextEdit', 'Objected': 'TextEdit', });
lyr_SUMBERAIRMINUMRUMAHTANGGA2021_1.set('fieldLabels', {'PROVINSI': 'no label', 'Objectid': 'no label', });
lyr_SUMBERAIRMINUMRUMAHTANGGA2022_2.set('fieldLabels', {'PROVINSI': 'no label', 'Objected': 'no label', });
lyr_SUMBERAIRMINUMRUMAHTANGGA2022_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});