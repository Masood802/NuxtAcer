<template>
  <div class="mt-4 text-center">
    <h2 class="text-3xl font-bold my-6 py-2">PRODUCTS</h2>
    </div>
    <div class="grid grid-cols-3 gap-2 mx-auto">
      <div class="text-center hidd" v-for="product in store.products.slice(0,9)" :key="product.id">
        <img :src=product.image alt="" @click="store.showDetails(product.id)"
        class="max-w-72 mx-auto scale-100 hover:scale-105 transition-all duration-300 ease-in cursor-pointer">
        <h2 class="text-center font-bold text-2xl py-2 hover:text-lime-500 ">{{ product.title }}</h2>
        <p class="mx-auto text-center w-60 text-gray-500">Unleash speeds up to 5600 MHz 
          Elevate stability with On-Die ECC Power management IC (PMIC)
        </p>    
      </div>
    </div>
  <button class="flex items-center justify-center mx-auto w-48 uppercase border-2 border-gray-500 px-2 py-2 my-16 rounded-md hover:bg-lime-500 hover:border-lime-500 hover:text-white transition-all duration-500 ease-linear">
  <NuxtLink to="/products"> Explore Products</NuxtLink>
  </button>
</template>

<script setup>
import { useProductStore } from '~/stores/productStore';
const store = useProductStore();
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
                entries.forEach((entery) => {
                    if (entery.isIntersecting) {
                        entery.target.classList.add('show')
                    }
                    else
                    {
                        entery.target.classList.remove('show')
                    }
                });
    });
    const hiddenElements = document.querySelectorAll('.hidd');
    hiddenElements.forEach((el) => observer.observe(el)); 
})
</script>

<style scoped>
.hidd{
    opacity: 0;
    transform: translateX(-100%);
    transition: all 2s;
}
.show{
    opacity:1;
    transform: translateX(0);
}
</style>

    