<script setup>

</script>

<template>
  <div>
    <h2>Page 2</h2>

    <div>please go to page 3:</div>
    <router-link :to='{ name: "page-3" }'>
      Page 3
    </router-link>
  </div>
</template>