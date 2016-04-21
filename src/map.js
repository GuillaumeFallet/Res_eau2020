

/**
 * Created by Pydd on 05.04.2016.
 */

var month = 0 ;

// method to initialize the map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.32, lng: 7.53},
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        zoom: 13,
        disableDefaultUI: true,
        rotateControl: true,
        minZoom: 12,
        maxZoom: 15

    });
    coord_lac = {lat: 46.350560, lng: 7.430909};
    coord_glacier = {lat: 46.383099, lng:7.509273} ;
    coord_turbine = {lat:46.259256, lng: 7.444067} ;

    img_lake_full = {
        url: "images/tank_full.jpg",
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 25),
        scaledSize: new google.maps.Size(40, 40)
    };
    img_lake_nearly_full = {
        url: "images/tank_nearly_full.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    };
    img_lake_half_full = {
        url: "images/tank_half_full.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    };
    img_lake_half_empty = {
        url: "images/tank_half_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    };
    img_lake_nearly_empty = {
        url: "images/tank_nearly_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    }; //
    img_lake_empty = {
        url: "images/tank_empty.jpg",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    };
    img_glacier = {
        url: "images/glacier.png",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(160,80)
    };

    img_turbine = {
        url: "images/turbine.png",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(60,60)
    };


}

function initObjects()
{
    marker_lake_tseuzier = new google.maps.Marker({
        position: coord_lac,
        map: map,
        icon: img_lake_full,
        title: 'Niveau du lac de Tseuzier'
    });

    marker_glacier = new google.maps.Marker({
        position: coord_glacier,
        map: map,
        icon: img_glacier,
        title: 'Le glacier'
    });

//
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
        anchor: new google.maps.Point(20,50),
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

    marker_turbine = new google.maps.Marker({
        position: coord_turbine,
        map: map,
        icon: img_turbine,
        title: 'Centrale électrique'
    }) ;

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
        {lat: 46.337302, lng: 7.466399}

    ];

    var pipe_coordinate_captage2_to_main_pipe = [

        {lat: 46.342899, lng: 7.506874},
        {lat: 46.327983, lng: 7.505161}


    ];

    var pipe_coordinate_captage3_to_main_pipe = [

        {lat: 46.355108, lng: 7.533259},
        {lat: 46.330984, lng: 7.535206}


    ];

    //main natural lake alimentation

    var main_natural_alimentation_coordinate = [

        {lat: 46.373775, lng: 7.432827},
        {lat: 46.369748, lng: 7.426218},
        {lat: 46.361176, lng: 7.420494},
        {lat: 46.356689, lng: 7.421803},
        {lat: 46.356371, lng: 7.424378}


    ];

    var secondary_natural_alimentation_coordinate_1 = [

        {lat: 46.377403, lng: 7.431376},
        {lat: 46.373775, lng: 7.432827}

    ];

    var secondary_natural_alimentation_coordinate_2 = [

        {lat: 46.374901, lng: 7.437835},
        {lat: 46.373775, lng: 7.432827}

    ];

    var secondary_natural_alimentation_coordinate_3 = [

        {lat: 46.373509, lng: 7.419174},
        {lat: 46.369748, lng: 7.426218}

    ];

    var secondary_natural_alimentation_coordinate_4 = [

        {lat: 46.357647, lng: 7.410473},
        {lat: 46.356689, lng: 7.421803}

    ];


    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: '#318CE7'
    };


    pipe_captage1_to_main_pipe = new google.maps.Polyline({
        path: pipe_coordinate_captage1_to_main_pipe,
        geodesic: false,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor: colors_array.pipe_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    pipe_captage2_to_main_pipe = new google.maps.Polyline({
        path: pipe_coordinate_captage2_to_main_pipe,
        geodesic: false,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor: colors_array.pipe_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    pipe_captage3_to_main_pipe = new google.maps.Polyline({
        path: pipe_coordinate_captage3_to_main_pipe,
        geodesic: false,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor: colors_array.pipe_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    main_collect_pipes = new google.maps.Polyline({
        path: main_alim_collect_pipes_coordinate,
        //geodesic: true,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor: colors_array.pipe_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    secondary_natural_alimentation_1 = new google.maps.Polyline({
        path: secondary_natural_alimentation_coordinate_1,
        geodesic: true,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor: colors_array.natural_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 6
    });

    secondary_natural_alimentation_2 = new google.maps.Polyline({
        path: secondary_natural_alimentation_coordinate_2,
        geodesic: true,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor: colors_array.natural_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 6
    });

    secondary_natural_alimentation_3 = new google.maps.Polyline({
        path: secondary_natural_alimentation_coordinate_3,
        geodesic: true,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor:  colors_array.natural_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 6
    });

    secondary_natural_alimentation_4 = new google.maps.Polyline({
        path: secondary_natural_alimentation_coordinate_4,
        geodesic: true,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor:  colors_array.natural_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 6
    });

    main_natural_alimentation = new google.maps.Polyline({
        path: main_natural_alimentation_coordinate,
        //geodesic: true,
        icons: [{
            icon: lineSymbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor:  colors_array.natural_arrival_color,
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    animateCircle(main_collect_pipes,100);
    animateCircle(pipe_captage1_to_main_pipe,100);
    animateCircle(pipe_captage2_to_main_pipe,100);
    animateCircle(pipe_captage3_to_main_pipe,100);
    animateCircle(main_natural_alimentation,100);
    animateCircle(secondary_natural_alimentation_1,100);
    animateCircle(secondary_natural_alimentation_2,100);
    animateCircle(secondary_natural_alimentation_3,100);
    animateCircle(secondary_natural_alimentation_4,100);
}


// function pour animer la flèche
function animateCircle(line,vit) {
    var count = 0;
    window.setInterval(function () {
        count = (count + 1) % 200;

        var icons = line.get('icons');
        icons[0].offset = (count / 2) + '%';
        line.set('icons', icons);
    }, vit);

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
                var array_level_lake = rows[39].split(";") ; // 2
                var array_afflux_lake = rows[2].split(";") ; // 4
                var array_afflux_captages = rows[3].split(";") ; // 6
                var array_water_needs = rows[13].split(";") ; // 8
                var array_water_needs_irig = rows[23].split(";") ; // 10
                var array_water_needs_elec = rows[30].split(";") ; // 12



                big_array = new Array(13) ;

                colors_array = {natural_arrival_color:null, pipe_arrival_color:null,needs_water_color:null, needs_irrigation_color:null, needs_electricity_color:null} ;
                colors_array.natural_arrival_color = array_afflux_lake[17] ;
                colors_array.pipe_arrival_color = array_afflux_captages[17] ;
                colors_array.needs_water_color = array_water_needs[17] ;
                colors_array.needs_irrigation_color = array_water_needs_irig[17] ;
                colors_array.needs_electricity_color = array_water_needs_elec[17] ;

                for (var i = 1 ; i <= 12 ; i ++)
                {
                    big_array[i] =  {index:null,month_name:null,lake_level:null,lake_level_img:null,
                        natural_arrival:null,natural_arrival_speep:null,
                        pipe_arrival:null, pipe_arrival_speed:null,
                        needs_water:null,needs_water_speed:null,
                        needs_irrigation:null,needs_irrigation_speed:null,
                        needs_electricity:null,needs_electricity_speed:null} ;
                    big_array[i].index = i ;
                    big_array[i].lake_level = parseFloat(array_level_lake[i+2].replace(/,/g, '.')) ;
                }

                var min = big_array[1].lake_level ;
                var max = big_array[1].lake_level ;

                for (var j = 1 ; j <=12 ; j ++)
                {
                    if(big_array[j].lake_level < min)
                    {
                        min = big_array[j].lake_level  ;
                    }
                    else if (big_array[j].lake_level > max)
                    {
                        max = big_array[j].lake_level  ;
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

                    if(big_array[i].lake_level<=array_tiers_level_lake[0]) {
                        big_array[i].lake_level_img = img_lake_empty ;
                    }
                    else if(big_array[i].lake_level<array_tiers_level_lake[1]) {
                        big_array[i].lake_level_img = img_lake_nearly_empty ;
                    }
                    else if(big_array[i].lake_level<array_tiers_level_lake[2]) {
                        big_array[i].lake_level_img = img_lake_half_empty ;
                    }
                    else if(big_array[i].lake_level<array_tiers_level_lake[3]) {
                        big_array[i].lake_level_img = img_lake_half_full ;
                    }
                    else if(big_array[i].lake_level<array_tiers_level_lake[4]) {
                        big_array[i].lake_level_img = img_lake_nearly_full ;
                    }
                    else if(big_array[i].lake_level<=array_tiers_level_lake[5]) {
                        big_array[i].lake_level_img = img_lake_full ;
                    }

                    big_array[i].natural_arrival= parseFloat(array_afflux_lake[i+2].replace(/,/g, '.')) ;
                    big_array[i].pipe_arrival = parseFloat(array_afflux_captages[i+2].replace(/,/g, '.')) ;
                    big_array[i].needs_water = parseFloat(array_water_needs[i+2].replace(/,/g, '.')) ;
                    big_array[i].needs_irrigation= parseFloat(array_water_needs_irig[i+2].replace(/,/g, '.')) ;
                    big_array[i].needs_electricity = parseFloat(array_water_needs_elec[i+2].replace(/,/g, '.')) ;



                }

                min = big_array[1][6] ;
                max = big_array[1][6] ;

                for (var j = 1 ; j <=12 ; j ++)
                {
                    if(big_array[j][6] < min)
                    {
                        min = big_array[j][6]  ;
                    }
                    else if (big_array[j][6] > max)
                    {
                        max = big_array[j][6]  ;
                    }
                }
                var diff = max - min ;
                var tier = diff / 6 ;

                var array_tiers_speed_captage = [6] ;
                array_tiers_speed_captage[0] = eval(min)+eval(1*tier) ;
                array_tiers_speed_captage[1] = eval(min)+eval(2*tier) ;
                array_tiers_speed_captage[2] = eval(min)+eval(3*tier) ;
                array_tiers_speed_captage[3] = eval(min)+eval(4*tier) ;
                array_tiers_speed_captage[4] = eval(min)+eval(5*tier) ;
                array_tiers_speed_captage[5] = eval(min)+eval(6*tier) ;


                for (var i = 1 ; i <= 12 ; i++) {

                    if (big_array[i][6] <= array_tiers_speed_captage[0]) {
                        big_array[i][7] = 100;
                    }
                    else if (big_array[i][6] < array_tiers_speed_captage[1]) {
                        big_array[i][7] = 85;
                    }
                    else if (big_array[i][6] < array_tiers_speed_captage[2]) {
                        big_array[i][7] = 70;
                    }
                    else if (big_array[i][6] < array_tiers_speed_captage[3]) {
                        big_array[i][7] = 55;
                    }
                    else if (big_array[i][6] < array_tiers_speed_captage[4]) {
                        big_array[i][7] = 40;
                    }
                    else if (big_array[i][6] <= array_tiers_speed_captage[5]) {
                        big_array[i][7] = 25;
                    }

                }

                big_array[1].month_name = "Janvier" ;
                big_array[2].month_name = "Février" ;
                big_array[3].month_name = "Mars" ;
                big_array[4].month_name = "Avril" ;
                big_array[5].month_name = "Mai" ;
                big_array[6].month_name = "Juin" ;
                big_array[7].month_name = "Juillet" ;
                big_array[8].month_name = "Août" ;
                big_array[9].month_name = "Septembre" ;
                big_array[10].month_name = "Octobre" ;
                big_array[11].month_name = "Novembre" ;
                big_array[12].month_name = "Décembre" ;


                initObjects() ;
                document.getElementById("divMois").style.display="inline" ;

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

    var content = "Niveau actuel du lac: "+big_array[month].lake_level+" millions de mètres cubes d'eau" ;

    info_lake_tseuzier.setContent(content) ;

    marker_lake_tseuzier.setIcon(big_array[month].lake_level_img) ;


    for (var i = 1 ; i <= 12 ; i ++)
    {
        document.getElementById("month"+i).style.background='#637aad';
    }

    document.getElementById("month"+month).style.background='#000000';


}








