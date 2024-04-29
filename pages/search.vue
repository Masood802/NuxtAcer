<template>
    <div class="main">
        <div class="load">S</div>
        <div class="load">E</div>
        <div class="load">A</div>
        <div class="load">R</div>
        <div class="load">C</div>
        <div class="load">H</div>
    </div>
    <div v-for="item in store.filteredlist" :key="item.id" class="flex flex-col gap-3">
        <div>{{ item.title }}</div>
    </div>
    <div v-if="store.filteredlist.length===0">
        <h2 class="text-3xl text-center">NO DATA FOUND</h2>
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