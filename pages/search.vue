<template>
    <div class="main">
        <div class="load">S</div>
        <div class="load">E</div>
        <div class="load">A</div>
        <div class="load">R</div>
        <div class="load">C</div>
        <div class="load">H</div>
    </div>
    <div class="flex items-center relative group w-[30%] mt-32 justify-center mx-auto mb-4">
      <input type="text" placeholder="search" v-model="store.searchInput"
      class="shadow-md border border-zinc-100 px-8 py-3 outline-none rounded-l-md">
     <i class="material-icons text-gray-200 bg-lime-600 text-4xl cursor-pointer absolute right-6 px-3 py-1 rounded-r-md" @click="searchItem(store.searchInput)">search</i>
    </div>
    <div v-for="item in store.filteredlist" :key="item.id" 
    class="flex flex-col text-lg text-left font-bold py-2 px-4 my-2 text-lime-600 border-t w-[80%] mx-auto">
        <div @click="store.showDetails(item.id)" class="hover:text-lime-800 cursor-pointer">{{ item.title }} - <span class="text-base font-semibold">({{item.type  }})</span></div>
    </div>
    <div v-if="store.filteredlist.length===0">
        <h1 class="text-4xl text-red-800 text-center my-4">Oooops.....</h1>
        <h2 class="text-3xl text-center text-lime-600 py-2">NO DATA FOUND</h2>
    </div>
</template> 

<script setup>
import { useProductStore } from '~/stores/productStore';
const store = useProductStore();
</script>

<style scoped>
.main{
    display:flex;
    align-items: center;
   margin:60px auto;
   justify-content: center;
   padding-top: 60px;
   text-align: center;
}
.load{
    display: flex;
    align-items: center;
    justify-content: center;
    width:50px;
    height: 50px;
    background: coral;
    border-radius: 50%;
    color:white;
    margin:2px;
    text-align: center;
    font-weight: bold;
    animation: animate 1.5s alternate infinite;
}
@keyframes animate{
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-30px);
    }
    100%{
        transform: translateY(0px)
    }
  
}
.load:nth-child(2){
animation-delay: .2s;
}
.load:nth-child(3){
animation-delay: .4s;
}
.load:nth-child(4){
animation-delay: .6s;
}
.load:nth-child(5){
animation-delay: .8s;
}
.load:nth-child(6){
animation-delay: 1.0s;
}

</style>