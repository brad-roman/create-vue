<script setup>
    import {useDrawDateStore} from "@/stores/drawDateStore";

    let draws = useDrawDateStore();

</script>

<template>
    <h1>{{ draws.league }}</h1>
    <h3>{{ draws.time }} {{ draws.day }} {{ draws.ind }} at {{ draws.club }}</h3>

    <h3>Spare List</h3>

</template>

<style lang="css" scoped>
    /* Headers styling */
    h1 {
      font-size: 2.5em;
      color: #333;
      margin-bottom: 10px;
      text-align: center;
    }

    h3 {
      font-size: 1.8em;
      color: #555;
      margin-bottom: 10px;
      text-align: center;
    }
</style>