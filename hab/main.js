let pathCoords = [];
let markers = [];
let path;


function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 42.200045, lng: -72.622800},
        zoom: 12
    });
    getPoints();
}

function addNewMarker(latitude, longitude, name){
    marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map,
        label: name,
    });
    markers.push(marker);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
    if(path) {
        path.setMap(map);
    }
  }

function getPoints(){
    var ref = firebase.database().ref("points").orderByChild('timestamp');

    ref.on("value", function(snapshot) {
        pathCoords = [];
        setMapOnAll(null);
        snapshot.forEach(function(data){
            point = data.val();
            console.log(point);
            pathCoords.push({lat: parseFloat(point.modem_lat), lng: parseFloat(point.modem_long)});
            addNewMarker(parseFloat(point.modem_lat), parseFloat(point.modem_long), point.timestamp.toString());
        });
        path = new google.maps.Polyline({
            path: pathCoords,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        })
    
        path.setMap(map);
    }, function (error) {
        console.log("Error: " + error.code);
    });
}

