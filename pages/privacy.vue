<template>
    <div class="main">
        <div class="load">L</div>
        <div class="load">O</div>
        <div class="load">A</div>
        <div class="load">D</div>
        <div class="load">I</div>
        <div class="load">N</div>
        <div class="load">G</div>
    </div>
    <div>
        
    </div>
</template>

<script setup>

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
.load:nth-child(1){
animation-delay: .2s;
}
.load:nth-child(2){
animation-delay: .4s;
}
.load:nth-child(3){
animation-delay: .6s;
}
.load:nth-child(4){
animation-delay: .8s;
}
.load:nth-child(5){
animation-delay: 1s;
}
.load:nth-child(6){
animation-delay: 1.2s;
}
.load:nth-child(7){
animation-delay: 1.4s;
}
</style>