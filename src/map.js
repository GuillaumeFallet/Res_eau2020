

/**
* Created by Pydd on 05.04.2016.
*/
    var test = 4 ;
    var map;
    var month = 0 ;
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

        var kmzLayer  = new google.maps.KmlLayer({ url : 'tseuzier.kmz'});

        kmzLayer.setMap(map) ;

        test = 8 ;
        var coord_lac =  {lat: 46.350560, lng: 7.430909} ;
        img_lac = {
            url: "images/lake_full.png",
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(20,25),
            scaledSize: new google.maps.Size(40, 40)
        } ;


         marker_lake_tseuzier = new google.maps.Marker({
            position: coord_lac,
            map: map,
            icon: img_lac,
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
    }

    // method to center the map on the network of Tseuzier
    function centerTseuzier(){

        map.setCenter({lat: 46.32, lng: 7.53}) ;
        map.setZoom(13) ;

    }

    function nextMonth()
    {
        month ++ ;
        if (month==13)
            month = 1 ;

        switch (month)
        {
            case 1 :
                img_lac.url = "images/lake_empty.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 2 :
                img_lac.url = "images/lake_nearlyempty.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 3 :
                img_lac.url = "images/lake_nearlyfull.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 4 :
                img_lac.url = "images/lake_full.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 5 :
                img_lac.url = "images/lake_nearlyfull.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 6 :
                img_lac.url = "images/lake_nearlyempty.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 7 :
                img_lac.url = "images/lake_empty.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 8 :
                img_lac.url = "images/lake_nearlyempty.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 9 :
                img_lac.url = "images/lake_nearlyfull.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 10 :
                img_lac.url = "images/lake_full.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 11 :
                img_lac.url = "images/lake_nearlyfull.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
            case 12 :
                img_lac.url = "images/lake_nearlyempty.png" ;
                marker_lake_tseuzier.icon = img_lac ;
                break ;
        }



    }


