<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This is the home page of our website.</p>
    <p>Current date and time: {{ currentDate }}</p>
    <p>Current temperature in Paris, Ontario: {{ currentTemp }} °C</p>
 
    <h3>Essential Links</h3>
    <ul>
      <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/services">Our Services</router-link></li>
        <li><router-link to="/customers">Our Customers</router-link></li>
    </ul>

  </div>
</template>

<!-- <script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}



</script> -->

<script>
import { ref } from 'vue';
import { format } from 'date-fns';

export default {
  name: 'HelloWorld',
  setup() {
    const currentDate = ref(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
    const currentTemp = ref(null);

    const getTemperature = async () => {
      const apiKey = 'YOUR_API_KEY_HERE';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris,CA&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        currentTemp.value = data.main.temp;
      } catch (error) {
        console.error(error);
      }
    };

    getTemperature();

    return {
      currentDate,
      currentTemp
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
