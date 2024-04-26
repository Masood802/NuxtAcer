<template>
    <header class="w-screen flex justify-between border-b-2 border-gray-300  fixed top-0 bg-white z-50 py-1">
    <div class="flex">
      <NuxtLink to="/" class="flex items-center">
              <img src="../assets/images/Acer-Logo.png" alt="acer-logo" class="mx-6 w-16 h-12" />
               <span class="text-md border-l-2 mx-2 px-2 text-gray-500">OFFICAIL <br />LICENSEE</span>
      </NuxtLink>
    </div>
    <div class="flex gap-8 items-center ">
          <div class="group relative z-50">
                <NuxtLink to="/products" class=" text-[#5e5e58] text-xl hover:text-black z-50">PRODUCTS</NuxtLink>
                <div class=" absolute top-[45px] left-[-30px] hidden z-0 bg-white w-[800px] h-auto  group-hover:h-[250px]  group-hover:block transition-all duration-500 ease-in">
                  <div class="text-green-700 block">PCIe M.2 SSD</div>
                  <li>SATA 2.5 SSD</li>
                  <li>SATA M.2 SSD</li>
                  <li>Memory</li>
                  <li>Memory Card</li>
                  <li>USB Flash Drive</li>
                </div>
          </div>
          <NuxtLink to="/about" class="mx-6 text-[#5e5e58] text-xl hover:text-black">ABOUT</NuxtLink>
          <NuxtLink to="/support" class="mx-6 text-[#5e5e58] text-xl hover:text-black">SUPPORT</NuxtLink>
    </div>
    <div class="flex items-center relative group w-[30%]">
      <input type="search" placeholder="search" 
      class="rounded-md outline-none border w-0 opacity-0 px-1 py-1 absolute right-4 bg-gray-200  group-hover:w-72 group-hover:opacity-100 transition-all ease-linear duration-500">
      <i class="material-icons text-gray-400 text-3xl cursor-pointer absolute right-6">search</i>
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
let email=ref('')
function showAlert() {
  if (email.value === '') {
    document.getElementById('email').style.color='red'
    document.getElementById('email').value='Please Enter Valid email'
  }
  else {
    document.getElementById('email').style.color = 'white'
    alert('Thank You! Your form has been submitted')
    email.value=''
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

</style>