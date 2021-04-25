//map for the places page was taken from https://leafletjs.com/

var mymap = L.map('mapid').setView([53.1424, -7.6921], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY21kLXFxcSIsImEiOiJja21kNjA3MDcwOWZuMnBwNTBweTF2aHlrIn0.aPVMHp5DWzQ4Ka9t-DOFZw'
}).addTo(mymap);

//sight markers around Ireland

var marker5 = L.marker([52.5201, -7.8905]).bindPopup("<a href='https://en.wikipedia.org/wiki/Rock_of_Cashel' target='_blank'><b>Rock of Cashel</b></a><br>The Rock of Cashel, also known as Cashel of the Kings and St. Patrick's Rock. Ireland's most visited heritage site, the Rock of Cashel stars in countless images of the Emerald Isle.</br><img class='place' src='assets/img/rockofcashel.jpg'>").openPopup();
var marker2 = L.marker([52.9715, -9.4309]).bindPopup("<a href='https://en.wikipedia.org/wiki/Cliffs_of_Moher' target='_blank'><b>Cliffs of Moher</b></a><br>The Cliffs of Moher are sea cliffs located at the southwestern edge of the Burren region in County Clare.</br><img class='place' src='assets/img/cliffs.jfif'>").openPopup();
var marker3 = L.marker([55.2408, -6.5116]).bindPopup("<a href='https://en.wikipedia.org/wiki/Giant%27s_Causeway' target='_blank'><b>Giant's Causeway</b></a><br>The Giant's Causeway is an area of about 40,000 interlocking basalt columns.</br><img class='place' src='assets/img/giants.jfif'>").openPopup();
var marker5 = L.marker([53.7599, -9.6598]).bindPopup("<a href='https://en.wikipedia.org/wiki/Croagh_Patrick' target='_blank'><b>Croagh Patrick</b></a><br>Croagh Patrick, nicknamed the Reek, is a 764 m mountain and an important site of pilgrimage in Mayo.</br><img class='place' src='assets/img/croaghpatrick.jfif'>").openPopup();
var marker6 = L.marker([53.0120, -6.3298]).bindPopup("<a href='https://en.wikipedia.org/wiki/Glendalough' target='_blank'><b>Glendalough</b></a><br>The Glendalough Valley is located in the Wicklow Mountains National Park and has many attractions.</br><img class='place' src='assets/img/glendalough2.jpg'>").openPopup();
var marker7 = L.marker([52.6505, -7.2493]).bindPopup("<a href='https://en.wikipedia.org/wiki/Kilkenny' target='_blank'><b>Kilkenny Castle</b></a><br>Killarney is a town on the shores of Lough Leane in southwest Ireland’s County Kerry. Across the bridge from the cathedral is Killarney National Park.</br><img class='place' src='assets/img/kilkennycastle.jpg'>").openPopup();
var marker8 = L.marker([52.0599, -9.5044]).bindPopup("<a href='https://en.wikipedia.org/wiki/Killarney' target='_blank'><b>Killarney</b></a><br>Kilkenny Castle is a castle in Kilkenny, Ireland built in 1195 to control a fording-point of the River Nore.</br><img class='place' src='assets/img/killarneynp.jfif'>").openPopup();
var marker9 = L.marker([52.3369, -6.4633]).bindPopup("<a href='https://en.wikipedia.org/wiki/Wexford' target='_blank'><b>Wexford</b></a><br>Wexford is a town in the southeast of Ireland. Wexford has a lot of countryside and beautiful beaches including the Curracloe where the film Saving Private Ryan was shot.</br><img class='place' src='assets/img/ballinesker.jpg'>").openPopup();

//city markers around Ireland

var myIcon2 = L.icon({
    iconUrl: 'assets/img/city.png',
    iconSize: [40,65],
    iconAnchor: [22, 74],
    popupAnchor: [-3, -60],
});


