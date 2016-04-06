

/**
* Created by Pydd on 05.04.2016.
*/

    var map;

    // method to initialize the map
    function initMap()
    {


        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.32, lng: 7.53},
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        zoom: 13,
        disableDefaultUI: true,
        rotateControl: true,
        minZoom: 12,
        maxZoom: 15

        });
    }

    // method to center the map on the network of Tseuzier
    function centerTseuzier(){

        map.setCenter({lat: 46.32, lng: 7.53}) ;
    }


