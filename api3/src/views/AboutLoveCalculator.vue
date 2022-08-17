<template>
  <div class="love">
    <label for="first">First name</label>
    <input type="text" name="first" v-model="nameOne">
    <label for="second">Second name</label>
    <input type="text" name="second" v-model="nameTwo">
    <button @click="calculate()">Calculate</button>
    <div class="res">
      <h1 :style="percentage > 50 ? {'color': 'green'} : {'color': 'red'}">
        {{ percentage }}%
      </h1>
      <h2>
        "{{ comment }}"
      </h2>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  name: "LoveCalculator",
  setup() {
    const nameOne = ref('');
    const nameTwo = ref('');
    const percentage = ref(0);
    const comment = ref('');

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5934783686msh316615d9911f1c4p1ca3a6jsnae06a74464de',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };

    const calculate = () => {
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${nameOne.value}&fname=${nameTwo.value}`, options)
            .then(response => response.json())
            .then(json => {
              percentage.value = json.percentage;
              comment.value = json.result;
            })
            .catch(err => console.error(err));
    }

    return {
      nameOne,
      nameTwo,
      options,
      calculate,
      percentage,
      comment
    }
  }
}
</script>
<style scoped>
  
</style>