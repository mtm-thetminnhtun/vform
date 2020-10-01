# vform

Very Simple Form Validation and Error Handling

## Usage

```vue
<template>
  <div id="app">
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Username</label>
        <input
          v-model="form.username"
          type="text"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': errors.has('username') }"
        />
        <div class="invalid-feedback">{{ errors.get("username") }}</div>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          v-model="form.password"
          type="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': errors.has('password') }"
        />
        <div class="invalid-feedback">{{ errors.get("password") }}</div>
      </div>

      <button type="submit" class="btn btn-primary">Log In</button>
    </form>
  </div>
</template>

<script>

import Form from '/path/form'
import Errors from '/path/errors'

export default {
new Vue({
  el: '#app',

  data() {
    return {
      // Create a new form instance
      form: new Form({
        username: '',
        password: ''
      }),
      // Create a new errors instance
      errors: new Errors({
        username: '',
        password: ''
      }),
    };
  },
  methods: {
    validate() {
      this.errors.clear();
      if (this.form.username && this.form.password) {
        return true;
      }
      if (!this.form.username) {
        this.errors.set('username', 'The username field is required.');
      }
      if (!this.form.password) {
        this.errors.set('password', 'The password field is required.');
      }
    },
    login() {
      if(! this.validate()) {
        return;
      }
      // API call
      axios.post('login', this.form)
      .then(response => this.form.reset())
    },
  }
});
}
</script>
```

Ref: 
- https://github.com/cretueusebiu/vform
- https://vuejs.org/v2/cookbook/form-validation.html
