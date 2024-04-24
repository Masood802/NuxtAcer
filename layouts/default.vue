<template>
    <header class="w-screen flex justify-between border-b-2 border-gray-300 p-3 fixed top-0 bg-white">
    <div class="flex">
      <NuxtLink to="/" class="flex">
              <img src="../assets/images/Acer-Logo.png" alt="acer-logo" class="mx-2 max-w-16" />
               <span class="text-xl border-l-4 mx-2 px-2 text-gray-500">OFFICAIL <br />LICENSEE</span>
      </NuxtLink>
    </div>
    <div class="flex gap-8 items-center text-[#5e5e58] text-xl">
          <NuxtLink to="/products" class="mx-6">PRODUCTS</NuxtLink>
          <NuxtLink to="/about" class="mx-6">ABOUT</NuxtLink>
          <NuxtLink to="/support" class="mx-6">SUPPORT</NuxtLink>
    </div>
    <div class="flex items-center relative group w-[30%]">
      <input type="search" placeholder="search" 
      class="rounded-md outline-none border w-0 opacity-0 px-1 py-1 absolute right-1 bg-gray-200  group-hover:w-72 group-hover:opacity-100 transition-all ease-linear duration-500">
      <i class="material-icons text-gray-400 text-3xl cursor-pointer absolute right-3">search</i>
    </div>
    </header>
   <slot />
   <footer>
    <div class="w-full h-[450px] bg-[#575757] flex justify-between">
      <div class="flex gap-8 text-[#c5c5bc] mx-6 my-16 ">
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
          
          <input type="email" name="email" placeholder="Your email address" class=" bg-[#9e9c9c85] h-11 px-2 border-none outline-none my-4 text-sm ">
          <label for="email" class="bg-[#202020] py-[11px] px-2 text-md">SIGN ME UP</label>
          
          
      </div>
      
    </div>
    <div class="w-full h-[200px] bg-[#202020]">
      <div class="flex gap-8 mx-6 py-8 border-b border-zinc-500 text-zinc-500"> 
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
        <NuxtLink to="/about">Contact Us</NuxtLink>
      </div>
      <div class="py-6 mx-6 text-zinc-500 text-sm">
        <p>Copyright © 2023 BIWIN Storage. All Rights Reserved.<br>
          The Acer trademarks are licensed to BIWIN Semiconductor (HK) Co, Ltd. by Acer Incorporated. </p>
      </div>
    </div>
   </footer>
</template>

<script setup>

</script>

<style scoped>
li{
  margin:20px 24px;
  color:#f7f1f159
}
.router-link-exact-active{
  color:black;
}
</style>