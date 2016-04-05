/**
 * Created by Pydd on 05.04.2016.
 */

var map;
function initMap() {


    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.293, lng: 7.533},
        zoom: 14
    });


    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

    var triangleCoords = [
        {lat: 46.297193, lng: 7.537017},
        {lat: 43.705484, lng: 7.267867},
        {lat: 46.539543, lng: 6.778652}
    ];

    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: '#28b662',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#28b662',
        fillOpacity: 0.0
    });
    bermudaTriangle.setMap(map);

}