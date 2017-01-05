<script>
  import MbNavbar from './components/root/Navbar'
  import MbAlerts from './components/general/Alerts'
  export default {
    name: 'MbControl',
    components: {
      MbNavbar,
      MbAlerts
    }
  }
</script>
<template>
  <div id="app">
    <mb-navbar></mb-navbar>
    <div class="container">
      <mb-alert></mb-alert>
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" src="assets/scss/app.scss"></style>
