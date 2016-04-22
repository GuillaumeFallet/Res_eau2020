

/**
 * Created by Pydd on 05.04.2016.
 */

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
    coord_lac = {lat: 46.350560, lng: 7.430909};
    coord_glacier = {lat: 46.383099, lng:7.509273} ;
    coord_turbine = {lat:46.259256, lng: 7.444067} ;

    img_lake_full = {
        url: "images/tank_full.png",
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 25),
        scaledSize: new google.maps.Size(40, 40)
    };
    img_lake_nearly_full = {
        url: "images/tank_nearly_full.png",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    };
    img_lake_half_full = {
        url: "images/tank_half_full.png",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    };
    img_lake_half_empty = {
        url: "images/tank_half_empty.png",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    };
    img_lake_nearly_empty = {
        url: "images/tank_nearly_empty.png",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(20,25),
        scaledSize: new google.maps.Size(40,40)
    }; //
    img_lake_empty = {
        url: "images/tank_empty.png",
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
        anchor: new google.maps.Point(32,32),
        scaledSize: new google.maps.Size(60,60)
    };

    img_irrigation = {
        url: "images/",
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(32,32),
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
    info_lake_text = "Niveau du lac de Tseuzier (PLACEHOLDER)" ;
    info_lake_tseuzier = new google.maps.InfoWindow({
        content: info_lake_text,
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

    info_turbine_text = "Niveau du lac de Tseuzier (PLACEHOLDER)" ;
    info_turbine = new google.maps.InfoWindow({
        content: info_turbine_text,
        size: new google.maps.Size(100,100)
    }) ;

    google.maps.event.addListener(marker_turbine, 'click', function(){
        info_turbine.open(map,marker_turbine)
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

    var electricity_production_pipe_coordinate = [

        {lat: 46.345526, lng: 7.433533},
        {lat: 46.259256, lng: 7.444067}

    ];

    var main_irrigation_pipe_coordinate = [

        {lat: 46.346419, lng: 7.435284},
        {lat: 46.308953, lng: 7.455366},
        {lat: 46.319417, lng: 7.514439}

    ];

    var secondary_irrig_pipe1_coordinate = [

        {lat: 46.308953, lng: 7.455366},
        {lat: 46.302873, lng: 7.450955}

    ];

    var secondary_irrig_pipe2_coordinate = [

        {lat: 46.319417, lng: 7.514439},
        {lat: 46.315647, lng: 7.515431}

    ];


    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: '#318CE7'
    };

    var electricity_symbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: '#EFD807'
    };

    var irrigation_symbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: '#096A09'
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

    electricity_production_pipe = new google.maps.Polyline({
        path: electricity_production_pipe_coordinate,
        //geodesic: true,
        icons: [{
            icon: electricity_symbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor:  colors_array.needs_electricity_color,
        strokeOpacity: 1.0,
        strokeWeight: 10
    });

    secondary_irrig_pipe1 = new google.maps.Polyline({
        path: secondary_irrig_pipe1_coordinate,
        //geodesic: true,
        icons: [{
            icon: irrigation_symbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor:  colors_array.needs_irrigation_color,
        strokeOpacity: 1.0,
        strokeWeight: 6
    });

    secondary_irrig_pipe2 = new google.maps.Polyline({
        path: secondary_irrig_pipe2_coordinate,
        //geodesic: true,
        icons: [{
            icon: irrigation_symbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor:  colors_array.needs_irrigation_color,
        strokeOpacity: 1.0,
        strokeWeight: 6
    });

    irrig_pipe = new google.maps.Polyline({
        path: main_irrigation_pipe_coordinate,
        //geodesic: true,
        icons: [{
            icon: irrigation_symbol,
            offset: '100%',
            repeat: '20px'
        }],
        map: map,
        strokeColor:  colors_array.needs_irrigation_color,
        strokeOpacity: 1.0,
        strokeWeight: 10
    });
    
}
// method to center the map on the network of Tseuzier
function centerTseuzier()
{

    map.setCenter({lat: 46.32, lng: 7.53}) ;
    map.setZoom(13) ;

}
function  readCSV()
{
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
                        natural_arrival:null,natural_arrival_speed:null,
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

                calculateSpeeds("natural_arrival") ;
                calculateSpeeds("pipe_arrival") ;
                calculateSpeeds("needs_water") ;
                calculateSpeeds("needs_irrigation") ;
                calculateSpeeds("needs_electricity") ;

               


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

var main_pipe_interval ;
var elec_pipe_interval ;
var secondary_natural_pipe_interval ;
var captage_pipe_interval ;
var main_natural_pipe_interval ;
// var irrig_pipe_interval ;

function animatePipes(main_vit,capt_vit,elec_vit,irrig_vit,main_natural_vit,secondary_natural_vit)
{


    // control the speed of the main pipe
    var main_pipe_interval_count = 0;
    if(typeof main_pipe_interval !=='undefined')
        window.clearInterval(main_pipe_interval) ;
    main_pipe_interval =  window.setInterval(function () {
        main_pipe_interval_count = (main_pipe_interval_count + 1) % 200;
        var icons = main_collect_pipes.get('icons');
        icons[0].offset = (main_pipe_interval_count / 2) + '%';
        main_collect_pipes.set('icons', icons);
    }, main_vit);


    // control the speed of the captage pipes
    var capt_pipe_interval_count = 0;
    if(typeof captage_pipe_interval !=='undefined')
        window.clearInterval(captage_pipe_interval) ;
    captage_pipe_interval =  window.setInterval(function () {
        capt_pipe_interval_count = (capt_pipe_interval_count + 1) % 200;
        var icons = pipe_captage1_to_main_pipe.get('icons');
        icons[0].offset = (capt_pipe_interval_count / 2) + '%';
        pipe_captage1_to_main_pipe.set('icons', icons);
        pipe_captage2_to_main_pipe.set('icons', icons);
        pipe_captage3_to_main_pipe.set('icons', icons);
    }, capt_vit);

    // control the speed of the electricity pipe
    var elec_pipe_interval_count = 0 ;
    if(typeof elec_pipe_interval !=='undefined')
        window.clearInterval(elec_pipe_interval) ;
    elec_pipe_interval =  window.setInterval(function () {
        elec_pipe_interval_count = (elec_pipe_interval_count + 1) % 200;
        var icons = electricity_production_pipe.get('icons');
        icons[0].offset = (elec_pipe_interval_count / 2) + '%';
        electricity_production_pipe.set('icons', icons);
    }, elec_vit);

    // control the speed of the irrigation pipe
    /* var irrig_pipe_interval_count = 0 ;
     if(typeof irrig_pipe_interval !=='undefined')
     window.clearInterval(irrig_pipe_interval) ;
     irrig_pipe_interval =  window.setInterval(function () {
     irrig_pipe_interval_count = (irrig_pipe_interval_count + 1) % 200;
     var icons = irrig_pipe.get('icons');
     icons[0].offset = (irrig_pipe_interval_count / 2) + '%';
     irrig_pipe.set('icons', icons);
     }, irrig_vit); */

    // control the speed of the main natural arrival pipe
    var natural_pipe_interval_count = 0 ;
    if(typeof main_natural_pipe_interval !=='undefined')
        window.clearInterval(main_natural_pipe_interval) ;
    main_natural_pipe_interval =  window.setInterval(function () {
        natural_pipe_interval_count = (natural_pipe_interval_count + 1) % 200;
        var icons = main_natural_alimentation.get('icons');
        icons[0].offset = (natural_pipe_interval_count / 2) + '%';
        main_natural_alimentation.set('icons', icons);
    }, main_natural_vit);


    // control the speed of the secondary natural arrival pipe
    var secondary_natural_pipe_interval_count = 0 ;
    if(typeof secondary_natural_pipe_interval !=='undefined')
        window.clearInterval(secondary_natural_pipe_interval) ;
    secondary_natural_pipe_interval =  window.setInterval(function () {
        secondary_natural_pipe_interval_count = (secondary_natural_pipe_interval_count + 1) % 200;
        var icons = secondary_natural_alimentation_1.get('icons');
        icons[0].offset = (secondary_natural_pipe_interval_count / 2) + '%';
        secondary_natural_alimentation_1.set('icons', icons);
        secondary_natural_alimentation_2.set('icons', icons);
        secondary_natural_alimentation_3.set('icons', icons);
        secondary_natural_alimentation_4.set('icons', icons);
    },secondary_natural_vit);

}
function nextMonth()
{

    setMonth(month + 1);
}
function previousMonth()
{
    setMonth(month - 1);
}
function setMonth(num)
{
    var name = "needs_water" ;

    month = num ;

    if (month==13)
        month = 1 ;

    if (month==0)
        month = 12 ;

    var content = "Niveau actuel du lac: "+big_array[month].lake_level+" millions de mètres cubes d'eau" ;
    info_lake_tseuzier.setContent(content) ;
    marker_lake_tseuzier.setIcon(big_array[month].lake_level_img) ;

    content = "Besoin en eau pour la production électrique : "+big_array[month].needs_electricity+" millions de mètres cubes d'eau" ;
    info_turbine.setContent(content) ;
    animatePipes(
        big_array[month].pipe_arrival_speed,
        big_array[month].pipe_arrival_speed,
        big_array[month].needs_electricity_speed,
        big_array[month].needs_irrigation_speed,
        big_array[month].natural_arrival_speed,
        big_array[month].natural_arrival_speed
    ) ;

    for (var i = 1 ; i <= 12 ; i ++)
    {
        document.getElementById("month"+i).style.background='#637aad';
    }

    document.getElementById("month"+month).style.background='#000000';

//
}
function calculateSpeeds(field)
{

    var speed = field+"_speed" ;

    var min = big_array[1][field] ;
    var max = big_array[1][field] ;

    for (var j = 1 ; j <=12 ; j ++)
    {
        if(big_array[j][field] < min)
        {
            min = big_array[j][field]  ;
        }
        else if (big_array[j][field] > max)
        {
            max = big_array[j][field]  ;
        }
    }
    var diff = max - min ;
    var tier = diff / 6 ;

    var array_tiers = [6] ;
    array_tiers[0] = eval(min)+eval(1*tier) ;
    array_tiers[1] = eval(min)+eval(2*tier) ;
    array_tiers[2] = eval(min)+eval(3*tier) ;
    array_tiers[3] = eval(min)+eval(4*tier) ;
    array_tiers[4] = eval(min)+eval(5*tier) ;
    array_tiers[5] = eval(min)+eval(6*tier) ;


    for (var i = 1 ; i <= 12 ; i++) {
$
        if (big_array[i][field] == 0) {
            big_array[i][speed] = 500;
        }
        else if (big_array[i][field] <= array_tiers[0]) {
            big_array[i][speed] = 200;
        }
        else if (big_array[i][field] < array_tiers[1]) {
            big_array[i][speed] = 150;
        }
        else if (big_array[i][field] < array_tiers[2]) {
            big_array[i][speed] = 100;
        }
        else if (big_array[i][field] < array_tiers[3]) {
            big_array[i][speed] = 60;
        }
        else if (big_array[i][field] < array_tiers[4]) {
            big_array[i][speed] = 40;
        }
        else if (big_array[i][field] <= array_tiers[5]) {
            big_array[i][speed] = 20;
        }

    }
}







