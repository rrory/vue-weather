<template>
  <div class="saved">
    <h1>Saved weather locations</h1>
    <router-link :to="{ name: 'Weather', params: { location: 'new-york' }}">New York</router-link>
  </div>
</template>
