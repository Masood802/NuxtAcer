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
  <select name="products" id="prd" v-model="store.selectedType" onselect="showItems()" >
    <option value="ALL" class="py-2">ALL</option>
    <option value="PCIe M.2 SSD">PCIe M.2 SSD</option>
    <option value="SATA 2.5 SSD">SATA 2.5 SSD</option>
    <option value="SATA M.2 SSD">SATA 2 SSD</option>
    <option value="Memory">Memory</option>
    <option value="Memory Card">Memory Card</option>
    <option value="USB Flash Drive">USB Flash Drive</option>
  </select>
</div>
<div class="grid grid-cols-3 grid-rows-4 mx-auto my-10">
  <div v-for="product in store.products" :key="product.id">
    <img :src=product.image alt=""
    class="max-w-52 mx-auto scale-100 hover:scale-105 transition-all duration-300 ease-in">
    <h2 class="text-center font-semibold text-lg py-2 hover:text-lime-500">{{product.title}}</h2>
  </div>
  
</div>
</template>

<script setup>
import { useProductStore } from '~/stores/productStore';

const store = useProductStore()
function showItems() {
  if (store.selectedType === 'Memory') {
    store.products.filter((item)=>item.type!=store.selectedType)
  }
}
</script> 

<style scoped>
select {
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  background-color: #d7cece; /* Fallback color if gradients are not supported */
  background-image: url(../images/select-arrow.png), -webkit-linear-gradient(top, #E5E5E5, #F4F4F4); /* For Chrome and Safari */
  background-image: url(../images/select-arrow.png), -moz-linear-gradient(top, #E5E5E5, #F4F4F4); /* For old Firefox (3.6 to 15) */
  background-image: url(../images/select-arrow.png), -ms-linear-gradient(top, #E5E5E5, #F4F4F4); /* For pre-releases of Internet Explorer  10*/
  background-image: url(../images/select-arrow.png), -o-linear-gradient(top, #E5E5E5, #F4F4F4); /* For old Opera (11.1 to 12.0) */
  background-image: url(../images/select-arrow.png), linear-gradient(to bottom, #E5E5E5, #F4F4F4); /* Standard syntax; must be last */
  background-position: center right;
  background-repeat: no-repeat;
  border: 1px solid #e3dada;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #141313dc;
  font-size: inherit;
  margin: 2px 4px;
  overflow: hidden;
  padding: 2px 20px ;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
