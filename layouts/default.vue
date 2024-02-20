<script setup lang="ts">
const route = useRoute();

const prev = computed(() => route.meta.page?.prev);
const next = computed(() => route.meta.page?.next);

const goPrev = () => navigateTo({ path: prev.value || "" });
const goNext = () => navigateTo({ path: next.value || "" });
</script>

<template>
  <div class="main">
    <div class="controller" @click="goPrev" v-if="!!prev">
      <SvgoArrow />
    </div>
    <div class="page">
      <slot />
    </div>
    <div class="controller" @click="goNext" v-if="!!next">
      <SvgoArrow />
    </div>
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
  overflow: hidden;
  position: relative;

  .page {
    width: 100%;
    height: 100%;
    padding: 0 10px 20px 10px;
    overflow-y: auto;
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
