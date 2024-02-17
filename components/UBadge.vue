<template>
  <div class="badge">
    <UText type="primary" size="md">
      <slot />
    </UText>
  </div>
</template>

<style>
.badge {
  box-shadow: var(--shadow);
  padding: 8px;
  border: 1px dashed var(--secondary);
}
</style>
