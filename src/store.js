// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  journeys: [],
  journeytypes: [],
  journeystart: [],
  journeytype: [],
  leavingFrom: []
};

//to handle state
const getters = {
  journeystartfgdgdg: state => state.journeystart
};

//to handle actions
const actions = {
  getjourneys({ commit }) {
    axios.get("journeySingle.json").then(response => {
      let journeys = response.data;
      let journeystart = journeys.map(x => x.journeystart);
      console.log(journeystart);
      commit("SET_JOURNEYS", journeys);
    });
  }
};

//to handle mutations
const mutations = {
  SET_JOURNEYS(state, journeys) {
    state.journeys = journeys;
  }
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
