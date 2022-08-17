<template>
    <div>
        <canvas width="150px" ref="myCanvas" height="200px" style="border: 1px solid #D3D3D3"></canvas>
    </div>
</template>
<script>
import { ref, onMounted,defineProps } from 'vue'

export default {
    setup() {
        const myCanvas = ref(null);
        const props = defineProps({
            color: {
                type: String
            }
        });

        onMounted(() => {
            const getIdContext5 = myCanvas.value.getContext('2d');
            getIdContext5.fillStyle = '#002153';
            getIdContext5.fillRect(0,0,50,100);   
            getIdContext5.fillStyle = '#ffffff';
            getIdContext5.fillRect(50,0,50,100);   
            getIdContext5.fillStyle = '#cf0921';
            getIdContext5.fillRect(100,0,50,100);
        });

        return {
            myCanvas,
            props
        }
    }
}
</script>
<style lang="">
    
</style>