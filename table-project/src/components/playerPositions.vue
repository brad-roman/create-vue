<script setup>
    import { defineProps } from "vue";

    defineProps({
        playerPosition: {String,
    default: 0}
})
</script>

<template>
    <td class="c-l">{{playerPosition}}
    </td>
</template>

<style scoped>
    .c-l { text-align: left !important; }
    
    /* Background colors */
    .bg-green { background-color: green; color: #fff; padding: 5px; }
    .bg-yellow { background-color: yellow; color: #333; padding: 5px; }
    .bg-orange { background-color: orange; color: #fff; padding: 5px; }
    .bg-red { background-color: red; color: #fff; padding: 5px; }

</style>