import { defineStore } from "pinia";
import {toRaw} from 'vue';
const API_URL = `https://api.rockbot.com/v3/engage/`;
const options = {
  headers: {
    'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
  }
};

export const useMiniRockbot = defineStore('miniRockbot-store', {
  state: () => {
    return {
      nowPlaying: {},
      queue: []
    }
  },

  getters: {
    getNowPlaying(state) {
      return state.nowPlaying;
    },

    getQueue(state) {
      return state.queue;
    }
  },

  actions: {
    fetchNowPlaying() {
      const url = `${API_URL}` + 'now_playing?queue=1';
      this.post(url, options);
    },

    postVote(isLiked: boolean, pick_id: number) {
      let vote = 'vote_up';
      if (!isLiked) vote = 'vote_down';
      const url = `${API_URL}` + `${vote}` + '?pick_id=' + pick_id;
      this.post(url, options);
    },

    getArtist(artist_id: number) {
      const url = `${API_URL}` + 'request_artist?artist_id=' + artist_id;
      this.post(url, options)
    },

    async post(url: string, options: any) {
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
    }
  }
})