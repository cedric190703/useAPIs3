<template>
  <nav>
    <router-link to="/">Flags creator</router-link> |
    <router-link to="/love">Love Calculator</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,0.908000700280112) 0%, rgba(224,22,22,0.8687850140056023) 100%);
}

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
