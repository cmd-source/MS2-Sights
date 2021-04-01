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





var polygon = L.polygon([
    [53.370917, -6.336743],
    [53.35790424997997, -6.30442583157829],
    [53.34905278771516, -6.296963973322202],
    [53.34685500816252, -6.3271152497603635],
    [53.34969571938634, -6.34374921558311],
    [53.36119600570977, -6.3599346175263705],
    [53.36699064442164, -6.35361865626442],
]).addTo(mymap);

polygon.bindPopup("The Phoenix Park is one of the biggest city parks in Europe. It is home to open ghrassland, wild dear and the Dublin ZOO");

var polygon2 = L.polygon([
    [53.35884167655432, -6.176283627806286],
    [53.376779474557715, -6.14186379900399],
    [53.383406749458956, -6.114850768804721],
    [53.352990761504685, -6.166044817972692]
]).addTo(mymap);

polygon2.bindPopup("Dollymount Strand is a beach that is connected by a wooden bridge to Clontarf. It is an area that covers about 5km of sand and dunes on the island's eastern shore");

var circle = L.circle([53.34530437971692, -6.2671261755655046], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: '0.4',
    radius: 750,
}).addTo(mymap);

circle.bindPopup("Dublin city has many attractions and sights to see. Please see our booking tours below for the full guide to Dublin City.")



var myIcon = L.icon({
    iconUrl: 'assets/img/hotel.png',
    iconSize: [40,65],
    iconAnchor: [22, 74],
    popupAnchor: [-3, -60],
});

var myIcon2 = L.icon({
    iconUrl: 'assets/img/hotel.png',
    iconSize: [40,65],
    iconAnchor: [22, 74],
    popupAnchor: [-3, -60],
});

var myIcon3 = L.icon({
    iconUrl: 'assets/img/hotel.png',
    iconSize: [40,65],
    iconAnchor: [22, 74],
    popupAnchor: [-3, -60],
});

L.marker([53.33120820616524, -6.248670668226215], {icon: myIcon}).bindPopup("<a href='https://www.claytonhotelburlingtonroad.com/' target='_blank'><h6>The Clayton Hotel.</h6></a><br/>Leeson Street Upper<br/>4 Star").addTo(mymap);

L.marker([53.34949894347942, -6.241970478425741], {icon: myIcon2}).bindPopup("<a href='https://www.thespencerhotel.com/'><h6>Spencer Hotel.</h6></a><br/>Excise Walk<br/> International Financial Services Centre<br/>4 Star").addTo(mymap);

L.marker([53.342802315571134, -6.308201884169745], {icon: myIcon3}).bindPopup("<a href='https://www.hilton.com/en/hotels/dubkmhi-hilton-dublin-kilmainham/' target='_blank'><h6>Hilton Dublin.</h6></a><br/>S Circular Rd<br/> Kilmainham<br/>4 Star").addTo(mymap);
