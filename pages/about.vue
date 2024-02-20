<script setup lang="ts">
definePageMeta({
  middleware: ["page"],
});
</script>

<template>
  <div class="about">
    <UText type="secondary" size="md">About me</UText>
    <UText class="mainText" type="primary" size="sm">
      I have 3+ years experience in programming. I have worked on Gambling and
      E-commerce projects. Usually I work with React stack but also have
      experience with VueJs.
    </UText>
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100%;

  .mainText {
    display: block;
    max-width: 700px;
    text-align: center;
  }
}
</style>
