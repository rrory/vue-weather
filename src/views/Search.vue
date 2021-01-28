<template>
  <div>
    <h1>What's the weather like in..?</h1>
    <div class="search-box">
      <input 
        type="text" 
        class="search-bar" 
        placeholder="City name"
        v-model="cityInput"
        @keyup.13="setCityName"
      />
    </div> 
    <Weather :cityName="cityName" :key="componentKey"/> 
  </div>
</template>

<script>
  import Weather from '../components/Weather'

  export default {
    name: 'Search',
    data() {
      return {
        cityName: 'London',
        cityInput: '',
        componentKey: 0,
      }
    },
    methods: {
      setCityName () {
        this.forceRerender()
        return (this.cityName = this.cityInput)
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    components: {
      Weather,
    },
  }
</script>

<style lang="scss" scoped>
  .search-box {
    width: 100%;
    max-width: 420px;
    margin: 0 auto 30px;
  
    .search-bar {
      display: block;
      width: 100%;
      padding: 15px;
      color: #333;
      font-size: 20px;
      

      appearance: none;
      border: none;
      outline: none;
      background: none;

      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
      background-color: rgba(255, 255, 255, 0.85);
      border-radius: 0px 16px 0px 16px;
      transition: 0.4;
    }

    .search-bar:focus {
      box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.15);
      background-color: rgba(255, 255, 255, 1);
      border-radius: 6px 0px 16px 0px;
    }
  }
</style>