<template>
  <review-list :reviewList="Reviews" v-if="Reviews.length"></review-list>
  <form @submit.prevent="onSubmit" class="review-form">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model.lazy.trim="name" />
    <label for="review">Review:</label>
    <textarea id="review" v-model.lazy.trim="review"></textarea>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.lazy.trim="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <input class="button" type="submit" value="Submit" />
  </form>
</template>

<script>
import './ReviewList/ReviewList'
import './Review.scss'
import ReviewList from '../Review/ReviewList/ReviewList.vue';

export default {
  components: { ReviewList },
  name: "Review",
  data() {
    return {
      name: "",
      review: "",
      rating: null
    };
  },
  methods: {
    onSubmit() {
      const name = this.name;
      const review = this.review;
      const rating = this.rating;
      if (!name.length || !review.length || rating == null) {
        alert('Review is incomplete. Please fill out every field.')
        return false;
      }
      
      const reviewObj = {
        name,
        review,
        rating
      }

      this.$store.commit('addReview', reviewObj)
      this.name = '';
      this.review = '';
      this.rating = null;
    },
  },
  computed: {
    Reviews() {
      return this.$store.state.Reviews;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
