<template>
  <div class="container">
    <div>
      <img src="@/assets/daniel-korpai-HyTwtsk8XqA-unsplash.jpg" alt="" />
    </div>
    <div class="col">
      <div class="info-block">
        <h1>Register Account</h1>
        <p>
          Please enter a username, email, & password to register an account with
          us.
        </p>
      </div>
      <form @submit.prevent="register()">
        <div class="form-container">
          <label for="username">Username </label>
          <input type="text" name="username" v-model="username" required />
          <label for="email">Email </label>
          <input type="email" name="email" v-model="email" required />
          <label for="password">Password </label>
          <input type="password" name="password" v-model="password" required />
        </div>
        <div class="validations" v-if="passwordValidation.errors.length > 0">
          <p v-for="(error, index) in passwordValidation.errors" :key="index">
            {{ error }}
          </p>
        </div>
        <div class="btn-block">
          <input type="submit" value="Cancel" class="btn-cancel" />
          <input type="submit" value="Submit" class="btn-submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: [],
      rules: [
        { message: "One special character required.", regex: /[#?!@$%^&*-]+/ },
        { message: "One uppercase letter required.", regex: /[A-Z]+/ },
        { message: "8 characters minimum.", regex: /.{8,}/ },
      ],
    };
  },
  methods: {
    register() {
      console.log(this.passwordValidation);
      if (this.meetsCriteria) {
        console.log("success");
      }
    },
  },
  computed: {
    passwordValidation() {
      let errors = [];
      for (let condition of this.rules) {
        if (!condition.regex.test(this.password)) {
          errors.push(condition.message);
        }
      }
      if (errors.length === 0) {
        return { valid: true, success: true, errors };
      } else {
        return { valid: false, success: false, errors };
      }
    },
    meetsCriteria() {
      return this.passwordValidation.success === true;
    },
  },
};
</script>

<style>
h1 {
  color: rgba(24, 132, 133, 1);
  text-align: center;
  font-weight: 900;
  margin-bottom: 1rem;
}
p {
  margin: 0 auto;
  width: 75%;
  text-align: center;
  font-size: 0.75rem;
}
img {
  width: 95%;
  height: 100%;
  border-radius: 10px 0 0 10px;
}
input {
  background-color: rgb(242, 242, 242);
}
label {
  font-size: 0.75rem;
  font-weight: 900;
}
.form-container {
  display: grid;
  grid-template-columns: [labels] auto [controls] 1fr;
  grid-auto-flow: row;
  grid-gap: 0.8em;
  margin: 1rem;
}
.form-container > label {
  grid-column: labels;
  grid-row: auto;
}
.form-container > input {
  grid-column: controls;
  grid-row: auto;
  border: none;
  padding: 1em;
}
.container {
  margin: 0 auto;
  width: 65%;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 5px 15px 5px rgba(1, 66, 46, 0.24);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
}
.col {
  margin: auto;
}
.btn-submit {
  background-color: rgba(3, 135, 117, 1);
  margin-left: 1rem;
}
.btn-cancel {
  background-color: rgb(34, 34, 34);
}
.btn-block {
  text-align: center;
}
.btn-submit,
.btn-cancel {
  border: 0;
  padding: 0.75rem;
  width: 40%;
  color: white;
}
.info-block {
  margin-bottom: 1.5rem;
}
.validations p {
  color: red;
}
.validations p:last-child {
  margin-bottom: 1rem;
}
</style>
