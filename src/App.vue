<template>
  <RegisterForm />
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue";

export default {
  name: "App",
  components: {
    RegisterForm,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
body {
  width: 100%;
  height: 100vh;
  margin-top: 60px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    28deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 135, 117, 1) 52%,
    rgba(24, 132, 133, 1) 100%
  );
  background-repeat: no-repeat;
  font-family: "Poppins", sans-serif;
}
</style>