var city = L.marker([51.8985, -8.4756], {icon: myIcon2}).bindPopup("<a href='https://en.wikipedia.org/wiki/Cork_(city)' target='_blank'><b>Cork</b></a><br>Cork is the second largest city in Ireland.</br><img class='place' src='assets/img/cork.jfif'>").openPopup();
var city2 = L.marker([53.3498, -6.2603], {icon: myIcon2}).bindPopup("<a href='https://en.wikipedia.org/wiki/Dublin' target='_blank'><b>Dublin City</b></a> <br>Dublin is Ireland's Capital and is an attraction in of itself. It has one Europes biggest park nearby the Phoneix Park.</br><img class='place' src='assets/img/dublin.jpg'>").openPopup();
var city3 = L.marker([52.2593, -7.1101], {icon: myIcon2}).bindPopup ("<a href= 'https://en.wikipedia.org/wiki/Waterford' target='_blank'><b>Waterford City</b></a> <br> Waterford City is one of the country's oldest cities and is located in the southeast</br><img class='place' src='assets/img/waterfordcity.jfif'>").openPopup();
var city4 = L.marker([53.2707, -9.0568], {icon: myIcon2}).bindPopup ("<a href= 'https://en.wikipedia.org/wiki/Galway' target='_blank'><b>Galway City</b></a> <br> Galway city is one of Ireland's smaller cities located in the west of Ireland</br><img class='place' src='assets/img/galwaycity.jfif'>").openPopup();
var city5 = L.marker([52.6638, -8.6267], {icon: myIcon2}).bindPopup ("<a href= 'https://en.wikipedia.org/wiki/Limerick' target='_blank'><b>Limerick City</b></a><br>Ireland's 3rd largest city and is located along the River Shannon.</br><img class='place' src='assets/img/limerickcity.jpg'>").openPopup();


//hotels markers around Ireland

var myIcon = L.icon({
    iconUrl: 'assets/img/hotel.png',
    iconSize: [40,65],
    iconAnchor: [22, 74],
    popupAnchor: [-3, -60],
});

var hotel1 = L.marker([53.33120820616524, -6.248670668226215], {icon: myIcon}).bindPopup("<a href='https://www.claytonhotelburlingtonroad.com/' target='_blank'><h6>The Clayton Hotel.</h6></a><br/>Leeson Street Upper<br/>4 Star");
var hotel2 = L.marker([53.34949894347942, -6.241970478425741], {icon: myIcon}).bindPopup("<a href='https://www.thespencerhotel.com/' target='_blank'><h6>Spencer Hotel.</h6></a><br/>Excise Walk<br/> International Financial Services Centre<br/>4 Star");
var hotel3 = L.marker([53.342802315571134, -6.308201884169745], {icon: myIcon}).bindPopup("<a href='https://www.hilton.com/en/hotels/dubkmhi-hilton-dublin-kilmainham/' target='_blank'><h6>Hilton Dublin.</h6></a><br/>S Circular Rd<br/> Kilmainham<br/>4 Star");
var hotel4 = L.marker([53.28037996930549, -9.021767145996693], {icon: myIcon}).bindPopup("<a href='https://www.theconnacht.ie/?utm_source=google&utm_medium=organic&utm_campaign=Knowledge_Graph' target='_blank'><h6>The Connacht Hotel</h6></a><br/>Old Dublin Rd<br/>Galway<br/>4 Star");
var hotel5 = L.marker([52.3359857644437, -6.456867216112228], {icon: myIcon}).bindPopup("<a href='https://www.talbotwexford.ie/' target='_blank'><h6>The Talbot Hotel</h6></a><br/>The Quay<br/>Whitewell<br/>Wexford<br/>4 Star");
var hotel6 = L.marker([51.90883213252982, -8.467447211712898], {icon: myIcon}).bindPopup("<a href='https://www.jurysinns.com/brands/jurysinns' target='_blank'><h6>Jury's Innl</h6></a><br/>Anderson's Quay<br/>Centre<br/>Cork<br/>4 Star");

//layers added with the help of this video: https://www.youtube.com/watch?v=Nl7KxXHpl5o&t=124s 

var sights = L.layerGroup([marker2, marker3, marker5, marker6, marker7, marker8, marker9]);
var hotel = L.layerGroup([hotel1, hotel2, hotel3, hotel4, hotel5, hotel6]);
var cities = L.layerGroup ([city, city2, city3, city4, city5]);

var overlays = {
    "Sights" : sights,
    "Hotels" : hotel,
    "Cities" : cities,
};

// adding in the layer control

L.control.layers(null, overlays).addTo(mymap);


$(".htour .p").click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle('slow');
    });
