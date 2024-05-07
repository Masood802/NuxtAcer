<template>
<div class="w-80 mx-auto">
<USelect
                v-model="form.fruit"
                class="w-[80%] border mb-2 grid grid-cols-2"
                :options="fruits" />
                
           
                 
</div>
     
</template>

<script setup>
import USelect from 'nvd-u/components/USelect.vue'
const fruits = ['Apple', 'Mango', 'Grapes', 'Banana']
const form = reactive({
    fruit: '',
})

</script>

<style scoped>

</style>