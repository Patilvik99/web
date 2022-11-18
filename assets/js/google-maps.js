function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 19.19361857814764, lng: 72.99642801772535};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 16,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}
