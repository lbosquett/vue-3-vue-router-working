<script setup>
import {blockStore} from "../stores/guard-store.js";
</script>

<template>
  
  
  
  <div>
    <h2>Page 3</h2>

    <div>click on the button below to block the navigation with a navigation guard.</div>

    <div>
      <button v-on:click="blockStore.block = true">Block leave</button>
      <div>navigation guard: {{ blockStore.block }}</div>
    </div>

    <div>
      <p>Then click on previous arrow on browser to navigate away to the previous page</p>
      <p>Once the page asks if you want to leave click on <strong>cancel</strong></p>
    </div>
    
    <div style="color: green">
      <p>Observe the navigation still works properly on vue 3 as opposed to vue 2</p>
    </div>

  </div>
</template>