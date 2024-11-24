<script setup>

defineProps({
    drawDate: String
})
</script>

<template>
          <th class="sticky-header">{{ drawDate }}</th>
</template>

<style lang="css" scoped>
    /* Sticky header and first column */
    .sticky-header {
      position: sticky;
      top: 0;
      background-color: #f4f4f9;
    }

</style>