<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <Nuxt />
  </div>
</template>

<script>
  import TheHeader from '@/components/navigation/TheHeader'
  import TheSidenav from '@/components/navigation/TheSidenav'
  export default {
    components: {
      TheHeader,
      TheSidenav,
    }, 
    data() {
      return {
        displaySidenav: false
      }
    }
  }
</script>

<style>
html {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
