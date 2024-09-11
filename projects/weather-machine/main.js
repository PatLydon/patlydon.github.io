const button = document.querySelector('.button');
let cityValue = document.querySelector('.input');
cityValue.setAttribute('value', 'London');
console.clear();


window.onload = () => {
button.click();
};


button.addEventListener('click', () => {

  const city = document.querySelector('.input').value;
  const APIKey = 'd0d5c3289b2e326708654115a40ea3d4';


if (city === ''){
  return
}


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
  
 
  .then(response => response.json())

  .then( data => {
    

    const cityName = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const descr = document.querySelector('.descr');
    const windSpeed = document.querySelector('.wind-speed');
    const wind = document.querySelector('.wind');
    const icon = document.querySelector('.icon');
    const pressure = document.querySelector('.pressure');





    cityName.textContent = data.name;
    temp.innerHTML =  `${Math.round(data.main.temp)} <span>°C</span>`;
    descr.textContent = data.weather[0].description;
    pressure.textContent = data.main.pressure;
    wind.innerHTML = `${data.wind.deg}<span>°</span>`;
    windSpeed.innerHTML = `${data.wind.speed} <span>m/s</span>`;
    icon.innerHTML = ` <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;



   

    console.log(data);
  })





});


// .then( function(data ){
//   console.log(data);
// })


// .then( function(response) {
//   return response.json()
// })