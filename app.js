/*L.mapquest.key = 'gcYR56abOKCy9eAhIvIAGMJROzjEESIA';

L.mapquest.map('map', {
    center: [34.872305, -111.761206],
    layers: L.mapquest.tileLayer('map'),
    zoom: 9,
    scrollWheelZoom: false,
    layers: L.mapquest.tileLayer('map')
});


L.marker([34.872305, -111.761206], {
    icon: L.mapquest.icons.marker({
        primaryColor: '#22407F',
        secondaryColor: '#3B5998',
        shadow: true,
        size: 'md',
        symbol: 'A'
    })
});*/

let mymap = L.map('map').setView([34.872305, -111.761206], 9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 9,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2VyZ2V5eXVkaW4iLCJhIjoiY2p5d3RnNWsyMGF1azNubzFuYm1pOTJhayJ9.i8vbKaSy_EY6kEPxU_A3dg'
}).addTo(mymap);

let myIcon = L.icon({
    iconUrl: 'img/map_icon.png',
    iconSize: [40,40],
});

L.marker([34.872305, -111.761206], {icon: myIcon}).addTo(mymap);

let searchHotelButton = document.querySelector('.search_hotel_button');
let searchHotelForm = document.querySelector('.search_hotel_form');

let link = document.querySelectorAll("a");

for(let i =0; i<link.length;i++){
    link[i].addEventListener("click", (event)=>{
        event.preventDefault();
    })
}

searchHotelButton.addEventListener("click", ()=>{
   if(getComputedStyle(searchHotelForm).display=="none"){
       searchHotelForm.style.display="block";
   }else if(getComputedStyle(searchHotelForm).display=="block"){
       searchHotelForm.style.display="none";
   }
});