<template>
<layout-page>
  <h4 class="appPage__title">Мои задачи</h4>

  <div class="appPage__container">

  <div class="appPage__taskTypes wrapper-stat">
    <div class="stat">
      <h5>Срочные</h5>
      <div class="appPage__taskTypes_bar wrapper-progress">
        <div class="bar" :style="{ width: `${statistics.urgent}`}"></div>
      </div>
    </div>
    <div class="stat">
      <h5>Несрочные</h5>
      <div class="appPage__taskTypes_bar wrapper-progress">
        <div class="bar nonUrgant" :style="{ width: `${statistics.nonUrgent}`}"></div>
      </div>
    </div>
  </div>

  <div class="appPage__tasks">
    <div
    class="appPage__tasks_task"
     :class="{ 
      task, 
      checked: task.done == 1}"
     v-for="task, index in tasks"
     :key="task.id"
     @click="checkedHandler(task)"
    >
      <div 
      class="appPage__tasks_round"
        :class="{
          appPage__tasks_round,
          urgent: task.type == 'Срочная',
          nonUrgent: task.type == 'Несрочная',
        }"
        ></div>

      <span class="appPage__tasks_currentTask">{{task.text}}</span>

      <div class="appPage__tasks__deleteTask remove-task-icon" @click="removeTask(index, task.id)">
        <img src="../src/assets/close.png" />
      </div>
    </div>
  </div>

  <div class="appPage__addTask">
    <div class="appPage__addTask_wrapper">
      <input class="appPage__addTask_input" type="text" placeholder="Напишите здесь вашу задачу" v-model="text" v-on:keyup.enter="addTask" />
    </div>
    <div class="appPage__addTask_makeUrgantWrapper">
    <span class="appPage__addTask_makeUrgantText">Срочная</span>
    <label class="appPage__addTask_makeUrgantSwitch">
      <input class="appPage__addTask_makeUrgantSlider" type="checkbox" v-model="urgent">
      <span class="slider round"></span>
    </label>
    </div>
    <div class="appPage__addTask_button">
    <button @click="addTask">+</button>
    </div>
</div>
</div>
</layout-page>
</template>

<script>
import LayoutPage from '../src/components/LayoutPage.vue'

export default {
  name: "App",
  components: {
    LayoutPage,
  },
  data() {
    return {
      text: '',
      urgent: false,
      tasks: [
    ],
  };
 },
 methods: {
  checkedHandler: function (task) {
    this.axios.post("http://test/update_task.php", JSON.stringify({id: task.id, done: !task.done})).then(() => {
      task.done = !task.done;
    })
  },

  addTask: function () {
    let newTask = {
      text: this.text,
      done: false,
      type: this.urgent ? 'Срочная' : 'Несрочная',
      id_user: localStorage.getItem('id_user'),
    };
    this.axios.post("http://test/add_task.php", JSON.stringify(newTask)).then((response) => {
      this.tasks.push(response.data); 

    })
  },

  removeTask: function (index, id) {
    this.axios.post("http://test/delete_task.php", JSON.stringify({id: id})).then(() => {
      delete this.tasks.splice(index, 1)
    })
  },

  makeUrgentTask: function (task) {
    task.type === 'urgent'
  }
 },

 computed: {
  statistics: function() {
    const count = this.tasks.length || 1
    const urgentData = this.tasks.filter(t => t.type === 'Срочная')
    const nonUrgentData = this.tasks.filter(t => t.type === 'Несрочная')

    return {
      urgent: Math.round((urgentData.length * 100) / count) + '%',
      nonUrgent: Math.round((nonUrgentData.length * 100) / count) + '%',
    }
  },
 },
 async created() {
      if (!localStorage.getItem('id_user')) {
        window.location.href="/login";
      } 
      await this.axios.post("http://test/tasks.php", JSON.stringify({id_user: localStorage.getItem('id_user')}), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.tasks = response.data;
        // console.log(this.tasks);
      });
    },
};
</script>



