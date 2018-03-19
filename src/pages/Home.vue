<template>
  <main class="container">
    <h2>{{ msg }} (/pages/Home.vue)</h2>
    <ul>
      <li><router-link to="/demo/ui">see UI demo</router-link></li>
      <li><router-link to="/demo/info">see Ajax demo</router-link></li>
      <li><router-link to="/demo/filter">see Filter demo</router-link></li>
    </ul>
    <hr>
    <ul>
      <li v-for="route of link"><router-link :to="`/user/${route.role}`">{{route.name}}</router-link></li>
    </ul>
  </main>
</template>

<script>
export default {
  data () {
    return {
      msg: 'DEMO PAGE!',
      link: [
        { role: 'bailor', name: '委托方' },
        { role: 'carrier', name: '承运商' },
        { role: 'operator', name: '运营商' }
      ]
    }
  }
}
</script>
