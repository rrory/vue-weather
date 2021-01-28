<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Search</router-link>
      <router-link to="/saved">Saved</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #333;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #eee;
    padding: 0 15px;

    a {
      text-decoration: none;
    }

    h1 {
      color: #fff;
      font-weight: 300;
      font-size: 20px;
      margin-bottom: 15px;
      @media screen and (min-width: 420px) {
        font-size: 30px;
      }
    }
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    padding: 10px 15px;
    border-radius: 5px;
    color: #eee;
    &:hover {
      text-decoration: underline;
    } 
  }

  #nav a.router-link-exact-active {
    font-weight: bold;
    background-color: rgba(66, 185, 131, 0.6);
    text-decoration: none;
  }
</style>
