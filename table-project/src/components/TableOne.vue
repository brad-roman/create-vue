<script setup>
import drawpageheader from "@/components/drawPageHeader.vue";
import drawheader from "@/components/drawheader.vue";
import {useDrawDateStore} from "@/stores/drawDateStore";

let draws = useDrawDateStore();
draws.fill();
</script>

<template>
  <div>
    <drawpageheader />
    <table class="table">
      <thead>
        <tr>
          <th class="sticky-header">Name</th>
          <th class="sticky-header">Positions</th>
          <drawheader v-for = "draw in draws.drawdate" :drawDate="draw" />
      </tr>
      </thead>
      <tbody>
        <tr>
          <td class="sticky-col">Tiger Nixon</td>
          <td class="c-l"><span class="bg-green">1</span><span class="bg-yellow">2</span></td>
          <td>✅</td>
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
    </table>
    </div>
</template>

<style lang="css" scoped>
    /* Table styling */
    .table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }

    .table th, .table td {
      padding: 10px;
      text-align: center; /* Center text in each cell */
      border: 1px solid #ddd;
    }

    /* Bold header text */
    .table th, .table .sticky-col {
      font-weight: bold;
    }

    /* Sticky header and first column */
    .sticky-header {
      position: sticky;
      top: 0;
      background-color: #f4f4f9;
    }

    .sticky-col {
      position: sticky;
      left: 0;
      background-color: #f4f4f9;
    }

    /* Form styling */
    form {
      margin: 20px 0;
      padding: 20px;
      background-color: #fafafa;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input[type="text"], input[type="email"], input[type="password"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
    }

    button:hover {
      background-color: #555;
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