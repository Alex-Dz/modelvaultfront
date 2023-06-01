/*import Vue from 'vue';*/
import { createStore } from 'vuex';

export const store =  createStore({
  state () {
    return {
      backURL: 'https://modelvault-api.herokuapp.com'
    }
  }
})
