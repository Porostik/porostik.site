<script setup lang="ts">
type Props = {
  type: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "xl";
};

const { type, size } = defineProps<Props>();

const classObj = reactive({
  [`text--${type}`]: type,
  [`text--${size}`]: size,
});
</script>

<template>
  <span class="text" :class="classObj">
    <slot />
  </span>
</template>

<styles lang="scss">
.text {
  font-family: var(--font);

  &--primary {
    color: var(--secondary);
  }

  &--secondary {
    color: var(--primary);
    background-color: var(--secondary);
    padding: 10px;
  }

  &--sm {
    font-size: 12px;
  }

  &--md {
    font-size: 14px;
  }

  &--lg {
    font-size: 16px;
  }

  &--xl {
    font-size: 18px;
  }
}
</styles>
