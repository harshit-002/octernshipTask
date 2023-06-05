<template>
    <div>
      <h1>Welcome to My Chrome Extension</h1>
      <p>Enter your name:</p>
      <input v-model="name" />
      <button @click="submitName">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      submitName() {
        // Do something with the user's name
        console.log('Name submitted:', this.name);
        // Close the popup
        window.close();
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add custom CSS styles here */
  </style>
  