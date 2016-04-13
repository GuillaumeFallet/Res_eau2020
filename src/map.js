

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
        url: "images/tank_full.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40, 40)
    } ;
    img_lake_nearly_full = {
        url: "images/tank_nearly_full.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40, 40)
    } ;
    img_lake_half_full = {
        url: "images/tank_half_full.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40, 40)
    } ;
    img_lake_half_empty = {
        url: "images/tank_half_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40, 40)
    } ;
    img_lake_nearly_empty = {
        url: "images/tank_nearly_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40, 40)
    } ;
    img_lake_empty = {
        url: "images/tank_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40, 40)
    } ;

    marker_lake_tseuzier = new google.maps.Marker({
        position: coord_lac,
        map: map,
        icon: img_lake_empty,
        title: 'Niveau du lac de Tseuzier'
    });

    lake_tseuzier_level = "Niveau du lac de Tseuzier (PLACEHOLDER)" ;

    info_lake_tseuzier = new google.maps.InfoWindow({
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


    var main_alim_collect_pipes_coordinate = [

        {lat: 46.330970, lng: 7.535205},
        {lat: 46.331829, lng: 7.519117},
        {lat: 46.328599, lng: 7.516741},
        {lat: 46.328006, lng: 7.505073},
        {lat: 46.315185, lng: 7.481122},
        {lat: 46.315355, lng: 7.464685},
        {lat: 46.336700, lng: 7.467807},
        {lat: 46.337591, lng: 7.464953},
        {lat: 46.334147, lng: 7.459031},
        {lat: 46.335981, lng: 7.449675},
        {lat: 46.344306, lng: 7.448237},
        {lat: 46.346939, lng: 7.437154}
    ];

    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 4,
        strokeColor: '#22427C'
    };

    var main_collect_pipes = new google.maps.Polyline({
        path: main_alim_collect_pipes_coordinate,
        geodesic: true,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '100px'
        }],
        map: map,
        strokeColor: '#22427C',
        strokeOpacity: 1.0,
        strokeWeight: 5
    });

    animateCircle(main_collect_pipes);

    // function pour animer la flèche
    function animateCircle(line) {
        var count = 0;
        window.setInterval(function () {
            count = (count + 1) % 200;

            var icons = line.get('icons');
            icons[0].offset = (count / 2) + '%';
            line.set('icons', icons);
        }, 40);

    }



}

// method to center the map on the network of Tseuzier
function centerTseuzier(){

    map.setCenter({lat: 46.32, lng: 7.53}) ;
    map.setZoom(13) ;

}

function  readCSV() {

    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test($("#fileUpload").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var rows = e.target.result.split("\n");
                array_level_lake = rows[39].split(";") ;
                array_water_needs = rows[33].split(";") ;
                array_afflux_lake = rows[2].split(";") ;
                array_afflux_captages = rows[3].split(";") ;

                document.getElementById("divMois").style.display="inline" ;
                lakeLevelMaxMin() ;
                setMonth(5) ;
            }
            reader.readAsText($("#fileUpload")[0].files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
}


function lakeLevelMaxMin() {

    var min = array_level_lake[3]  ;
    var max = array_level_lake[3]  ;
    for (var j = 3 ; j < 15 ; j ++)
    {
        array_level_lake[j] = array_level_lake[j].replace(/,/g, '.')

        if(array_level_lake[j] < min)
        {
            min = array_level_lake[j] ;
        }
        else if (array_level_lake[j] > max)
        {
            max = array_level_lake[j] ;
        }
    }
    var diff = max - min ;
    var tier = diff / 6 ;

    array_tiers_level_lake = [6] ;

    array_tiers_level_lake[0] = eval(min)+eval(1*tier) ;
    array_tiers_level_lake[1] = eval(min)+eval(2*tier) ;
    array_tiers_level_lake[2] = eval(min)+eval(3*tier) ;
    array_tiers_level_lake[3] = eval(min)+eval(4*tier) ;
    array_tiers_level_lake[4] = eval(min)+eval(5*tier) ;
    array_tiers_level_lake[5] = eval(min)+eval(6*tier) ;

    alert(array_tiers_level_lake[0]) ;
    alert(array_tiers_level_lake[1]) ;
    alert(array_tiers_level_lake[2]) ;
    alert(array_tiers_level_lake[3]) ;
    alert(array_tiers_level_lake[4]) ;
    alert(array_tiers_level_lake[5]) ;

}


function changeLakeLevel(lvl) {

    switch (lvl) {
        case 0 :
            marker_lake_tseuzier.setIcon(img_lake_full);
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


function nextMonth() {

    setMonth(month + 1);
}
function previousMonth() {
    setMonth(month - 1);
}

function setMonth(num)
{
    month = num ;

    if (month==13)
        month = 1 ;

    if (month==0)
        month = 12 ;

    var content = "Niveau actuel du lac: "+array_level_lake[month+2]+" millions de mètres cubes d'eau" ;
    info_lake_tseuzier.setContent(content) ;

    var right_icon_water_lake ;

    if(array_level_lake[month+2]<=array_tiers_level_lake[0]) {
        marker_lake_tseuzier.setIcon(img_lake_empty) ;
    }
    else if(array_level_lake[month+2]<array_tiers_level_lake[1]) {
        marker_lake_tseuzier.setIcon(img_lake_nearly_empty) ;
    }
    else if(array_level_lake[month+2]<array_tiers_level_lake[2]) {
        marker_lake_tseuzier.setIcon(img_lake_half_empty) ;
    }
    else if(array_level_lake[month+2]<array_tiers_level_lake[3]) {
        marker_lake_tseuzier.setIcon(img_lake_half_full) ;
    }
    else if(array_level_lake[month+2]<array_tiers_level_lake[4]) {
        marker_lake_tseuzier.setIcon(img_lake_nearly_full) ;
    }
    else if(array_level_lake[month+2]<=array_tiers_level_lake[5]) {
        marker_lake_tseuzier.setIcon(img_lake_full) ;
    }

        for (var i = 1 ; i <= 12 ; i ++)
        {
            document.getElementById("month"+i).style.background='#637aad';
        }

    document.getElementById("month"+month).style.background='#000000';


}








