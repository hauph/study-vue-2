<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
        <li v-for="item in reviewList" :key="item.id">{{item.name}} gave this {{item.rating}} stars<br>"{{item.review}}"</li>
    </ul>
  </div>
</template>

<script>
import './ReviewList.scss'
export default {
  name: "ReviewList",
  props: {
      reviewList: {type: Array}
  }
};
</script>
