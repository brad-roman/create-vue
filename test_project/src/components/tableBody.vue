<script setup>
import {usePlayerStore} from "@/stores/playerStore";
import playerPosn from "@/components/playerPosn.vue"
import playerAvail from "@/components/playerAvail.vue"

let obj = usePlayerStore();
obj.fill();

</script>

<template>
    <tbody>
        <tr v-for="player in obj.data" :key="player.index">
          <td class="sticky-col" >{{ player.name }}</td>
          <playerPosn :posn = 'player.positions' />
          <playerAvail :avails = 'player.available' />
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

</style>