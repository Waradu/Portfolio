<template>
  <NuxtPage />
  <Blur />
</template>

<style lang="scss">
@import url('~/assets/fonts/inriaserif.scss');

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
  font-family: 'Inria Serif', sans-serif;
  overflow-x: hidden;
  background: #E8DFD7;
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