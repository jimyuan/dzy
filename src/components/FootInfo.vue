<template>
  <footer class="foot-info">
    <p>Footer: {{ time | dateTimeFormatter(3) }} (/components/FootInfo.vue)</p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      time: Date.now()
    }
  }
}
</script>
