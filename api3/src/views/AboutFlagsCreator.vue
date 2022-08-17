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
      <HorizontalTricolor>
        <template v-slot:color1>
          <h1> {{ color1 }} </h1>
        </template>
        <template v-slot:color2>
          <h1> {{ color2 }} </h1>
        </template>
        <template v-slot:color3>
          <h1> {{ color3 }} </h1>
        </template>
      </HorizontalTricolor>
      <NordicCross>
      </NordicCross>
      <SaltireBicolor />
      <ScandinavianCross />
      <VerticalTricolor />
    </div>
    <div class="download">
      <a download=""  href="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&amp;dl=Blastar.jpg&amp;fm=jpg"><button>Download</button></a>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import HorizontalTricolor from '../components/HorizontalTricolor.vue'
import NordicCross from '../components/NordicCross.vue'
import SaltireBicolor from '../components/SaltireBicolor.vue'
import ScandinavianCross from '../components/ScandinavianCross.vue'
import VerticalTricolor from '../components/VerticalTricolor.vue'

export default {
  name: 'HomeView',
  components: { 
    HorizontalTricolor, 
    NordicCross, 
    SaltireBicolor,
    ScandinavianCross,
    VerticalTricolor},
  setup() {
    const color1 = ref('#000000');
    const color2 = ref('#000000');
    const color3 = ref('#000000');
    const type = ref('Vertical tricolor');
    const image = ref('');
    const name = ref('Blastar');

    // const download = () => {
    //   fetch(image)
    //     .then(resp => resp.blob())
    //     .then(blobobject => {
    //         const blob = window.URL.createObjectURL(blobobject);
    //         const anchor = document.createElement('a');
    //         anchor.style.display = 'none';
    //         anchor.href = blob;
    //         anchor.download = name.value+'';
    //         document.body.appendChild(anchor);
    //         anchor.click();
    //         window.URL.revokeObjectURL(blob);
    //     })
    //     .catch(() => console.log('An error in downloadin gthe file sorry'));
    // };

    return {
      color1,
      color2,
      color3,
      type,
      // download,
      image,
      name
    }
  }
}
</script>

<style scoped>
  .home {
    color: white;
  }

  input {
    margin: 2%;
    width: 10%;
    height: 50px;
  }

  select {
    height: 30px;
    width: 10%;
    font-size: large;
    margin: 2%;
    border-radius: 8px;
    border: none;
  }

  button {
    width: 10%;
    height: 40px;
    border-radius: 10px;
    border: 2px solid black;
    background-color: white;
    font-size: large;
  }

  button:hover{
    background-color: black;
    color: white;
    border: 2px solid white;
  }
</style>