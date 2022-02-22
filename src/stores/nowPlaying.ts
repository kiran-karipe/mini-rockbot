import { defineStore } from "pinia";
import {toRaw} from 'vue';
const API_URL = `https://api.rockbot.com/v3/engage/`;

export const useNowPlaying = defineStore('nowPlaying-store', {
  state: () => {
    return {
      nowPlaying: {},
      queue: [],
      fetching: false
    }
  },

  getters: {
    getNowPlaying(state) {
      return state.nowPlaying;
    },

    getQueue(state) {
      return state.queue;
    },

    isFetching(state) {
      return state.fetching;
    }
  },

  actions: {
    async fetchNowPlaying() {
      this.fetching = true;
      const url = `${API_URL}` + 'now_playing?queue=1';
      const options = {
        headers: {
          'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
        }
      }
      const response = await fetch(url, options);
      try {
        const result = await response.json();
        this.nowPlaying = toRaw(result.response.now_playing);
        this.queue = toRaw(result.response.queue);
      } catch (err) {
        this.nowPlaying = {};
        this.queue = [];
        console.error('Error loading now playing:', err);
        return err;
      }

      this.fetching = false;
    },

    async postVote(isLiked: boolean, pick_id: number) {
      this.fetching = true;
      let vote = 'vote_up';
      if (!isLiked) vote = 'vote_down';
      const url = `${API_URL}` + `${vote}` + '?pick_id=' + pick_id;
      const options = {
        headers: {
          'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
        }
      }
      const response = await fetch(url, options);
      try {
        const result = await response.json();
        this.nowPlaying = toRaw(result.response.now_playing);
        this.queue = toRaw(result.response.queue);
      } catch (err) {
        this.nowPlaying = {};
        this.queue = [];
        console.error('Error loading now playing:', err);
        return err;
      }

      this.fetching = false;
    }
  }
})