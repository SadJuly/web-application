var token = 'pk.eyJ1IjoiamFoYXRrbyIsImEiOiJjazRmbDFkNmcwbmZqM2tvN2hkczU1aTJ5In0.DYncZDPERKyLOAP7OgqHWg';

var mymap = L.map('leaflet-map-main', {
    zoomControl: false,
    //... other options
}).setView([-1.405, 20.09], 2);

let southWest = L.latLng(
    -84.26717240431665,
    -197.92968750000003
),
northEast = L.latLng(
    84.01602206865661,
    237.65625000000003
),
limitBounds = L.latLngBounds(southWest, northEast)

mymap.setMaxBounds(limitBounds);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + token, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 2,
    id: 'mapbox/dark-v10',
    accessToken: token
}).addTo(mymap);

//add zoom control with your options
L.control.zoom({
     position:'topright'
}).addTo(mymap);
let startDate = new Date("2016").toLocaleDateString().split(".").reverse().join("-")
let currentDate = new Date().toLocaleDateString().split(".").reverse().join("-")


let dataList = document.getElementById('country-list');

    var settings = {
        "url": `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${currentDate}&minmagnitude=5`,
        "method": "GET",
        "timeout": 0,
    };
    
    //new Date("2016").toLocaleDateString().replace(".", "-").

    let countries = []
    let infoContent = [
        `Updated from ${startDate} to ${currentDate}`,
        "",
        ""
    ]
$.ajax(settings).done(function (response) {

    infoContent[1] += response.metadata.count;
    // infoContent[2] 
    response.features.forEach(e => {
        // let getCountry;
        // let country;
        // if(e.properties.place.includes(',')){
        //     getCountry = e.properties.place.split(',')
        //     country = getCountry[getCountry.length -1];
        // } else {
        //     country = e.properties.place
        // }
        
        // countries.push(country)
        
        // infoContent[1]

        L.circle([e.geometry.coordinates[1], e.geometry.coordinates[0]], 
            {
                radius: 80000, 
                color: '#ff0000b5',
                stroke: false
            }
        ).addTo(mymap);

    });
    
    // countries = [...new Set(countries)]
    let iter = 0;
    document
    .getElementsByClassName("info-stats")[0]
    .firstElementChild
    .childNodes
    .forEach(node => {
        if(node.nodeType == Node.ELEMENT_NODE){
            node.textContent += infoContent[iter]
            iter++;
        }   
    })

        const loader = document.querySelector(".loader");
        loader.className += " animated fadeOut"
        setTimeout(() => {
            loader.style.display = "none"
        }, 1000)
        
});
