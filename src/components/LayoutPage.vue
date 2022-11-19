<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
              <router-link to="/" class="header__mainLink">
                <img src="../assets/todo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
          <span class="text-white">My to-do list</span></router-link>
              <button @click="nav = !nav" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse show navbar-collapse" id="navbarNav" v-show="nav">
                <ul class="header__menu navbar-nav w-100 justify-content-end">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Главная</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/app" class="nav-link">Веб-приложение</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/advantages" class="nav-link">Преимущества</router-link>
                  </li>
                  <li class="nav-item" v-if="!login_point">
                    <router-link to="/login" class="nav-link">Войти</router-link>
                  </li>
                  <li class="nav-item" v-else>
                    <router-link to="/logout" class="text-light nav-link">{{login_point}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div class="wrapper__main">
        <slot></slot>
        </div>

        <footer class="footer">
            <p class="footer__text text-dark text-center">Все права защищены © 2022 │ Хасанова Алина</p>
        </footer>
      
  </template>
  
  <script>
  
  export default {
    name: "LayoutPage",
    async created() {
    },
    data () {
      return {
        login_point: localStorage.getItem('name'),
        nav: false,
    }
  }
}
  </script>
  