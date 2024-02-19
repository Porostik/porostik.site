<script setup lang="ts">
const { prevRoute, nextRoute } = useNavigation();
</script>

<template>
  <div class="main">
    <a class="controller" :href="prevRoute" v-if="prevRoute">
      <SvgoArrow />
    </a>
    <div class="page">
      <slot />
    </div>
    <a class="controller" :href="nextRoute" v-if="nextRoute">
      <SvgoArrow />
    </a>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary);
  width: 100%;
  height: 100%;

  .page {
    width: 100%;
    height: 100%;
    padding: 0 10px;
  }
}

.controller {
  width: 30px;
  height: 100%;
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: var(--primary);
    }
  }

  &:nth-child(1) {
    svg {
      transform: rotate(180deg);
    }
  }
}
</style>
