<template>
<div id="body" class="w-screen h-screen text-center p-20 align-middle overflow-auto">
    <Header class="mb-10"/>
    <QuoteGenerator />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuoteGenerator from './components/QuoteGenerator.vue';

export default {
  name: 'App',
  components: {
    QuoteGenerator,
    Header
  }
}
</script>

<style scoped>
  #body {
    background-image: url('../src/assets/c67b6e6a7d6b01f902ae86df3b8c84b5.jpg');
    background-size: cover;
    background-position: 0%;
  }
</style>