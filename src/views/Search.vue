<template>
  <div>
    <div class="search-box">
      <input 
        type="text" 
        class="search-bar" 
        placeholder="Search..."
        v-model="cityInput"
        @keypress="getWeather"
      />
    </div>
    <Weather
      v-if="isDataFetched"
      :weatherData="weatherData"
     /> 
  </div>
</template>

<script>
  import Weather from '../components/Weather'
  import axios from 'axios'

  export default {
    name: 'Search',
    data() {
      return {
        api_key: '8a53a6ca99e258a20b45aead448ee98a',
        api_url: 'http://api.openweathermap.org/data/2.5/',
        cityInput: '',
        weatherData: {},
        isDataFetched: false
      }
    },
    methods: {
    getWeather(e) {
      if (e.key == "Enter") {
        let url =
          `${this.api_url}weather?q=${this.cityInput}&units=metric&APPID=${this.api_key}`
        axios
          .get(url)
          .then(response => {
            this.weatherData = response.data
            this.isDataFetched = true
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
  },
    components: {
      Weather,
    },
  }
</script>
