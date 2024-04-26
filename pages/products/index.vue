<template>
  <div class="flex mt-10">
    <img src="../../assets/images/1920x460.jpg" alt="" class="mt-4">
  </div>
  <div class="text-md flex items-center py-4 mx-4">
    <NuxtLink to="/" class="mr-1 hover:text-lime-500">HOME</NuxtLink>/ 
    <NuxtLink to="/products" class="mx-1  hover:text-lime-500">PRODUCTS</NuxtLink>
  </div>
<div class="flex items-center w-full h-40 bg-zinc-200">
  <label for="products" class="uppercase ml-4">Product Type:</label>
  <select name="products" id="prd" class="mx-2 bg-white shadow-lg px-2 py-1 w-44 ">
    <option value="ALL" class="py-1">ALL</option>
    <option value="">SATA 2.5 SSD</option>
    <option value="">SATA 2.5 SSD</option>
    <option value="">Memory</option>
    <option value="">Memory Card</option>
    <option value="">USB Flash Drive</option>
  </select>
</div>
<div class="grid grid-cols-3 grid-rows-7">
  <div>
    <img src="../../assets/images/prd-4.jpg" alt="">
    <h2>Acer MA200 NVMe SSD</h2>
  </div>
  <div>
    <img src="../../assets/images/prd-4.jpg" alt="">
    <h2>Acer MA200 NVMe SSD</h2>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped></style>
