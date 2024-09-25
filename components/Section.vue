<template>
  <section :id="title.toLowerCase().replaceAll(' ', '-')">
    <div class="header">
      <h1>{{ title }}</h1>
      <hr>
    </div>
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;

  .header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 800px;
    padding-inline: 40px;

    h1 {
      font-size: 16px;
    }

    hr {
      border: none;
      height: 1px;
      background: rgba(0, 0, 0, 0.10);
    }
  }
}
</style>