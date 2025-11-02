//Function to get and display geolocation
function getGeolocation() {
    const x = document.getElementById("geolocation");
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                x.innerHTML = "<strong>Latitude</strong>: " + position.coords.latitude +
                             "<br><strong>Longitude</strong>: " + position.coords.longitude;
            },
            (error) => {
                x.innerHTML = "There are some errors that make it impossible to get the geolocation.";
            }
        );
    } else {
        x.innerHTML = "There are some errors that make it impossible to get the geolocation.";
    }
}
*/