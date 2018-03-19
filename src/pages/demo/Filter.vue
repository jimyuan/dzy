<template>
  <section class="container">
    <p>Time: {{ time | dateFormat }}</p>
    <pre>Date.now() | dateFormat</pre>
    <p>Data: {{ 12345678 | dataFormat }}</p>
    <pre>12345678 | dataFormat</pre>
  </section>
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
