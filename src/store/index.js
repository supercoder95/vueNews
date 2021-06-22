import Vue from 'vue';
import { Vuex } from 'vuex';

Vue.use(Vuex);

new Vuex.store({
    state: {
        news: []
    }
});