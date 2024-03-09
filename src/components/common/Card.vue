<script setup lang="ts">
interface CommonCardProps {
  title: string;
}
const {
  title,
} = withDefaults(defineProps<CommonCardProps>(), {});

</script>

<template>
  <div class="card-wrapper">
    <div class="px-6 py-2 text-lg border-b flex items-end font-semibold">
      {{ title }}
    </div>
    <div class="p-6">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  @apply rounded-lg flex flex-col border bg-white w-full;
}
</style>