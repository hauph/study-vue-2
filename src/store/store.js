import { createStore } from 'vuex';
import {mockData} from './mock-data'
// import uniqueId from "lodash.uniqueid";

export const store = createStore({
  state: {
    Variants: mockData.variants,
    Reviews: []
  },
  mutations: {
    
  },
  actions: {},
  modules: {},
});
