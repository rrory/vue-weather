<template>
  <div class="weather-wrap list" v-if="listItem">
    <div class="location"> {{weatherData.name}}, {{weatherData.sys.country}}</div>
    <div class="temp">{{Math.round(weatherData.main.temp)}} °C</div>
  </div>
  <div class="weather-wrap" v-else>
      <div class="location main"> {{weatherData.name}}, {{weatherData.sys.country}} </div>
      <div class="weather-box">
        <div class="temp">{{Math.round(weatherData.main.temp)}} °C</div>
        <div class="temp-feels">Feels like {{Math.round(weatherData.main.feels_like)}} °C</div>
        <div class="description">
            {{capitalizeFirstLetter(weatherData.weather[0].description)}}
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Weather',
    props: [ 'cityName', 'listItem'],

    data() {
      return {
        api_key: 'YOUR_API_KEY',
        api_url: 'http://api.openweathermap.org/data/2.5/',
        city: this.cityName,
        weatherData: {},
      }
    },
    created: function() {
      this.getWeather()
    },
    methods: {
      getWeather() {
        let url =
          `${this.api_url}weather?q=${this.city}&units=metric&APPID=${this.api_key}`
        axios
          .get(url)
          .then(response => {
            this.weatherData = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    },
  }
</script>

<style lang="scss" scoped>

  .weather-wrap {
    width: 100%;
    max-width: 420px;
    margin: 0 auto 2px;
    padding: 30px 15px;
    border-radius: 15px;
    background-color: rgba(0,0,0,0.25);

    color: #eee;
    text-decoration: none;

    &.list {
      padding: 15px;
      border-radius: 0;
      display: flex;
      justify-content: space-between;

      &:hover {
        background-color: rgba(255,255,255,0.25);
        background-color: rgba(0,0,0,0.45);
      }
    }
    .location {
      font-weight: 600;
      text-decoration: none;
      &.main {
      text-align: left;
      font-size: 18px;
      }
    } 
 
    .weather-box {
      
      .temp {
        font-size: 50px;
        margin: 15px 0 5px;
      }
      .temp-feels {
        font-size: 12px;
        letter-spacing: 0.02em;
        font-weight: 300;
        margin: 5px;
      }

      .description {
        margin: 30px 0 0;
      }
    }


  }

</style>