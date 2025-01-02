<script setup>
import {usePlayerStore} from "@/stores/playerStore";

let obj = usePlayerStore();
obj.fill();
</script>

<template>
    <tbody>
        <tr v-for="player in obj.data">
          <td class="sticky-col" >{{ player.name }}</td>
          <td class="c-l">
            <span class="bg-green" v-if="player.positions[0] === '1'">1</span>
            <span class="bg-yellow" v-if="player.positions[1] === '2'">2</span>
            <span class="bg-orange" v-if="player.positions[2] === '3'">3</span>
            <span class="bg-red" v-if="player.positions[3] === 'S'">S</span>
          </td>
          <td v-for="status in player.available">
            <span v-if="status === 'Y'">✅</span>
            <span v-else-if="status === 'N'">❌</span>
            <span v-else="status === 'U'">❓</span>
          </td>
        </tr>
    </tbody>
</template>

<style scoped>
    .table th, .table td {
      padding: 10px;
      text-align: center; /* Center text in each cell */
      border: 1px solid #ddd;
    }

    /* Bold header text */
    .table th, .table .sticky-col {
      font-weight: bold;
    }

    .sticky-col {
      position: sticky;
      left: 0;
      background-color: #f4f4f9;
    }

    /* Font colors */
    .text-green { color: green; }
    .text-yellow { color: yellow; }
    .text-orange { color: orange; }
    .text-red { color: red; }

    /* Background colors */
    .bg-green { background-color: green; color: #fff; padding: 5px; }
    .bg-yellow { background-color: yellow; color: #333; padding: 5px; }
    .bg-orange { background-color: orange; color: #fff; padding: 5px; }
    .bg-red { background-color: red; color: #fff; padding: 5px; }

    .c-l { text-align: left !important; }
</style>