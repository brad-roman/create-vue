<script setup>

    const props = defineProps({
        posn: {type: Array,
        default: []
        }
    })
</script>

<template>
        <td class="c-l">
            <span class="bg-green" v-if="props.posn[0] === '1'">1</span>
            <span class="bg-yellow" v-if="props.posn[1] === '2'">2</span>
            <span class="bg-orange" v-if="props.posn[2] === '3'">3</span>
            <span class="bg-red" v-if="props.posn[3] === 'S'">S</span>
        </td>
</template>

<style lang="css" scoped>
    .c-l { text-align: left !important; }
    
    /* Background colors */
    .bg-green { background-color: green; color: #fff; padding: 5px; }
    .bg-yellow { background-color: yellow; color: #333; padding: 5px; }
    .bg-orange { background-color: orange; color: #333; padding: 5px; }
    .bg-red { background-color: red; color: #fff; padding: 5px; }

</style>