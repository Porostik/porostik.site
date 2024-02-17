<script setup lang="ts">
type Props = {
  link: string;
};

const { link } = defineProps<Props>();
</script>

<template>
  <a class="link" :href="link" target="_blank">
    <slot />
  </a>
</template>

<style lang="scss">
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px 18px;
  background: var(--secondary);
  transition: box-shadow 0.2s linear;

  &:hover {
    box-shadow: 0px 0px 0px #f6d4b1, -2px 3px 0px rgba(82, 82, 82, 0.25);
  }

  svg {
    margin: 0;

    path {
      fill: var(--primary);
    }
  }
}
</style>
