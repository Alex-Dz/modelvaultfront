/*import Vue from 'vue';*/
import { createStore } from 'vuex';

export const store =  createStore({
  state () {
    return {
      backURL: 'http://localhost:8081'
    }
  }
})
