<script setup>
  import counter from './components/counter.vue'
</script>

<template>
  <header>
      <div class="wrapper">
      <counter/>
    </div>
  </header>

  
</template>

<style scoped>
header {
  line-height: 1.5;
}

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
</style>
