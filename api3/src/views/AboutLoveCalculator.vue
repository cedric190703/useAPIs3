<template>
  <div class="love">
    <div class="firstName">
      <label for="first">First name</label>
      <input type="text" name="first" v-model="nameOne" @keyup="cal = false">
    </div>
    <div class="secondName">
      <label for="second">Second name</label>
      <input type="text" name="second" v-model="nameTwo" @keyup="cal = false">
    </div>
    <button @click="calculate()">Calculate</button>
    <content-loader
        viewBox="0 0 400 160"
        :speed="1.5"
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        id="content"
        v-if="!cal">
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
        <circle cx="20" cy="20" r="20" />
    </content-loader>
    <div class="res" v-else>
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
import { ContentLoader } from 'vue-content-loader'

export default {
  name: "LoveCalculator",
  components: {
    ContentLoader
  },
  setup() {
    const nameOne = ref('');
    const nameTwo = ref('');
    const percentage = ref(0);
    const comment = ref('');
    const cal = ref(false);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5934783686msh316615d9911f1c4p1ca3a6jsnae06a74464de',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };

    const calculate = () => {
      if(nameOne.value !== '' && nameTwo.value !== '') {
          cal.value = true;
          fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${nameOne.value}&fname=${nameTwo.value}`, options)
            .then(response => response.json())
            .then(json => {
              percentage.value = json.percentage;
              comment.value = json.result;
            })
            .catch(err => console.error(err));
      }
    }

    return {
      nameOne,
      nameTwo,
      options,
      calculate,
      percentage,
      comment,
      cal
    }
  }
}
</script>
<style scoped>
  .love {
    background-color: white;
    border-radius: 15px;
    border: 2px solid black;
    margin: 10% 25%;
  }

  .firstName, .secondName {
    margin: 2%;
    font-size: large;
  }

  button {
    font-size: x-large;
    border-radius: 10px;
    border: 2px solid black;
    color: black;
    cursor: pointer;
    height: 50px;
    margin: 4%;
  }

  button:hover {
    background-color: black;
    color: white;
    border: 2px solid white;
  }

  input {
    width: 25%;
    height: 30px;
    margin: 1%;
    border-radius: 8px;
    border: none;
    background-color: rgb(222, 221, 221);
    font-size: large;
  }

  #content {
    margin: 0 25%;
  }
</style>