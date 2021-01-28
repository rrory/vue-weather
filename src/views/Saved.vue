<template>
  <div class="saved">
    <h1>Saved weather locations</h1>
    <div v-for="city in savedCities" :key="city.name">
      <router-link 
        :to="{ 
            name: 'Weather', 
            params: { location: city.slug, cityName: city.name }
        }"
      >
        <Weather :cityName="city.name" listItem="true" />
      </router-link>
    </div>
  </div>
</template>


<script>
  import Weather from '../components/Weather'

  export default {
    name: 'Saved',
    data() {
      return {
        savedCities: [
          {
            name: 'Helsinki',
            slug: 'helsinki'
          },
          {
            name: 'New York',
            slug: 'new-york'
          },
          {
            name: 'Bangkok',
            slug: 'bangkok'
          },
        ]
      }
    },
    components: {
      Weather
    },
  }
</script>

<style lang="scss" scoped>

  .saved {
    h1 {
      font-weight: 300;
      margin-bottom: 30px;
    }
  }

</style>