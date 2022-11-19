<template>
  <layout-page>
  <section class="form container-fluid">
      
        <h3 class="form__title font-weight-light text-light text-center">Войти</h3>
        <div class="form__points form-group row">
          <label for="inputEmail3" class="form__points_label text-light">Email</label>
            <input type="email" name="email" class="form__points_input form-control" v-model="form_data.email" id="inputEmail3" placeholder="Введите почту">
        </div>
        <div class="form__points form-group form-group row">
          <label for="inputPassword3" class="form__points_label text-light">Пароль</label>
            <input type="password" name="password" class="form__points_input form-control" v-model="form_data.password" id="inputPassword3" placeholder="Введите пароль">
        </div>
        <div class="form__button form-group row">
            <button @click="sendData" type="submit" class="btn btn-primary">Войти</button>
        </div>
        <div class="loginError text-center text-light py-4 font-weight-small" v-if="error_data.error"><p>{{error_data.message}}</p></div>
      
      <div class="form__noAccount text-center text-light">
        <p>Еще нет аккаунта? <router-link to="/register" class="form__noAccount_link">Зарегистрироваться</router-link></p>
      </div>
  </section>
</layout-page>
  
</template>

<script>
import LayoutPage from './LayoutPage.vue'

export default {
  name: "LoginPage",
  components: {
    LayoutPage,
  },
  data () {
    return {
      form_data: {
        email: "",
        password: ""
      },
      error_data: {
        error: false,
        message: ""
      }
    }
  },
  methods: {
    sendData: async function () {
      await this.axios.post("http://test/login.php", JSON.stringify(this.form_data), {
        email: this.email,
        password: this.password,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.data.error){
          this.error_data.error = response.data.error;
          this.error_data.message = response.data.message;
        } 
        else {
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('id_user', response.data.id_user);
          setTimeout(function(){
            window.location.href="/app";
          }, 1000);
        }
      });
    }
  }
};
</script>
