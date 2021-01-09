<template>
  <div class="default">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Elements/Footer/Footer';
import Header from '@/components/Elements/Header/Header';

export default {
    components: {
       Footer,
       Header
   } 
}
</script>

<style>
.default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

* {
  font-family: "Roboto", sans-serif;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
   display: flex;
   flex-direction: column;
   min-height: 100vh;
}

.wrapper {
  max-width: 920px;
  margin-left: auto;
  margin-right: auto;
}

.main {
  margin-top: 32px;
  margin-bottom: 32px;
  flex: 1;
}

h1 {
  margin-bottom: 16px;
}

p {
  line-height: 1.2;
}

p + p {
  margin-top: 12px;
}
</style>
