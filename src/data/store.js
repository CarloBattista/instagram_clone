import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    apiLink: "https://flynn.boolean.careers/exercises/api/boolgram",

    profiles: [],
  },
  mutations: {
    SET_PROFILES(state, profiles) {
      state.profiles = profiles;
    },
    SET_POST(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchProfiles({ commit, rootState }) {
      try {
        const res = await axios.get(`${rootState.apiLink}/profiles`);
        commit("SET_PROFILES", res.data);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchPost({ commit, rootState }) {
      try {
        const res = await axios.get(`${rootState.apiLink}/posts`);
        commit("SET_POST", res.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    getProfiles: (state) => state.profiles,
    getPosts: (state) => state.posts,
  },
});
