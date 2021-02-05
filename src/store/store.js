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
    passengertypes: [
      {
        type: "Adult"
      },
      {
        type: "Child"
      },
      {
        type: "60+ / Disabled NEC"
      },
      {
        type: "Student"
      },
      {
        type: "Young Scot 16-18 years"
      },
      {
        type: "Young Scot 19-25 years"
      },
      {
        type: "GCU Studentult"
      },
      {
        type: "Comp"
      }
    ],

    selectedJourneyType: "single / return"
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
    updateSelectedJourneyType(state, selectedJourneyType) {
      state.selectedJourneyType = selectedJourneyType;
    }
  },
  actions: {
    reducePrice: context => {
      setTimeout(function() {
        context.commit("reducePrice");
      }, 2000);
    }
  }
});
