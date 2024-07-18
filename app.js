function check() {
    let name = document.getElementById("name").value
    let degree = document.getElementById("degree")
    let city = document.getElementById("city")
    let wind = document.getElementById("wind")
    let humudity = document.getElementById("humudity")
    let presure=document.getElementById("presure")
    let sea=document.getElementById("sea")
    let temmin=document.getElementById("tempmin")
    let temmax=document.getElementById("tempmax")
    let apikey = '8b4c4fcf07039705dab12bf45d8ca938'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            city.innerHTML = data.name
            degree.innerHTML = Math.floor(data.main.feels_like - 273) + "°C"
            wind.innerHTML = data.wind.speed + "km/h"
            humudity.innerHTML = data.main.humidity+ "%"
            presure.innerHTML=data.main.pressure
            sea.innerHTML=data.main.sea_level
            temmin.innerHTML=Math.floor(data.main.temp_min-273)+ "°C"
            temmax.innerHTML=Math.floor(data.main.temp_max-273)+ "°C"






        });




}
