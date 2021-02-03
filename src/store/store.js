// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load Vuex
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    journeytypes: [
      {
        type: "single / return",
        price: 25
      },
      {
        type: "Multi journey",
        price: 20
      },
      {
        type: "Explorer passes",
        price: 15
      },
      {
        type: "Redeem your pass",
        price: 10
      }
    ],
    journeystarts: [
      {
        leavingFrom: "Glasgow Airport"
      },
      {
        leavingFrom: "Glasgow Anniesland"
      },
      {
        leavingFrom: "Glasgow Buchanan Bus Station"
      },
      {
        leavingFrom: "Glasgow Cathedral Steet"
      },
      {
        leavingFrom: "ect...."
      }
    ],
    journeydestinations: [
      {
        arrivingAt: "Inverness Montague Road"
      },
      {
        arrivingAt: "Inverness Tomnahurich"
      },
      {
        arrivingAt: "Inverary"
      },
      {
        arrivingAt: "Inveraray Brae"
      },
      {
        arrivingAt: "ect...."
      }
    ],
    journeystartdatesingle: [
      "2021-01-26",
      "2021-01-27",
      "2021-01-28",
      "2021-01-29"
    ],
    journeystarttimesingle: ["12:10:00", "12:20:00", "12:30:00", "12:40:00"],
    passengertypesingle: [
      "Adult",
      "Child",
      "60+ / Disabled NEC",
      "Student",
      "Young Scot 16-18 years",
      "Young Scot 19-25 years",
      "GCU Student",
      "Comp"
    ],
    journeyreturndatesingle: [
      "2021-01-26",
      "2021-01-27",
      "2021-01-28",
      "2021-01-29"
    ]
  },
  getters: {
    saleJourneytypes: state => {
      let saleJourneytypes = state.journeytypes.map(journeytype => {
        return {
          type: `**` + journeytype.type + `**`,
          price: journeytype.price
        };
      });
      return saleJourneytypes;
    }
  },
  mutations: {
    SET_JOURNEYS(state, journeys) {
      state.journeys = journeys;
      console.log(journeys);
    },
    reducePrice: state => {
      state.journeytypes.forEach(saleJourneytype => {
        saleJourneytype.price -= 1;
      });
    }
  },
  actions: {
    getjourneys({ commit }) {
      axios.get("journeySingle.json").then(response => {
        let journeys = response.data;
        commit("SET_JOURNEYS", journeys);
      });
    }
  }
});
