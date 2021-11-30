window.addEventListener('load', function() {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    let temperatureSpan = document.querySelector('.temperature span');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position=>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
             fetch(api)
               .then((response) => {
                 return response.json();
               })
               .then((data) => {
                 console.log(data);
                 const { temp, summary, icon } = data.main;
                 //set DOM elements from the API
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;sky
                    //set icon
                    setIcons(icon, document.querySelector('.icon'));

                    //change temperature to Celsius/Fahrenheit
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureDegree.textContent === temp) {
                            temperatureDegree.textContent = (temp - 273.15).toFixed(2) + '°C';
                        } else {
                            temperatureDegree.textContent = temp + '°F';
                        }
                    }
               });
        });

       
    } else {
        h1.textContent = "Geolocation is not supported by this browser.";
    }
   function setIcons(icon,iconID){
       const skycons = new Skycons({color: "white"});
       const currentIcon = icon.replace(/-/g, "_").toUpperCase();
       skycons.play();
       return skycons.set(iconID, Skycons[currentIcon]);
   }
});