<template>
    <header class="w-screen h-[72px] flex justify-between border-b pb-2 border-gray-300 fixed top-0 bg-white z-40 py-1 mb-20">
    <div class="flex">
      <NuxtLink to="/" class="flex items-center">
              <img src="../assets/images/Acer-Logo.png" alt="acer-logo" class="mx-6 max-w-16 h-12" />
               <span class=" border-l-2 mx-2 px-2 text-gray-500 text-sm leading-4 font-semibold">OFFICAIL <br />LICENSEE</span>
      </NuxtLink>
    </div>
    <div class="flex gap-8 items-center ">
          <div class="dropdown">
                <NuxtLink to="/products" class=" text-[#5e5e58]  hover:text-black z-50">PRODUCTS</NuxtLink>
                <div class="dropdown-list text-center left-[-50px]">
      
                    <div class="dmenu mt-6  bg-zinc-200 hover:bg-white" @mouseover="store.showItems('PCIe M.2 SSD')">PCIe M.2 SSD 
                    <div class="grid grid-cols-3 gap-2 bg-white z-50 w-[700px] absolute left-44 top-0">
                        <div v-for="product in store.filteredlist" :key="product.id"  class="" >
                              <img :src=product.image alt="" @click="store.showDetails(product.id)"
                               class="max-w-44 mx-auto scale-100 hover:scale-105 transition-all duration-300 ease-in cursor-pointer">
                              <h2 class="text-center font-semibold text-md py-2 hover:text-lime-500 cursor-pointer">{{product.title}}</h2>
                        </div>
                      </div>
                    </div>
                    <div class="dmenu py-4 bg-zinc-200 hover:bg-white " @mouseover="store.showItems('SATA 2.5 SSD')">SATA 2.5 SSD</div>
                    <div class="dmenu py-4 bg-zinc-200 hover:bg-white" @mouseover="store.showItems('SATA M.2 SSD')">SATA M.2 SSD</div>
                    <div class="dmenu py-4 bg-zinc-200 hover:bg-white" @mouseover="store.showItems('Memory')">Memory</div>
                    <div class="dmenu py-4 bg-zinc-200 hover:bg-white" @mouseover="store.showItems('Memory Card')">Memory Card</div>
                    <div class="dmenu py-4 bg-zinc-200 hover:bg-white" @mouseover="store.showItems('USB Flash Drive')">USB Flash Drive</div>  
                </div>
          </div>
          <div class="dropdown">
          <NuxtLink to="/support" class="mx-6 text-[#5e5e58]  hover:text-black">SUPPORT</NuxtLink>
          <div class="dropdown-list uppercase w-32 text-center z-50">
                  <NuxtLink to="/support" class="dmenu border-t mt-[23px] pt-2">CUSTOMER SUPPORT</NuxtLink>
                  <NuxtLink to="/about" class="dmenu">MANUALS & TOOLS</NuxtLink>
                  <NuxtLink to="/about" class="dmenu">WARRANTY POLICY</NuxtLink>
                  <NuxtLink to="/about" class="dmenu">Acronis Download</NuxtLink>
                  <NuxtLink to="/about" class="dmenu">FAQs</NuxtLink>
                </div>
          </div>
          <div class="dropdown">
                <NuxtLink to="/about" class="mx-6 text-[#5e5e58]  hover:text-black">ABOUT</NuxtLink>
                <div class="dropdown-list uppercase w-32 text-center z-50">
                  <NuxtLink to="/about" class=" dmenu border-t mt-[23px] pt-2">Acer Storage</NuxtLink>
                  <NuxtLink to="/news" class="dmenu">News</NuxtLink>
                  <NuxtLink to="#" class="dmenu">reviews</NuxtLink>
                  <NuxtLink to="/support" class="dmenu">contact us</NuxtLink>
                </div>
          </div>
          
    </div>
    <div class="flex items-center relative group w-[30%]">
      <input type="text" placeholder="search" v-model="store.searchInput" @input="changeopacity"
      class="rounded-md outline-none border w-0 opacity-0 px-1 py-1 absolute right-4 bg-gray-200  group-hover:w-72 group-hover:opacity-100 transition-all ease-linear duration-500">
     <i class="material-icons text-gray-400 text-3xl cursor-pointer absolute right-6" @click="store.searchItem(store.searchInput)">search</i>
    </div>
    </header>
   <slot />
   <footer>
    <div class="w-full h-[450px] bg-[#575757] flex justify-between">
      <div class="flex gap-8 uppercase text-[#e8e8e3] mx-6 my-16 ">
      <div>
        <ul>
            <NuxtLink to="/products" class="mx-6 text-xl">PRODUCTS</NuxtLink>
            <li>PCIe M.2 SSD</li>
            <li>SATA 2.5 SSD</li>
            <li>SATA M.2 SSD</li>
            <li>Memory</li>
            <li>Memory Card</li>
            <li>USB Flash Drive</li>
        </ul>
                  </div>
                  <div>
         <ul>
            <NuxtLink to="/support" class="mx-6 text-xl">SUPPORT</NuxtLink>
            <li>CUSTOMER SUPPORT</li>
            <li>MANUALS & TOOLS</li>
            <li>WARRANTY POLICY</li>
            <li>Acronis Download</li>
            <li>FAQ </li>
        </ul>
            
      </div>
      <div>
        <ul>
             <NuxtLink to="/about" class="mx-6 text-xl">ABOUT</NuxtLink>
            <li>ACER STORAGE</li>
            <li>NEWS</li>
            
        </ul>
           
      </div>
      
      
    </div>
      <div class=" text-[#e4e4de] my-16 mx-6">
          <h2 class="text-lg">Access our news, exclusive deals</h2>
          
          <input type="email" id="email" name="email" v-model="email" 
          placeholder="Your email address" 
          class=" bg-[#9e9c9c85] h-11 px-2 border-none outline-none my-4 text-sm focus-within:text-white ">
          <button @click="showAlert" class="bg-[#202020] py-[11px] px-2 text-md">SIGN ME UP
          </button>
          
      </div>
      
    </div>
    <div class="w-full h-[200px] bg-[#202020]">
      <div class="flex gap-8 mx-6 py-8 border-b border-zinc-500 text-zinc-500"> 
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
        <NuxtLink to="/support">Contact Us</NuxtLink>
      </div>
      <div class="py-6 mx-6 text-zinc-500 text-sm">
        <p>Copyright © 2023 BIWIN Storage. All Rights Reserved.<br>
          The Acer trademarks are licensed to BIWIN Semiconductor (HK) Co, Ltd. by Acer Incorporated. </p>
      </div>
    </div>
   </footer>
</template>

<script setup>
import { useProductStore } from '~/stores/productStore';
const store = useProductStore();
let email = ref('')
const router = useRouter();
function showAlert() {
  if (email.value === '') {
    document.getElementById('email').style.color = 'red'
    document.getElementById('email').value = 'Please Enter Valid email'
  }
  else {
    document.getElementById('email').style.color = 'white'
    alert('Thank You! Your form has been submitted')
    email.value = ''
  } 
}
</script>

<style scoped>
li{
  margin:20px 24px;
  color:#e8e2e259;
  
}
li:hover{
  color:#e8e8e3;
}
.router-link-exact-active{
  color:black;
}
.dropdown{
  display:inline-block;
  position:relative;
}
.dropdown-list{
  display: none;
  justify-content: center;
  flex-direction: column;
  position:absolute;
  background:white;
  min-width:180px;
}
.dropdown-list a{
  display: block;
}
.dropdown:hover .dropdown-list{
  display:block;
}
</style>