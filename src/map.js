

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
        scaledSize: new google.maps.Size(60, 60)
    } ;
    img_lake_nearly_full = {
        url: "images/tank_nearly_full.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(60, 60)
    } ;
    img_lake_half_full = {
        url: "images/tank_half_full.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(60, 60)
    } ;
    img_lake_half_empty = {
        url: "images/tank_half_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(60, 60)
    } ;
    img_lake_nearly_empty = {
        url: "images/tank_nearly_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(60, 60)
    } ;
    img_lake_empty = {
        url: "images/tank_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(60, 60)
    } ;

    marker_lake_tseuzier = new google.maps.Marker({
        position: coord_lac,
        map: map,
        icon: img_lake_full,
        title: 'Niveau du lac de Tseuzier'
    });

    lake_tseuzier_level = "Niveau du lac de Tseuzier (PLACEHOLDER)"
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

    // coordinate of the main pipes
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

    // coordinate of the pipe from the first captage to the main pipe

    var pipe_coordinate_captage1_to_main_pipe = [

        {lat: 46.346562, lng: 7.474394},
        {lat: 46.337302, lng: 7.466399},

    ];


    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: '#318CE7'
    };

    var main_collect_pipes = new google.maps.Polyline({
        path: main_alim_collect_pipes_coordinate,
        //geodesic: true,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '3%'
        }],
        map: map,
        strokeColor: '#22427C',
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    var pipe_captage1_to_main_pipe = new google.maps.Polyline({
        path: pipe_coordinate_captage1_to_main_pipe,
        geodesic: false,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20%'
        }],
        map: map,
        strokeColor: '#22427C',
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    animateCircle(main_collect_pipes);
    animateCircle(pipe_captage1_to_main_pipe);

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
                var array_level_lake = rows[39].split(";") ;
                var array_water_needs = rows[33].split(";") ;
                var array_afflux_lake = rows[2].split(";") ;
                var array_afflux_captages = rows[3].split(";") ;


                big_array = new Array(13) ;

                for (var i = 1 ; i <= 12 ; i ++)
                {
                    big_array[i] =  new Array(10) ;
                    big_array[i][0] = i ;
                    big_array[i][2] = parseFloat(array_level_lake[i+2].replace(/,/g, '.')) ;
                }

                var min = big_array[1][2] ;
                var max = big_array[1][2] ;

                for (var j = 1 ; j <=12 ; j ++)
                {
                    if(big_array[j][2] < min)
                    {
                        min = big_array[j][2]  ;
                    }
                    else if (big_array[j][2] > max)
                    {
                        max = big_array[j][2]  ;
                    }
                }
                var diff = max - min ;
                var tier = diff / 6 ;

                var array_tiers_level_lake = [6] ;
                array_tiers_level_lake[0] = eval(min)+eval(1*tier) ;
                array_tiers_level_lake[1] = eval(min)+eval(2*tier) ;
                array_tiers_level_lake[2] = eval(min)+eval(3*tier) ;
                array_tiers_level_lake[3] = eval(min)+eval(4*tier) ;
                array_tiers_level_lake[4] = eval(min)+eval(5*tier) ;
                array_tiers_level_lake[5] = eval(min)+eval(6*tier) ;


                for (var i = 1 ; i <= 12 ; i++){

                    if(big_array[i][2]<=array_tiers_level_lake[0]) {
                        big_array[i][3] = img_lake_empty ;
                    }
                    else if(big_array[i][2]<array_tiers_level_lake[1]) {
                        big_array[i][3] = img_lake_nearly_empty ;
                    }
                    else if(big_array[i][2]<array_tiers_level_lake[2]) {
                        big_array[i][3] = img_lake_half_empty ;
                    }
                    else if(big_array[i][2]<array_tiers_level_lake[3]) {
                        big_array[i][3] = img_lake_half_full ;
                    }
                    else if(big_array[i][2]<array_tiers_level_lake[4]) {
                        big_array[i][3] = img_lake_nearly_full ;
                    }
                    else if(big_array[i][2]<=array_tiers_level_lake[5]) {
                        big_array[i][3] = img_lake_full ;
                    }

                    big_array[i][4] = parseFloat(array_afflux_lake[i+2].replace(/,/g, '.')) ;
                    big_array[i][6] = parseFloat(array_afflux_captages[i+2].replace(/,/g, '.')) ;
                    big_array[i][7] = parseFloat(array_water_needs[i+2].replace(/,/g, '.')) ;

                }

                big_array[1][1] = "Janvier" ;
                big_array[2][1] = "Février" ;
                big_array[3][1] = "Mars" ;
                big_array[4][1] = "Avril" ;
                big_array[5][1] = "Mai" ;
                big_array[6][1] = "Juin" ;
                big_array[7][1] = "Juillet" ;
                big_array[8][1] = "Août" ;
                big_array[9][1] = "Septembre" ;
                big_array[10][1] = "Octobre" ;
                big_array[11][1] = "Novembre" ;
                big_array[12][1] = "Décembre" ;


                document.getElementById("divMois").style.display="inline" ;



            }
            reader.readAsText($("#fileUpload")[0].files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }


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

    var content = "Niveau actuel du lac: "+big_array[month][2]+" millions de mètres cubes d'eau" ;

    info_lake_tseuzier.setContent(content) ;

    marker_lake_tseuzier.setIcon(big_array[month][3]) ;

    for (var i = 1 ; i <= 12 ; i ++)
    {
        document.getElementById("month"+i).style.background='#637aad';
    }

    document.getElementById("month"+month).style.background='#000000';


}








