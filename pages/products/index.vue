<template>
  <div class="flex mt-10">
    <img src="/1920x460.jpg" alt="" class="mt-4">
  </div>
  <div class="text-md flex items-center py-4 mx-4">
    <NuxtLink to="/" class="mr-1 hover:text-lime-500">HOME</NuxtLink>/ 
    <NuxtLink to="/products" class="mx-1  hover:text-lime-500">PRODUCTS</NuxtLink>
  </div>
<div class="flex items-center w-full h-40 bg-zinc-200">
  <label for="products" class="uppercase ml-4">Product Type:</label>
  <select name="products" id="prd" v-model="store.selectedType" @change="showItems()" >
    <option value="ALL" class="py-2" selected>ALL</option>
    <option value="PCIe M.2 SSD">PCIe M.2 SSD</option>
    <option value="SATA 2.5 SSD">SATA 2.5 SSD</option>
    <option value="SATA M.2 SSD">SATA M.2 SSD</option>
    <option value="Memory">Memory</option>
    <option value="Memory Card">Memory Card</option>
    <option value="USB Flash Drive">USB Flash Drive</option>
  </select>
</div>
<div class="grid grid-cols-3 gap-2 mx-auto hidd">
      <div class="text-center" v-for="product in newitems" :key="product.id">
        <img :src=product.image alt="" @click="store.showDetails(product.id)"
        class="max-w-52 mx-auto scale-100 hover:scale-105 transition-all duration-300 ease-in cursor-pointer">
        <h2 class="text-center font-bold text-lg py-2 hover:text-lime-500 ">{{ product.title }}</h2> 
      </div>
    </div>
</template>

<script setup>
const types = ['ALL','PCIe M.2 SSD','SATA 2.5 SSD','SATA M.2 SSD','Memory','Memory Card','USB Flash Drive']
onMounted(()=>{
  newitems.value = store.products;
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
import { useProductStore } from '~/stores/productStore';
const newitems = ref([]);
const router = useRouter();
const store = useProductStore();
function showItems() {
  newitems.value = store.products.filter((item) => item.type === store.selectedType)
  if (store.selectedType === 'ALL') {
    newitems.value=store.products
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
.hidd{
    opacity: 0;
    transform: translateX(-100%);
    transition: all 2s;
}
.show{
    transform: translateX(0);
    opacity: 1;
}
.hidd:nth-child(2){
 transition-delay: 200ms; 
}
.hidd:nth-child(3){
  transition-delay: 400ms;
}
.hidd:nth-child(4){
  transition-delay: 600ms;
}
</style>
