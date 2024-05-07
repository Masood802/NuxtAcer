<script setup>
let images = ref([
  "/FA200.jpg",
  "/MA200.jpg",
  "/UD200-SD200.jpg",
]);
let i = ref(0);
onMounted(() => {
  setInterval(() => {
    i.value = i.value + 1;
    if(i.value===1){
      document.getElementById('div1').style.width='48px'
      document.getElementById('div1').style.transition='width 4.5s linear'
      document.getElementById('div3').style.width='0px'
      document.getElementById('div3').style.transition='none'
    }
    else if(i.value===2){
      document.getElementById('div2').style.width='48px'
      document.getElementById('div2').style.transition='width 4.5s linear'
      document.getElementById('div1').style.width='0px'
      document.getElementById('div1').style.transition='none'
    }
    else if(i.value===3){
      document.getElementById('div3').style.width='48px'
      document.getElementById('div3').style.transition='width 4.5s linear'
      document.getElementById('div2').style.width='0px'
      document.getElementById('div2').style.transition='none'
    }
    if (i.value === 3) {
      i.value = 0;
      console.log('0')
    }
  }, 5000);
});
</script>
<template>
  <div class="my-10 relative">
      <img :src="images[i]" alt="" class="" />
      <div class="absolute bg-zinc-500 w-12 h-[3px] left-[42%] bottom-3 z-30">
        <span id="div1" class="absolute bottom-0 w-0 bg-white h-[3px] z-40 "></span>
      </div>
      <div class="absolute bg-zinc-500 w-12 h-[3px] left-[46%] bottom-3 z-30 ">
        <span id="div2" class="absolute bottom-0 w-0 bg-white h-[3px] z-40 "></span>
      </div>
      <div class="absolute bg-zinc-500 w-12 h-[3px] left-[50%] bottom-3 z-30 ">
        <span id="div3" class="absolute bottom-0 w-0 bg-white h-[3px] z-40 "></span>
      </div>

  </div>
</template>