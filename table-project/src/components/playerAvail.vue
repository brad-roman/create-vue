<script setup>

    const props = defineProps({
        avails: {type: Array,
        default: []
        }
    })
</script>

<template>
    <td v-for="(status, index) in props.avails" :key="index">
        <span v-if="status === 'Y'">✅</span>
        <span v-else-if="status === 'N'">❌</span>
        <span v-else="status === 'U'">❓</span>
    </td>
</template>