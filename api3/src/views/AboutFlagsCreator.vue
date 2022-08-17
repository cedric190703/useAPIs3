<template>
  <div class="home">
    <h1>Create your own flag</h1>
    <div class="colors">
      <select name="fruit" v-model="type">
      <option value ="Vertical tricolor">Vertical tricolor</option>
      <option value ="Horizontal tricolor">Horizontal tricolor</option>
      <option value ="Nordic cross">Nordic cross</option>
      <option value ="Scandinavian cross">Scandinavian cross</option>
      <option value ="Saltire bicolor">Saltire bicolor</option>
      </select> 
      <label for="color1">color1</label>
      <input type="color" @change="changeColor(1)" v-model="color1" name="color1">
      <label for="color2">color2</label>
      <input type="color" @change="changeColor(2)" v-model="color2" name="color2">
      <label for="color3">color3</label>
      <input type="color" @change="changeColor(3)" v-model="color3" name="color3">
    </div>
    <div class="element">
      <canvas id="flag-france" width="150px" height="100px" style="border: 1px solid #D3D3D3"></canvas>    </div>
    <div class="download">
      <button @click="download()">Download the flag</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {horizontalTricolor} from '../components/HorizontalTricolor.vue'
import {nordicCross} from '../components/NordicCross.vue'
import {saltireBicolor} from '../components/SaltireBicolor.vue'
import {scandinavianCross} from '../components/ScandinavianCross.vue'
import {verticalTricolor} from '../components/VerticalTricolor.vue'

export default {
  name: 'HomeView',
  components: {horizontalTricolor,nordicCross,saltireBicolor,scandinavianCross,verticalTricolor},
  setup() {
    const color1 = ref('');
    const color2 = ref('');
    const color3 = ref('');
    const type = ref('');

    const download = () => {

    };

    return {
      color1,
      color2,
      color3,
      type,
      download
    }
  }
}
</script>

<style scoped>
  input {
    margin: 2%;
    width: 10%;
    height: 50px;
  }

  .element {
    height: 500px;
  }
</style>