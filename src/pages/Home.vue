<template>
  <div>
    <h2>{{ msg }} (/pages/Home.vue)</h2>
    <router-link to="/demo">see demo</router-link>
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
