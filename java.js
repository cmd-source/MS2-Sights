$(document).ready(function(){
    $("p").css({
        textAlign: "center"
    }).hide()
    
    })
    $(".name a").css({
        textAlign: "center",
        color:"black"
    
});


//---------Maps---------//

var mymap = L.map('mapid').setView([53.1424, -7.6921], 7);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY21kLXFxcSIsImEiOiJja21kNjA3MDcwOWZuMnBwNTBweTF2aHlrIn0.aPVMHp5DWzQ4Ka9t-DOFZw'
    }).addTo(mymap);

    var marker5 = L.marker([53.7599, -9.6598]).addTo(mymap);
    marker5.bindPopup("<b>Croagh Patrick</b><br>Croagh Patrick, nicknamed the Reek, is a 764 m mountain and an important site of pilgrimage in Mayo.</br><img class='place' src='assets/img/croaghpatrick.jfif'>").openPopup();

    var marker2 = L.marker([52.9715, -9.4309]).addTo(mymap);
    marker2.bindPopup("<b>Cliffs of Moher</b><br>The Cliffs of Moher are sea cliffs located at the southwestern edge of the Burren region in County Clare.</br><img class='place' src='assets/img/cliffs.jfif'>").openPopup();

    var marker3 = L.marker([55.2408, -6.5116]).addTo(mymap);
    marker3.bindPopup("<b>Giant's Causeway</b><br>The Giant's Causeway is an area of about 40,000 interlocking basalt columns.</br><img class='place' src='assets/img/giants.jfif'>").openPopup();

    var marker4 = L.marker([51.8985, -8.4756]).addTo(mymap);
    marker4.bindPopup("<b>Cork</b><br>Cork is the second largest city in Ireland.</br><img class='place' src='assets/img/cork.jfif'>").openPopup();

    var marker5 = L.marker([53.7599, -9.6598]).addTo(mymap);
    marker5.bindPopup("<b>Croagh Patrick</b><br>Croagh Patrick, nicknamed the Reek, is a 764 m mountain and an important site of pilgrimage in Mayo.</br><img class='place' src='assets/img/croaghpatrick.jfif'>").openPopup();

    var marker = L.marker([53.3498, -6.2603]).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>Dublin is Ireland's Capital.</br><img class='place' src='assets/img/dublin.jpg'>").openPopup();
