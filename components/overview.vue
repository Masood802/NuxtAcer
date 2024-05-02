<template>
    <div class="flex mt-40 w-[90%] mx-auto mb-32 justify-center items-center">
        <div class="hidd">
            <img src="../assets/images/1news.jpg" alt="" class="mx-2 w-[80%]">
        </div>
        <div class="hidd">
            <img src="../assets/images/2news.jpg" alt="" class="mx-2 w-[80%]">
        </div>
        <div class="hidd">
            <img src="../assets/images/3news.jpg" alt="" class="mx-2 w-[80%]">
        </div>
        </div>
</template>

<script setup>
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
                entries.forEach((entery) => {
                    console.log(entery)
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