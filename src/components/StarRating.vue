<template>
    <div class="star-rating">
      <font-awesome-icon
        v-for="(star, index) in 5"
        :key="index"
        :icon="['fas', 'star']"
        :class="{
          'star': true,
          'star--filled': index < userRating
        }"
        @click="rate(index + 1)"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userRating: 0
      };
    },
    methods: {
      rate(rating) {
        this.userRating = rating;
        this.$emit("rated", rating);
      }
    }
  };
  </script>
  
  <style scoped>
  .star-rating {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .star {
    cursor: pointer;
    color: #d3d3d3;
    font-size: 24px;
  }
  
  .star--filled {
    color: #ffc107;
  }
  </style>
  