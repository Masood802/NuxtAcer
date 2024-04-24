<script setup>
let images = ref([
  "http://localhost:3000/_nuxt/assets/images/FA200.jpg",
  "http://localhost:3000/_nuxt/assets/images/MA200.jpg",
  "http://localhost:3000/_nuxt/assets/images/FA200.jpg",
]);
let i = ref(0);
onMounted(() => {
  setInterval(() => {
    i.value = i.value + 1;
    if (i.value == 3) {
      i.value = 0;
    }
  }, 5000);
});
</script>
<template>
  <div
    class=""
  >
      <img :src="images[i]" alt="" class="" />
  </div>
</template>