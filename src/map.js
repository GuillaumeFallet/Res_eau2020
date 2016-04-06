

/**
* Created by Pydd on 05.04.2016.
*/

var map;
function initMap() {


    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.293, lng: 7.533},
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 14,
    disableDefaultUI: true,
    rotateControl: true

});
    

}


