<template>
  <div class="home">
    <Registration />
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from "@/views/Registration.vue";

export default {
  name: "Home",
  components: {
    Registration,
  },
};
</script>
