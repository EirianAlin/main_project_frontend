<template>
<layout-page>
    <section class="advantagePageContainer py-5 text-center container-fluid bg-light">
            <h1 class="advantagePageContainer__title font-weight-light text-dark">Чем полезен My to-do list?</h1>
              <div class="advantagePageContainer__wrapper d-flex justify-content-around">
                <div class="advantagePageContainer__wrapper_description">
                  <p class="font-weight-small text-dark">Вы наверняка множество раз в своей жизни пытались стать более продуктивными и результативными. Однако, к сожалению, длилось это обычно недолго: вы либо слишком переусердствовали и уставали, либо просто важные дела вылетали у вас из головы. Такое бывает со всеми!</p>
                  <p>Для того, чтобы обо всем помнить и все успевать, можно воспользоваться простым и лаконичным веб-приложением My to-do list!</p>
                </div>
                <div class="advantagePageContainer__wrapper_image">
                  <img src="../assets/banner.jpg" alt="to-do-app">
                </div>
              </div>
      </section>

      <section class="advantagePagePoints">     
                    <h4 class="advantagePagePoints__title text-light text-center">My to-do list поможет вам:</h4> 
            <div class="advantagePagePoints__items d-flex justify-content-center">
              <div class="advantagePagePoints__item font-weight-small text-center text-white">
                <div class="advantagePagePoints__item_description">
                  <img src="../assets/triangle.png" alt="triangle"/>
                  <span>Помнить о всех задачах. Можно добавлять неограниченное количество задач, которые вам необходимо выполнить. Вам не придется держать все в голове!</span>
                </div>
              </div>
              <div class="advantagePagePoints__item font-weight-small text-center text-white">
                <div class="advantagePagePoints__item_description">
                  <img src="../assets/triangle.png" alt="triangle"/>
                  <span>Выделять важные задачи. Веб-приложение позволяет пометить задачу в качестве важной, тем самым вы будете знать за что следует браться в первую очередь.</span>
                </div>
              </div>
              <div class="advantagePagePoints__item font-weight-small text-center text-white">
                <div class="advantagePagePoints__item_description">
                  <img src="../assets/triangle.png" alt="triangle"/>
                  <span>Легко управлять задачами. Добавление и удаление задач интуитивно понятно человеку любого возраста. Это делается быстро и с легкостью всего за пару щелчков мышью.</span>
                </div>
              </div>
              <div class="advantagePagePoints__item font-weight-small text-center text-white">
                <div class="advantagePagePoints__item_description">
                  <img src="../assets/triangle.png" alt="triangle"/>
                  <span>Добиться всех целей. Пользуясь My to-do list на регулярной основе, вы обязательно реализуете все ваши намеченные цели в кратчайшие сроки!</span>
                </div>
              </div>
            </div>
    </section>
  </layout-page>
</template>

<script>
import LayoutPage from './LayoutPage.vue'

export default {
  name: "AdvantagesOfToDo",
  components: {
    LayoutPage,
  }
};
</script>
