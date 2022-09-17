<script setup lang="ts">
  import DocumentationIcon from "./icons/IconDocumentation.vue";
  import { ref} from 'vue'
  
  const props = defineProps(['count']);

  const count = ref(parseInt(props.count) ?? 0);

  function increment() {
    count.value++;
  }
</script>

<template>
  <div class="container">
    <div>
      <h1>Counter</h1>
    </div>
    <DocumentationIcon />
    <div class="counter">
      <button @click="increment">
        Count is: {{ count }} 
      </button>
    </div>
  </div>
  
</template>

<style scoped>

  .container {
    overflow: auto;
  }
  .counter h1,
  .counter h3 {
    text-align: center;
    float:right
  }

  @media (min-width: 1024px) {
    .counter h1,
    .counter h3 {
      text-align: left;
    }
  }
</style>
