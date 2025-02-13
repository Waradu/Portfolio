<template>
  <NuxtPage />
  <Blur />
  <NuxtParticles
    id="tsparticles"
    url="/particles.json"
    v-if="SNOW"
  ></NuxtParticles>
</template>

<script lang="ts" setup>
const SNOW = new Date().getMonth() === 11;

onMounted(() => {
  document.documentElement.style.filter = "blur(0px)";
});
</script>

<style lang="scss">
@import url("~/assets/fonts/inriaserif.scss");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 300;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

b {
  font-weight: 700;
}

i {
  font-style: italic;
}

html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  font-family: "Inria Serif", sans-serif;
  overflow-x: hidden;
  background: #e8dfd7;
  cursor: url("~/assets/cursor.png"), auto;
}

a, .pointer {
  cursor: url("~/assets/cursor_pointer.png"), auto;
}

p,
b,
span,
h1,
h2,
h3,
h4,
h5,
h6,
label,
input,
textarea,
select,
button,
li {
  cursor: url("~/assets/cursor_text.png") 0 15, auto;
}

html {
  filter: blur(10px);
  transition: filter 0.5s ease-in-out;
}

::-webkit-scrollbar {
  width: 0px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-in-out;
}

.page-enter-from {
  filter: blur(5px);
  opacity: 0;
}

.page-leave-to {
  filter: blur(5px);
  opacity: 0;
}
</style>
