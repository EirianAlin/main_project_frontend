<template>
    <layout-page>
        <section class="LogOut container-fluid">
            <div class="col-lg-3 mx-auto">
                <p class="LogOut__welcome py-5 text-light text-center">Добро пожаловать!</p>
            </div>
            <div class="LogOut__button form-group text-center">
                <button @click="logout" type="submit" class="btn btn-primary btn-sm">Выйти</button>
            </div>
        </section>
      </layout-page>
      </template>
      
      <script>
      import LayoutPage from './LayoutPage.vue'
      
      export default {
        name: "LogOutPage",
        components: {
            LayoutPage,
        },
        methods: {
            logout: function () {
                localStorage.removeItem('name');
                localStorage.removeItem('id');
                localStorage.removeItem('id_user');
                this.$router.push('/');
            }
        }
};
      </script>
      