<script setup>
import {usePlayerStore} from "@/stores/playerStore";

let players = usePlayerStore();
players.fill();

</script>

<template>
    <tbody>
        <tr>
          <td class="sticky-col">{{players.name}} </td>
          <td class="c-l"><span class="bg-green">{{players.positions[0]}}</span><span class="bg-yellow">2</span></td>
          <td>{{players.available[0]}}</td>
          <td>✅</td>
          <td>❓</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
          <td>❓</td>
          <td>✅</td>
        </tr>
        <tr>
          <td class="sticky-col">Garrett Winters</td>
          <td class="c-l"><span class="bg-yellow">2</span><span class="bg-orange">3</span><span class="bg-red">S</span></td>
          <td>❌</td>
          <td>❌</td>
          <td>✅</td>
          <td>❓</td>
          <td>✅</td>
          <td>❌</td>
          <td>❓</td>
          <td>✅</td>
        </tr>
        <tr>
          <td class="sticky-col">Ashton Cox</td>
          <td class="c-l"><span class="bg-green">1</span><span class="bg-yellow">2</span><span class="bg-orange">3</span><span class="bg-red">S</span></td>
          <td>❌</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <td class="sticky-col">Cedric Campbell</td>
          <td class="c-l"><span class="bg-orange">3</span><span class="bg-red">S</span></td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
          <td>❓</td>
          <td>✅</td>
          <td>✅</td>
          <td>❓</td>
          <td>❌</td>
        </tr>
        <tr>
          <td class="sticky-col">Airi Satou</td>
          <td class="c-l"><span class="bg-green">1</span><span class="bg-yellow">2</span><span class="bg-orange">3</span><span class="bg-red">S</span></td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <td class="sticky-col">Brielle Williams</td>
          <td class="c-l"><span class="bg-green">1</span><span class="bg-yellow">2</span></td>
          <td>❓</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
          <td>❌</td>
          <td>❓</td>
          <td>✅</td>
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