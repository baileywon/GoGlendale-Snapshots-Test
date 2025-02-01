var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Positronlabelsonly_1 = new ol.layer.Tile({
            'title': 'Positron [labels only]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });
var format_ELine_2 = new ol.format.GeoJSON();
var features_ELine_2 = format_ELine_2.readFeatures(json_ELine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELine_2.addFeatures(features_ELine_2);
var lyr_ELine_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELine_2, 
                style: style_ELine_2,
                popuplayertitle: "E Line",
                interactive: false,
                title: '<img src="styles/legend/ELine_2.png" /> E Line'
            });
var format_Destinations_3 = new ol.format.GeoJSON();
var features_Destinations_3 = format_Destinations_3.readFeatures(json_Destinations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Destinations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Destinations_3.addFeatures(features_Destinations_3);
var lyr_Destinations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Destinations_3, 
                style: style_Destinations_3,
                popuplayertitle: "Destinations",
                interactive: true,
                title: '<img src="styles/legend/Destinations_3.png" /> Destinations'
            });
var format_Photos_4 = new ol.format.GeoJSON();
var features_Photos_4 = format_Photos_4.readFeatures(json_Photos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_4.addFeatures(features_Photos_4);
var lyr_Photos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Photos_4, 
                style: style_Photos_4,
                popuplayertitle: "Photos",
                interactive: true,
                title: '<img src="styles/legend/Photos_4.png" /> Photos'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Positronlabelsonly_1.setVisible(true);lyr_ELine_2.setVisible(true);lyr_Destinations_3.setVisible(true);lyr_Photos_4.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Positronlabelsonly_1,lyr_ELine_2,lyr_Destinations_3,lyr_Photos_4];
lyr_ELine_2.set('fieldAliases', {'Id': 'Id', 'shape_id': 'shape_id', 'route_id': 'route_id', 'agency_id': 'agency_id', 'rt_shrt_nm': 'rt_shrt_nm', 'rt_long_nm': 'rt_long_nm', 'route_desc': 'route_desc', 'route_type': 'route_type', 'rt_typ_txt': 'rt_typ_txt', 'route_url': 'route_url', 'rt_color': 'rt_color', 'rt_col_fmt': 'rt_col_fmt', 'rt_txt_col': 'rt_txt_col', 'rt_txt_fmt': 'rt_txt_fmt', });
lyr_Destinations_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', 'Location N': 'Location N', 'What trans': 'What trans', 'What is yo': 'What is yo', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude_2': 'altitude_2', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp_': 'timestamp_', });
lyr_Photos_4.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_ELine_2.set('fieldImages', {'Id': 'Range', 'shape_id': 'TextEdit', 'route_id': 'TextEdit', 'agency_id': 'TextEdit', 'rt_shrt_nm': 'TextEdit', 'rt_long_nm': 'TextEdit', 'route_desc': 'TextEdit', 'route_type': 'Range', 'rt_typ_txt': 'TextEdit', 'route_url': 'TextEdit', 'rt_color': 'TextEdit', 'rt_col_fmt': 'TextEdit', 'rt_txt_col': 'TextEdit', 'rt_txt_fmt': 'TextEdit', });
lyr_Destinations_3.set('fieldImages', {'fid': '', 'ID': '', 'Name': '', 'Date': '', 'Time': '', 'Lon': '', 'Lat': '', 'Altitude': '', 'North': '', 'Azimuth': '', 'Cam. Maker': '', 'Cam. Model': '', 'Title': '', 'Comment': '', 'Path': '', 'RelPath': '', 'Timestamp': '', 'Images': '', 'Location N': '', 'What trans': '', 'What is yo': '', 'photo': '', 'filename': '', 'directory': '', 'altitude_2': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp_': '', });
lyr_Photos_4.set('fieldImages', {'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_ELine_2.set('fieldLabels', {'Id': 'no label', 'shape_id': 'no label', 'route_id': 'no label', 'agency_id': 'no label', 'rt_shrt_nm': 'no label', 'rt_long_nm': 'no label', 'route_desc': 'no label', 'route_type': 'no label', 'rt_typ_txt': 'no label', 'route_url': 'no label', 'rt_color': 'no label', 'rt_col_fmt': 'no label', 'rt_txt_col': 'no label', 'rt_txt_fmt': 'no label', });
lyr_Destinations_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Name': 'hidden field', 'Date': 'hidden field', 'Time': 'hidden field', 'Lon': 'hidden field', 'Lat': 'hidden field', 'Altitude': 'hidden field', 'North': 'hidden field', 'Azimuth': 'hidden field', 'Cam. Maker': 'hidden field', 'Cam. Model': 'hidden field', 'Title': 'hidden field', 'Comment': 'hidden field', 'Path': 'hidden field', 'RelPath': 'hidden field', 'Timestamp': 'hidden field', 'Images': 'hidden field', 'Location N': 'no label', 'What trans': 'no label', 'What is yo': 'no label', 'photo': 'hidden field', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude_2': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp_': 'hidden field', });
lyr_Photos_4.set('fieldLabels', {'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', });
lyr_Photos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});