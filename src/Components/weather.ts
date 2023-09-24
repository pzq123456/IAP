// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck
export class Weather extends HTMLElement{
    constructor(){
        super();

        const APIKey = '03d5359e3c530db19d7e014c23e0dd38';
        const city = "QINGDAO";

        this.innerHTML = `
        <div class="container">

            <div class="not-found">
                <img src="images/404.png">
                <p>Oops! Invalid location :/</p>
            </div>

            <div class="weather-box">
                <img src="">
                <p class="temperature"></p>
                <p class="description"></p>
            </div>

            <div class="weather-details">
                <div class="humidity">
                    <i class="fa-solid fa-water"></i>
                    <div class="text">
                        <span></span>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="wind">
                    <i class="fa-solid fa-wind"></i>
                    <div class="text">
                        <span></span>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>

        </div>
        `
        //样式
        this.innerHTML+=`
        <style>
        .container{
            position: relative;
            width: 400px;
            height: 105px;
            background: #fff;
            padding: 28px 32px;
            overflow: hidden;
            border-radius: 18px;
            font-family: 'Roboto', sans-serif;
            transition: 0.6s ease-out;
        }

        .search-box{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .search-box input{
            color: #06283D;
            width: 80%;
            font-size: 24px;
            font-weight: 500;
            text-transform: uppercase;
            padding-left: 32px;
        }

        .search-box input::placeholder{
            font-size: 20px;
            font-weight: 500;
            color: #06283D;
            text-transform: capitalize;
        }

        .search-box button{
            cursor: pointer;
            width: 50px;
            height: 50px;
            color: #06283D;
            background: #dff6ff;
            border-radius: 50%;
            font-size: 22px;
            transition: 0.4s ease;
        }

        .search-box button:hover{
            color: #fff;
            background: #06283D;
        }

        .search-box i{
            position: absolute;
            color: #06283D;
            font-size: 28px;
        }

        .weather-box{
            text-align: center;
        }

        .weather-box img{
            width: 60%;
            margin-top: 30px;
        }

        .weather-box .temperature{
            position: relative;
            color: #06283D;
            font-size: 4rem;
            font-weight: 800;
            margin-top: 30px;
            margin-left: -16px;
        }

        .weather-box .temperature span{
            position: absolute;
            margin-left: 4px;
            font-size: 1.5rem;
        }

        .weather-box .description{
            color: #06283D;
            font-size: 22px;
            font-weight: 500;
            text-transform: capitalize;
        }

        .weather-details{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }

        .weather-details .humidity, .weather-details .wind{
            display: flex;
            align-items: center;
            width: 50%;
            height: 100px;
        }

        .weather-details .humidity{
            padding-left: 20px;
            justify-content: flex-start;
        }

        .weather-details .wind{
            padding-right: 20px;
            justify-content: flex-end;
        }

        .weather-details i{
            color: #06283D;
            font-size: 26px;
            margin-right: 10px;
            margin-top: 6px;
        }

        .weather-details span{
            color: #06283D;
            font-size: 22px;
            font-weight: 500;
        }

        .weather-details p{
            color: #06283D;
            font-size: 14px;
            font-weight: 500;
        }

        .not-found{
            width: 100%;
            text-align: center;
            margin-top: 50px;
            scale: 0;
            opacity: 0;
            display: none;
        }

        .not-found img{
            width: 70%;
        }

        .not-found p{
            color: #06283D;
            font-size: 22px;
            font-weight: 500;
            margin-top: 12px;
        }

        .weather-box, .weather-details{
            scale: 0;
            opacity: 0;
        }

        .fadeIn{
            animation: 0.5s fadeIn forwards;
            animation-delay: 0.5s;
        }

        @keyframes fadeIn{
            to {
                scale: 1;
                opacity: 1;
            }
        }
        </style>`

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {

                if (json.cod === '404') {
                    document.querySelector('.container')!.style.height = '400px';
                    document.querySelector('.weather-box')!.style.display = 'none';
                    document.querySelector('.weather-details')!.style.display = 'none';
                    document.querySelector('.not-found')!.style.display = 'block';
                    document.querySelector('.not-found')!.classList.add('fadeIn');
                    return;
                }
                document.querySelector('.not-found')!.style.display = 'none';
                document.querySelector('.not-found')!.classList.remove('fadeIn');

                switch (json.weather[0].main) {
                    case 'Clear':
                        document.querySelector('.weather-box img')!.src = 'clear.png';
                        break;

                    case 'Rain':
                        document.querySelector('.weather-box img')!.src = 'rain.png';
                        break;

                    case 'Snow':
                        document.querySelector('.weather-box img')!.src = 'snow.png';
                        break;

                    case 'Clouds':
                        document.querySelector('.weather-box img')!.src = 'cloud.png';
                        break;

                    case 'Haze':
                        document.querySelector('.weather-box img')!.src = 'mist.png';
                        break;

                    default:
                        document.querySelector('.weather-box img')!.src = '';
                }

                document.querySelector('.weather-box .temperature')!.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                document.querySelector('.weather-box .description')!.innerHTML = `${json.weather[0].description}`;
                document.querySelector('.weather-details .humidity span')!.innerHTML = `${json.main.humidity}%`;
                document.querySelector('.weather-details .wind span')!.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

                document.querySelector('.weather-box')!.style.display = '';
                document.querySelector('.weather-details')!.style.display = '';
                document.querySelector('.weather-box')!.classList.add('fadeIn');
                document.querySelector('.weather-details')!.classList.add('fadeIn');
                document.querySelector('.container')!.style.height = '590px';

            });




    }
}
