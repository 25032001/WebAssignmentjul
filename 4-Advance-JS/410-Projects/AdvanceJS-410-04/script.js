const form =document.querySelector('form');
const search =document.getElementById("search");
const API_KEY="3265874a2c77ae4a04bb96236a642d2f"
const result=document.getElementById("result");

const getWeather= async (city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    showWeather(data);
    }

    var showWeather=(data)=>{
        if(data.cod=="404"){
                result.innerHTML=`<h2>Oops! Data not find</h2>`
                return;
        }
      result.innerHTML= `<div id="result">
                    <div class="result-nav">
                      <h3>Weather of  ${search.value}</h3>
                     </div>
                     <div>
                    <h2>Sky Condition: <span style="color: red;">${data.weather[0].description }</span></h2>
                   <h2>Temperature: <span style="color: red;">${data.main.temp}</span></h2>
                   <h2>Wind Speed: <span style="color: red;">${data.wind.speed}</span></h2>
                   </div>
    </div>`
    search.value=""
       }

form.addEventListener("submit",function(event){
    console.log(search.value);
    event.preventDefault();
    getWeather(search.value);
    // search.value=""
})