<template>
    <div>
      <div class="weather-wrap">
        <div class="location-box">
          <div class="location">New York, USA {{weatherData.name}}</div>
        </div>
          <div class="weather-box">
            <div class="temp">{{(weatherData.main.temp).toFixed(0)}}°C</div>
            <div class="weather">Rain</div>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Weather',
  props: ['weatherData', 'cityName'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>