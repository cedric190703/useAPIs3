<template>
    <div>
        <h1> {{ number }} </h1>
        <slot name="color1"></slot>
        <slot name="color2"></slot>
        <slot name="color3"></slot>
        <!-- <canvas width="150px" ref="myCanvas" height="200px" style="border: 1px solid #D3D3D3"></canvas> -->
    </div>
</template>
<script setup>
import { ref } from 'vue'


const number = ref(0);
        // const myCanvas = ref(null);
        // const props = defineProps({
        //     color: {
        //         type: String
        //     }
        // });

        // onMounted(() => {
        //     const getIdContext5 = myCanvas.value.getContext('2d');
        //     getIdContext5.fillStyle = '#002153';
        //     getIdContext5.fillRect(0,0,50,100);   
        //     getIdContext5.fillStyle = '#ffffff';
        //     getIdContext5.fillRect(50,0,50,100);   
        //     getIdContext5.fillStyle = '#cf0921';
        //     getIdContext5.fillRect(100,0,50,100);
        // });
</script>
<style lang="">
    
</style>