import { createStore } from 'vuex';
import {mockData} from './mock-data'
import uniqueId from "lodash.uniqueid";

export const store = createStore({
  state: {
    Variants: mockData.variants,
    Reviews: [],
    Cart: 0,
  },
  mutations: {
    addReview(state, review) {
      review.id = uniqueId("review-");
      state.Reviews.push(review);
    }
  },
  actions: {},
  modules: {},
});
