<template>
    <div>
      <main>
        <slot />
      </main>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  
  export default defineComponent({
    name: "default"
  })
  </script>
  
  <style scoped lang="sass">
  
  </style>