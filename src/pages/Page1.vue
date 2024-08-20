<script setup>

</script>

<template>
  <h2>Page 1</h2>

  <div>
    <p>To reproduce the bug you need to have some navigation in browser history</p>
    <p>So I made 3 vue pages to make it easier</p>
  </div>

  <div>please go to page 2:</div>

  <router-link :to="{ name: 'page-2' }">
    Page 2
  </router-link>
</template>
