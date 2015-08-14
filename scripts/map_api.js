var map;
var infowindow;

    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(displayPosition);
    } else {
	alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    };
  
  function displayPosition(pos) {
	var mylat = pos.coords.latitude;
	var mylong = pos.coords.longitude;
	var currPos = new google.maps.LatLng(mylat, mylong);
	var thediv = document.getElementById('locationInfo');
	thediv.innerHTML = '<p>Your latitide is: ' + mylat + '<br/> Your longitude is: ' + mylong + '</p>';
    
    map = new google.maps.Map(document.getElementById("map"),{
	zoom: 15,
	center: currPos,
	mapTypeId: google.maps.MapTypeId.ROADMAP
    }); 
    
    var marker = new google.maps.Marker({
	position: currPos, 
	map: map, 
	title:"You are here"
    });
    
    var request = {
	location:currPos,
	radius: 50000,
	types: ['bicycle_store']
    };
    
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.search(request, callback);

}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
	for (var i = 0; i < results.length; i++) {
	createMarker(results[i]); 
	}
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker= new google.maps.Marker({
	map: map,
	position: place.geometry.location
    });
    
    google.maps.event.addListener(marker, 'click', function() {
	infowindow.setContent(place.name);
	infowindow.open(map, this);
    });
}
      
function errorFunction(pos) {
        alert('Error displaying your position?');
}

google.maps.event.addDomListener(window, 'load', displayPosition);