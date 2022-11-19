<template>
<layout-page>
    <section class="formRegister container-fluid">
          <h3 class="form__title font-weight-light text-light text-center">Регистрация</h3>
          <div class="form__points form-group row">
            <label for="inputName3" class="form__points_label text-light">Имя</label>
              <input type="name" name="name" class="form__points_input form-control" v-model="register_form_data.name" id="inputName3" placeholder="Введите имя">
          </div>
          <div class="form__points form-group row">
            <label for="inputSurname3" class="form__points_label text-light">Фамилия</label>
              <input type="surname" name="surname" class="form__points_input form-control" v-model="register_form_data.surname" id="inputSurname3" placeholder="Введите фамилию">
          </div>
          <div class="form__points form-group row">
            <label for="inputEmail3" class="form__points_label text-light">Email</label>
              <input type="email" name="email" class="form__points_input form-control" v-model="register_form_data.email" id="inputEmail3" placeholder="Введите почту">
          </div>
          <div class="form__points form-group form-group row">
            <label for="inputPassword3" class="form__points_label text-light">Пароль</label>
              <input type="password" name="password" class="form__points_input form-control" v-model="register_form_data.password" id="inputPassword3" placeholder="Введите пароль">
          </div>
          <div class="form__points form-group form-group row">
            <label for="inputPasswordRepeat3" class="form__points_label text-light">Подтверждение пароля</label>
              <input type="password" name="password_repeat" class="form__points_input form-control" v-model="register_form_data.password_repeat" id="inputPassword3" placeholder="Повторно введите пароль">
          </div>
          <div class="form__button form-group row">
              <button @click="sendRegisterData" type="submit" class="btn btn-primary">Зарегистроваться</button>
          </div>
          <div class="passwordError text-center text-light py-4 font-weight-small" v-if="error"><p>Пароли не совпадают!</p></div>
        <div class="form__noAccount text-center text-light">
          <p>Есть аккаунт? <router-link to="/login" class="form__noAccount_link">Войти</router-link></p>
        </div>
    </section>
  </layout-page>
  </template>
  
  <script>
  import LayoutPage from './LayoutPage.vue'
  
  export default {
    name: "RegisterPage",
    components: {
    LayoutPage,
  },
  data () {
    return {
      error: false,
      register_form_data: {
        name: "",
        surname: "",
        email: "",
        password: "",
        password_repeat: "",
      }
  }
},
  methods: {
    sendRegisterData: function () {
      if (this.register_form_data.password != this.register_form_data.password_repeat) {
        this.error = true;
        return true;
      }

      this.axios.post("http://test/register.php", JSON.stringify(this.register_form_data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
  };
  </script>
  