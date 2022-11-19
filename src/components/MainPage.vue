<template>
  <layout-page>
    <main>
        <section class="mainContainer py-5 text-center container-fluid bg-light">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="mainContainer__title font-weight-light text-dark">Станьте продуктивнее и <br> реализуйте все свои цели!</h1>
                <p class="mainContainer__description font-weight-small text-dark">My to-do list - это лаконичное и простое в использовании веб-приложение, которое поможет вам помнить о всех важных задачах и позволит шаг за шагом приблизиться к вашей давней заветной мечте</p>
                <p>
                  <router-link to="/app" class="mainContainer__button btn btn-dark btn-lg" style="background: #7E41EA">Попробовать бесплатно</router-link>
                </p>
              </div>
            </div>
          </section>

          <section class="advantages">     
                        <h4 class="advantages__title text-light text-center">Преимущества My to-do list:</h4> 
                <div class="advantages__items d-flex flex-wrap">
                  <div class="advantages__item font-weight-small text-center text-white">
                    <div class="advantages__item_title">
                      <img src="../assets/easy.png" alt="easy" width="50" height="50"/>
                      <span>Простота</span>
                    </div>
                      <p class="advantages__item_description">понятный лаконичный интерфейс, в котором может разобраться человек любого возраста</p>
                  </div>
                  <div class="advantages__item font-weight-small text-center text-white">
                    <div class="advantages__item_title"></div>
                      <img src="../assets/comfort.png" alt="comfort" width="50" height="50"/>
                      <span>Удобство</span>
                    <div></div>
                      <p class="advantages__item_description">легкое распределение задач по степени срочности - вы точно не сорвете дедлайн!</p>
                  </div>
                  <div class="advantages__item font-weight-small text-center text-white">
                    <div class="advantages__item_title">
                      <img src="../assets/success.png" alt="success" width="50" height="50"/>
                      <span>Эффективность</span>
                    </div>
                      <p class="advantages__item_description">My to-do list повысит вашу результативность и поможет вам быть достичь целей</p>
                  </div>
                  <div class="advantages__item font-weight-small text-center text-white">
                    <div class="advantages__item_title">
                      <img src="../assets/quickly.png" alt="quickly" width="50" height="50"/>
                      <span>Быстрота</span>
                    </div>
                      <p class="advantages__item_description">приложение не перегружено лишними настройками и деталями - вы быстро сможете создать задачи!</p>
                  </div>
                </div>
                <p class="advantages__details font-weight-small text-white text-center">Подробнее о преимуществах веб-приложения можно прочитать <router-link to="/Advantages" class="advantages__details_link">здесь</router-link></p>
        </section>
    </main>
  </layout-page>
</template>

<script>
import LayoutPage from './LayoutPage.vue'

export default {
  name: "MainPage",
  components: {
    LayoutPage,
  }
};
</script>