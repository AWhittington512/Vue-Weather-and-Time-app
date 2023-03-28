<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/services">Our Services</router-link></li>
        <li><router-link to="/customers">Our Customers</router-link></li>
      </ul>
    </nav>
  </template>
  <script>
  export default {
    name: 'NavBar'
  };
  </script>