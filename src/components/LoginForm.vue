<template>
  <div class="container">
    <div class="col">
      <img src="@/assets/daniel-korpai-HyTwtsk8XqA-unsplash.jpg" alt="" />
    </div>
    <div class="col">
      <form action="POST">
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" value="John" /><br />
        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
        <input type="submit" value="Cancel" class="btn-cancel" />
        <input type="submit" value="Submit" class="btn-submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
img {
  width: 95%;
  height: 100%;
  border-radius: 10px 0 0 10px;
}
form {
  padding: 1rem;
}
.container {
  margin: 0 auto;
  width: 50%;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 5px 15px 5px rgba(1, 66, 46, 0.24);
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.btn-submit {
  background-color: rgba(3, 135, 117, 1);
  margin-right: 1rem;
}
.btn-cancel {
  background-color: rgb(34, 34, 34);
}
.btn-submit,
.btn-cancel {
  border: 0;
  padding: 0.75rem;
  width: 40%;
  color: white;
}
</style>
