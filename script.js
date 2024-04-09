const apiKey="a888c23554c33501d937d917ba1d83f8"
const apiLink="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const inputCity=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherImg=document.querySelector(".mausam");

async function checkWeather(city){
   response = await fetch(apiLink + city + `&apikey=${apiKey}`);
   const value= await response.json()
   
   document.querySelector(".city").innerHTML=value.name;
   document.querySelector(".temp").innerHTML=Math.round(value.main.temp)+`°C`;
   document.querySelector(".humidity").innerHTML=value.main.humidity +`%`;
   document.querySelector(".wind").innerHTML=value.wind.speed +`km/hr`;

   if(value.weather[0].main=="Clouds"){
      weatherImg.src= "images/clouds.png"
   }
   else if(value.weather[0].main=="Clear"){
      weatherImg.src= "images/clear.png"
   }
   else if(value.weather[0].main=="Rain"){
      weatherImg.src= "images/rain.png"
   }
   else if(value.weather[0].main=="Snow"){
      weatherImg.src= "images/snow.png"
   }
   else if(value.weather[0].main=="Drizzle"){
      weatherImg.src= "images/drizzle.png"
   }
   else if(value.weather[0].main=="Mist"){
      weatherImg.src= "images/mist.png"
   }

document.querySelector('.weather').style.display="block";

}

searchBtn.addEventListener("click",()=>{
   checkWeather(inputCity.value)
})






