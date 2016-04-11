

/**
* Created by Pydd on 05.04.2016.
*/

    month = 0 ;


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
        coord_lac =  {lat: 46.350560, lng: 7.430909} ;
        img_lake_full = {
            url: "images/lake_full.png",
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(20,25),
            scaledSize: new google.maps.Size(40, 40)
        } ;
        img_lake_nearly_full = {
            url: "images/lake_nearlyfull.png",
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(20,25),
            scaledSize: new google.maps.Size(40, 40)
        } ;
        img_lake_nearly_empty = {
            url: "images/lake_nearlyempty.png",
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(20,25),
            scaledSize: new google.maps.Size(40, 40)
        } ;
        img_lake_empty = {
            url: "images/lake_empty.png",
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(20,25),
            scaledSize: new google.maps.Size(40, 40)
        } ;

            marker_lake_tseuzier = new google.maps.Marker({
            position: coord_lac,
            map: map,
            icon: img_lake_full,
            title: 'Niveau du lac de Tseuzier'
        });

        var lake_tseuzier_level = "Niveau du lac de Tseuzier (PLACEHOLDER)"
        var info_lake_tseuzier = new google.maps.InfoWindow({
            content: lake_tseuzier_level,
            size: new google.maps.Size(100,100)
        }) ;

        google.maps.event.addListener(marker_lake_tseuzier, 'click', function(){
            info_lake_tseuzier.open(map,marker_lake_tseuzier)
        }) ;


        coord_capt1 =  {lat: 46.346562, lng: 7.474394} ;
        coord_capt2 =  {lat: 46.342899, lng: 7.506874} ;
        coord_capt3 =  {lat: 46.355108, lng: 7.533259} ;

        img_captage = {
            url: "images/captage.png",
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(20,25),
            scaledSize: new google.maps.Size(40, 40)
        } ;


        marker_capt1_tseuzier = new google.maps.Marker({
            position: coord_capt1,
            map: map,
            icon: img_captage,
            title: 'Captage 1'
        });

        marker_capt2_tseuzier = new google.maps.Marker({
            position: coord_capt2,
            map: map,
            icon: img_captage,
            title: 'Captage 2'
        });

        marker_capt3_tseuzier = new google.maps.Marker({
            position: coord_capt3,
            map: map,
            icon: img_captage,
            title: 'Captage 3'
        });


    }

    // method to center the map on the network of Tseuzier
    function centerTseuzier(){

        map.setCenter({lat: 46.32, lng: 7.53}) ;
        map.setZoom(13) ;

    }

    function nextMonth()
    {
         month ++ ;
        if (month==4)
            month = 0 ;

        changeLakeLevel(month) ;
    }

    function changeLakeLevel(lvl)
        {

            switch (lvl) {
                case 0 :
                    marker_lake_tseuzier.setIcon(img_lake_full) ;
                    break;
                case 1 :
                    marker_lake_tseuzier.setIcon(img_lake_nearly_full);
                    break;
                case 2 :
                    marker_lake_tseuzier.setIcon(img_lake_nearly_empty);
                    break;
                case 3 :
                    marker_lake_tseuzier.setIcon(img_lake_empty);
                    break;
            }


        }






