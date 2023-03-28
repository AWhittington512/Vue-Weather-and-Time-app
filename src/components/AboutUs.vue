<template>
    <div>
      <h1>About Us</h1>
      <p>MyCompany Inc. is an IT consulting company based in downtown Toronto.</p>
      <p>We specialize in Hardware products and SaaS.</p>
      <p>We're accountable and value-centric</p>

      <h3>Get in touch with us: </h3>
      <!-- <p>Our values include professionalism, integrity, and excellence.</p>
      <p>Our leadership team has over 20 years of combined experience in the IT industry.</p>
      <p>If you have any questions or would like to learn more about our services, please fill out the form below or visit our Contact Us page.</p> -->
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs'
  };
  </script>