<template>
    <div class="w-full mt-16 bg-[url('/news.jpg')] bg-center bg-cover h-72 mb-20"></div>
    <div class="grid grid-cols-3 gap-2 mt-40 w-[90%] mx-auto mb-32">
        <div class="imagediv group hidd">
            <img src="/1news.jpg" alt=""
             class="scale-100 group-hover:scale-105 transition-all duration-400 ease-in ">
            <h2 class="text-lg text-left mx-6 my-4 group-hover:text-lime-500">Acer FA200 SSD: Elevate Your Digital Experience</h2>
            <p class="text-sm text-left mx-6 my-2">Acer FA200 SSD brings faster read and write speeds -<br> 
                7200 MB/s and 6200 MB/s -
                providing a superior <br>experience for users.</p>
        </div>
        <div class="imagediv group hidd">
            <img src="/2news.jpg" alt="" 
            class="scale-100 group-hover:scale-105 transition-all duration-400 ease-in">
            <h2 class="text-lg text-left mx-6 my-4 truncate max-w-[75%] group-hover:text-lime-500">Acer Extends Its High-<br>
                performance SD Memory Card Lineup with New MSC300</h2>
            <p class="text-sm text-left mx-6 my-2">Featuring fast read and write 
                speeds of up to 160 MB/s and 120 MB/s respectively, Acer MSC300 MicroSD 
                card enhances your mobile experience on your smartphone, </p>
        </div>
        <div class="imagediv group hidd">
            <img src="/3news.jpg" alt="" 
            class="scale-100 group-hover:scale-105 transition-all duration-400 ease-in ">
            <h2 class="text-lg text-left mx-6 my-4 truncate group-hover:text-lime-500">Acer Unveils New SC300 High-<br>speed SD Card Optimized For 4K Videos Shooting</h2>
            <p class="text-sm text-left mx-6 my-2">Acer FA200 SSD brings faster read and write speeds -<br> 
                7200 MB/s and 6200 MB/s -
                providing a superior <br>experience for users.</p>
        </div>
        <div class="imagediv group hidd">
            <img src="/news4.jpg" alt=""
             class="scale-100 group-hover:scale-105 transition-all duration-400 ease-in ">
            <h2 class="text-lg text-left mx-6 my-4 group-hover:text-lime-500">Acer FA200 SSD: Elevate Your Digital Experience</h2>
            <p class="text-sm text-left mx-6 my-2">Acer FA200 SSD brings faster read and write speeds -<br> 
                7200 MB/s and 6200 MB/s -
                providing a superior <br>experience for users.</p>
        </div>
        <div class="imagediv group hidd">
            <img src="/news5.jpg" alt="" 
            class="scale-100 group-hover:scale-105 transition-all duration-400 ease-in">
            <h2 class="text-lg text-left mx-6 my-4 truncate max-w-[75%] group-hover:text-lime-500">Acer Extends Its High-<br>
                performance SD Memory Card Lineup with New MSC300</h2>
            <p class="text-sm text-left mx-6 my-2">Featuring fast read and write 
                speeds of up to 160 MB/s and 120 MB/s respectively, Acer MSC300 MicroSD 
                card enhances your mobile experience on your smartphone, </p>
        </div>
        <div class="imagediv group hidd">
            <img src="/news6.jpg" alt="" 
            class="scale-100 group-hover:scale-105 transition-all duration-400 ease-in ">
            <h2 class="text-lg text-left mx-6 my-4 truncate group-hover:text-lime-500">Acer Unveils New SC300 High-<br>speed SD Card Optimized For 4K Videos Shooting</h2>
            <p class="text-sm text-left mx-6 my-2">Acer FA200 SSD brings faster read and write speeds -<br> 
                7200 MB/s and 6200 MB/s -
                providing a superior <br>experience for users.</p>
        </div>
        <div class="imagediv group hidd">
            <img src="/news7.jpg" alt="" 
            class="scale-100 group-hover:scale-105 transition-all duration-400 ease-in">
            <h2 class="text-lg text-left mx-6 my-4 truncate max-w-[75%] group-hover:text-lime-500">Acer Extends Its High-<br>
                performance SD Memory Card Lineup with New MSC300</h2>
            <p class="text-sm text-left mx-6 my-2">Featuring fast read and write 
                speeds of up to 160 MB/s and 120 MB/s respectively, Acer MSC300 MicroSD 
                card enhances your mobile experience on your smartphone, </p>
        </div>
        <div class="imagediv group hidd">
            <img src="/news8.jpg" alt="" 
            class="scale-100 group-hover:scale-105 transition-all duration-400 ease-in ">
            <h2 class="text-lg text-left mx-6 my-4 truncate group-hover:text-lime-500">Acer Unveils New SC300 High-<br>speed SD Card Optimized For 4K Videos Shooting</h2>
            <p class="text-sm text-left mx-6 my-2 pb-2">Acer FA200 SSD brings faster read and write speeds -<br> 
                7200 MB/s and 6200 MB/s -
                providing a superior <br>experience for users.</p>
        </div>
    </div>
</template>

<script setup>
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