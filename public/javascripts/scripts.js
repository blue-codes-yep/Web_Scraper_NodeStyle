// function getGeoLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(onSuccess)
//     }
// };

// function onSuccess(position) {
//     const { latitude, longitude } = position.coords;

//     console.log(latitude);
//     console.log(longitude);

// };

// function onError(error) {
//     console.log(error);
// }

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const {latitude, longitude} = position.coords;
        let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const currentLocation = `https://geocode.xyz/${latitude},${longitude}?json=1`
      console.log(currentLocation)
    })};

//  function userCity(lat, long){
//         const currentLocation = `https://geocode.xyz/${lat},${long}?json=1`
//         get(currentLocation).then(response => {
//             console.log(response['city'], response['stanename']);
//         })
//     }


    // Mapbox API key
    // pk.eyJ1IjoibGluemJsdWUiLCJhIjoiY2s3cDRqb3poMDJydTNldGYyNmtrbmRobCJ9.tukhzd_R7NUr1mLhCE7fQA
