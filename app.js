let weather = {
    "apiKey": "",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid="+this.apiKey
        ).then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const{name} = data;
        const{temp,humidity} = data.main;
        const{icon , description} = data.weather[0];
        const{speed} = data.wind;
        console.log(name,temp,humidity,icon,description,speed);

        document.querySelector(".city").textContent = "Weather in "+name;
        document.querySelector(".temp").textContent = temp + " °C";
        document.querySelector(".description").textContent = description;
        document.querySelector(".humidity").textContent ="Humidity: " +humidity + "%";
        document.querySelector(".wind").textContent ="Wind: " +speed + "km/h";
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+ icon +".png"
        document.body.style.backgroundImage = "url(https://source.unsplash.com/random/?"+ name +")";
    },

    search : function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-btn").addEventListener('click', function(){
        weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        weather.search();
    }
});