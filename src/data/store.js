import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    apiLink: "https://flynn.boolean.careers/exercises/api/boolgram",

    profiles: [],
    profilesLoading: false,

    posts: [],
    postsLoading: false,
  },
  mutations: {
    SET_PROFILES(state, profiles) {
      state.profiles = profiles;
    },
    SET_POST(state, posts) {
      state.posts = posts;
    },
    SET_PROFILES_LOADING(state, isLoading) {
      state.profilesLoading = isLoading;
    },
    SET_POSTS_LOADING(state, isLoading) {
      state.postsLoading = isLoading;
    },
  },
  actions: {
    async fetchProfiles({ commit, rootState }) {
      commit("SET_PROFILES_LOADING", true);
      try {
        const res = await axios.get(`${rootState.apiLink}/profiles`);
        commit("SET_PROFILES", res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setTimeout(() => {
          commit("SET_PROFILES_LOADING", false);
        }, 1000);
      }
    },
    async fetchPost({ commit, rootState }) {
      commit("SET_POSTS_LOADING", true);
      try {
        const res = await axios.get(`${rootState.apiLink}/posts`);
        commit("SET_POST", res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setTimeout(() => {
          commit("SET_POSTS_LOADING", false);
        }, 1250);
      }
    },
  },
  getters: {
    getProfiles: (state) => state.profiles,
    getPosts: (state) => state.posts,
    areProfilesLoading: (state) => state.profilesLoading,
    arePostsLoading: (state) => state.postsLoading,
  },
});
