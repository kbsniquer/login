<template>
  <LoginForm />
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "App",
  components: {
    LoginForm,
  },
};
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    28deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 135, 117, 1) 52%,
    rgba(173, 237, 130, 1) 100%
  );
  background-repeat: no-repeat;
}
</style>
