/*import Vue from 'vue';*/
import { createStore } from 'vuex';

export const store =  createStore({
  state () {
    return {
      backURL: 'http://190.24.17.213:8081'
    }
  }
})
