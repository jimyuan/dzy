<template>
  <div>
    <h2>{{ msg }} (/pages/Home.vue)</h2>
    <router-link to="/demo">see UI demo</router-link>
    <router-link to="/info">see Ajax demo</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'DEMO PAGE!'
    }
  }
}
</script>
