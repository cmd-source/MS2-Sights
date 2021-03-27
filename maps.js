var mymap = L.map('mapid').setView([53.1424, -7.6921], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY21kLXFxcSIsImEiOiJja21kNjA3MDcwOWZuMnBwNTBweTF2aHlrIn0.aPVMHp5DWzQ4Ka9t-DOFZw'
}).addTo(mymap);

var marker5 = L.marker([52.5201, -7.8905]).addTo(mymap); 
marker5.bindPopup("<a href='https://en.wikipedia.org/wiki/Rock_of_Cashel' target='_blank'><b>Rock of Cashel</b></a><br>The Rock of Cashel, also known as Cashel of the Kings and St. Patrick's Rock. Ireland's most visited heritage site, the Rock of Cashel stars in countless images of the Emerald Isle.</br><img class='place' src='assets/img/rockofcashel.jpg'>").openPopup();

var marker2 = L.marker([52.9715, -9.4309]).addTo(mymap);
marker2.bindPopup("<a href='https://en.wikipedia.org/wiki/Cliffs_of_Moher' target='_blank'><b>Cliffs of Moher</b></a><br>The Cliffs of Moher are sea cliffs located at the southwestern edge of the Burren region in County Clare.</br><img class='place' src='assets/img/cliffs.jfif'>").openPopup();

var marker3 = L.marker([55.2408, -6.5116]).addTo(mymap);
marker3.bindPopup("<a href='https://en.wikipedia.org/wiki/Giant%27s_Causeway' target='_blank'><b>Giant's Causeway</b></a><br>The Giant's Causeway is an area of about 40,000 interlocking basalt columns.</br><img class='place' src='assets/img/giants.jfif'>").openPopup();

var marker4 = L.marker([51.8985, -8.4756]).addTo(mymap);
marker4.bindPopup("<a href='https://en.wikipedia.org/wiki/Cork_(city)' target='_blank'><b>Cork</b></a><br>Cork is the second largest city in Ireland.</br><img class='place' src='assets/img/cork.jfif'>").openPopup();

var marker5 = L.marker([53.7599, -9.6598]).addTo(mymap);
marker5.bindPopup("<a href='https://en.wikipedia.org/wiki/Croagh_Patrick' target='_blank'><b>Croagh Patrick</b></a><br>Croagh Patrick, nicknamed the Reek, is a 764 m mountain and an important site of pilgrimage in Mayo.</br><img class='place' src='assets/img/croaghpatrick.jfif'>").openPopup();

var marker6 = L.marker([53.0120, -6.3298]).addTo(mymap);
marker6.bindPopup("<a href='https://en.wikipedia.org/wiki/Glendalough' target='_blank'><b>Glendalough</b></a><br>The Glendalough Valley is located in the Wicklow Mountains National Park and has many attractions.</br><img class='place' src='assets/img/glendalough2.jpg'>").openPopup();

var marker7 = L.marker([52.6505, -7.2493]).addTo(mymap);
marker7.bindPopup("<a href='https://en.wikipedia.org/wiki/Kilkenny' target='_blank'><b>Kilkenny Castle</b></a><br>Killarney is a town on the shores of Lough Leane in southwest Ireland’s County Kerry. Across the bridge from the cathedral is Killarney National Park.</br><img class='place' src='assets/img/kilkennycastle.jpg'>").openPopup();

var marker8 = L.marker([52.0599, -9.5044]).addTo(mymap);
marker8.bindPopup("<a href='https://en.wikipedia.org/wiki/Killarney' target='_blank'><b>Killarney</b></a><br>Kilkenny Castle is a castle in Kilkenny, Ireland built in 1195 to control a fording-point of the River Nore.</br><img class='place' src='assets/img/killarneynp.jfif'>").openPopup();

var marker9 = L.marker([52.3369, -6.4633]).addTo(mymap);
marker9.bindPopup("<a href='https://en.wikipedia.org/wiki/Wexford' target='_blank'><b>Wexford</b></a><br>Wexford is a town in the southeast of Ireland. Wexford has a lot of countryside and beautiful beaches including the Curracloe where the film Saving Private Ryan was shot.</br><img class='place' src='assets/img/ballinesker.jpg'>").openPopup();
 
var marker = L.marker([53.3498, -6.2603]).addTo(mymap);
marker.bindPopup("<a href='https://en.wikipedia.org/wiki/Dublin' target='_blank'><b>Dublin City</b></a> <br>Dublin is Ireland's Capital and is an attracting in of itself with Europes biggest park nearby the Phoneix Park.</br><img class='place' src='assets/img/dublin.jpg'>").openPopup();
