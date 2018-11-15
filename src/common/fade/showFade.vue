<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: "show-fade"
  }
</script>

<style scoped lang="stylus">
  .v-enter,.v-leave-to
    display none
  .v-enter-active,.v-leave-active
    transition display linear 0.5s
</style>
