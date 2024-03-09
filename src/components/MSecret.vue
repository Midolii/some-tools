<script setup lang="ts">
import { getParams, getAllParams } from '@utils/getParams';
import Card from '@components/common/Card.vue';
const token = getParams('token');
console.log(getAllParams());
</script>

<template>
  <div class="w-full h-full flex items-start justify-center pt-[25%]">
    <Card title="内容">
      <div class="min-h-32 h-32">
        <span class="">
          Token:
        </span>
        {{ token }}
      </div>
    </Card>
  </div>
</template>

<style scoped></style>