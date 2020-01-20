import config from "./config";
import { elementExists } from "./helpers";

const showMap = zoomInt => {

    let iconMain = {
        url: 'images/ico_marker.svg',
        scaledSize: new google.maps.Size(50, 50)
    }

    const mapOptions = {
        center: config.mapPosition,
        zoom: zoomInt, //default 12
        icon: iconMain
    }
    const map = new google.maps.Map(document.getElementById("map-canvas-detail"), mapOptions);

    let marker = new google.maps.Marker({
        position: config.mapPosition,
        animation: google.maps.Animation.DROP,
        title: "Performio.cz, s.r.o.",
        clicked: true,
        icon: iconMain
    })

// To add the marker to the map, call setMap();
    marker.setMap(map);
}

export const initMap = (mapZoom, mapLang) => {
    let googleMaps = '#googleMaps'
    if (!elementExists(googleMaps)) {
        let script = document.createElement('script')
        let mapAttr = script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=' + config.googleMapsAPI + '&language=' + mapLang)
        let mapAsync = script.setAttribute('async', '')
        let mapDefer = script.setAttribute('defer', '')
        document.body.appendChild(script)
        script.onload = () => {
            showMap(mapZoom)
        }
    } else {
        showMap(mapZoom)
    }
}

// import $ from 'jquery'
// import { elementExists, elementIsScrolledTo } from './helpers'
// import config from './config'
//
// let map = {
//     map: null,
//     marker: null,
//     infowindow: null
// }
//
// const contentString =
//     '<h1>COOL CREDIT, s.r.o</h1>' +
//     '<span>Václavské náměstí 843/3</span>' +
//     '<span>110 00 Praha 1</span>' +
//     '<p>' +
//     '<a target="_blank" href="https://www.google.com/maps/dir//COOL+CREDIT,+s.r.o.,+V%C3%A1clavsk%C3%A9+n%C3%A1m.+841%2F3,+110+00+Nov%C3%A9+M%C4%9Bsto,+Czechia/@50.084036,14.4224933,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x470b94c7191d701f:0x25fe37255dfa62c2!2m2!1d14.424682!2d50.084036">Naplánovat trasu</a>' +
//     '</p>'
//
// const latLng = {
//     lat: 50.080228,
//     lng: 14.429987
// }
//
// const mapOptions = {
//     zoom: 15,
//     center: latLng
// }
//
// const iconMain = '../images/ico_marker.svg'
// const iconMainHover = '../images/ico_marker--hover.svg'
//
// //-- Inits
// const initMap = () => {
//
//     // Just in case
//     // let google = google ? google : {}
//
//     // Infowindow
//     map.infowindow = new google.maps.InfoWindow({
//         content: contentString
//     })
//
//     // eslint-disable-next-line no-undef
//     map.map = new google.maps.Map($('#map-canvas-detail')[0], mapOptions)
//
//     $(window).scroll(function () {
//         if (elementIsScrolledTo('#google-map') && map.marker === null) {
//             //Marker
//             map.marker = new google.maps.Marker({
//                 position: latLng,
//                 map: map.map,
//                 icon: iconMain,
//                 baseIcon: iconMain,
//                 animation: google.maps.Animation.DROP,
//                 clicked: true
//             })
//
//             //Add listeners if everything is loaded
//             addMapEventListeners()
//             addMarkerEventListeners()
//             addInfoWindowEventListeners()
//         }
//     })
// }
//
// //-- Listeners
// const addMapEventListeners = () => {
//     map.map.addListener('click', function () {
//         map.infowindow.close()
//         map.marker.clicked = false
//     })
// }
//
// const addMarkerEventListeners = () => {
//     map.marker.addListener('click', function () {
//         if (map.marker.clicked) {
//             map.infowindow.close()
//         } else {
//             map.infowindow.open(map.map, map.marker)
//         }
//         map.marker.clicked = !map.marker.clicked
//     })
//     map.marker.addListener('mouseover', function () {
//         map.marker.setIcon(map.marker.iconMainHover)
//     })
//     map.marker.addListener('mouseout', function () {
//         map.marker.setIcon(map.marker.iconMain)
//     })
// }
//
// const addInfoWindowEventListeners = () => {
//     map.infowindow.addListener('closeclick', function () {
//         map.marker.clicked = !map.marker.clicked
//     })
// }
//
// // Init
// export const loadGoogleMapsScript = () => {
//     let googleMaps = '#googleMaps'
//
//     if (!elementExists(googleMaps)) {
//         let script = document.createElement('script')
//         script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=' + config.googleMapsAPI)
//         document.body.appendChild(script)
//         script.onload = () => {
//             initMap()
//         }
//     }
// }
