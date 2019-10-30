<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(route) in Routes" v-bind:key="route.id">
        <router-link v-bind:to="route.path">{{ route.label }}</router-link>
      </li>
    </ul>
    <div>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routes
})

export default {
  router,
  name: "Main",
  computed: {
    Routes () {
      return routes
    }
  },
  props: {
    msg: String,
  }
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
