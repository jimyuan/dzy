<template>
  <main class="fluid-container">
    <div class="container clearfix">
      <aside class="member-menu"> menu list </aside>
      <transition name="fade" mode="out-in">
        <router-view class="primary"></router-view>
      </transition>
    </div>
  </main>
</template>

<script>
export default {
}
</script>
