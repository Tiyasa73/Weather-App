const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
  const APIkey = '774d04becb3fe54932aea8f74b538d91';
  const city = document.querySelector('.search-box input').value;
  if (city == '')
     return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
    .then(response =>response.json())
    
    .then((json) => { 
      console.log(json);
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

     switch (json.weather[0].main) {
        case 'Clear':
          image.src='clear.png';
          break;
        case 'Rain':
          image.src = 'rain.png';
          break;
        case 'Snow':
          image.src = 'snow.png';
          break;
          case 'Clouds':
            image.src= 'cloud.png';
            break;
          case 'Mist':
            image.src = 'mist.png';
           break;
           case 'Haze':
            image.src='hezy.png';
            break;
            default:
              image.src = 'cloud.png';
        }
       // console.log(`Setting image source to: ${imagePath}`); // Debugging log
      // image.src = imagePath;

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>℃</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML =`${json.main.humidity}%`;
        wind.innerHTML = `${json.wind.speed} km/h`;
  
       weatherBox.style.display = 'block';
        weatherDetails.style.display = 'block';
      })
     .catch(err => console.error('Error fetching weather data:', err));
  });
 