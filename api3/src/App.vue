<template>
  <nav>
    <router-link to="/">Flags creator</router-link> |
    <router-link to="/art">Art AI-API</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: color;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: color;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
