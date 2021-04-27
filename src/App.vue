<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
body {
  height: 100vh;
  background: linear-gradient(28deg, #020024, #038775 52%, #aded82);
  background-repeat: no-repeat;
  font-family: "Poppins", sans-serif;
}
#nav {
  margin: 0 auto;
  padding: 30px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.25rem;
}
#nav a.router-link-exact-active {
  color: #004f44;
}
</style>
