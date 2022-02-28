import { defineStore } from "pinia";
import {toRaw} from 'vue';
import * as nowPlaying from '../__mocks__/now-playing.json';

const API_URL = `https://api.rockbot.com/v3/engage/`;
const options = {
  headers: {
    'Authorization': '2ab742c917f872aa88644bc8f995e03159b2'
  }
};

// creating an interface for the state. We can also describe the properties for nowPlaying and queue and maintain across the app.
export interface State {
  nowPlaying: any;
  queue: [];
}

// Pinia is a state management library for Vue which allows us to share a state across components
// miniRockbot store is common store used over the application.
// this store mainly contains the state of nowPlaying and the queue.
export const useMiniRockbot = defineStore('miniRockbot-store', {

  // this is initial state object
  state: (): State => {
    return {
      nowPlaying: {},
      queue: []
    }
  },

  // getter functions mainly used to access a particular object of the state in components
  getters: {
    // this method will return the nowPlaying information from the state
    getNowPlaying(state) {
      return state.nowPlaying;
    },

    // this method will return the queue information from the state 
    getQueue(state) {
      return state.queue;
    },
  },

  // this is good place to define business logic and make asynchronous calls
  actions: {
    // this is to fetch the nowplaying and queue data
    fetchNowPlaying() {
      const url = `${API_URL}` + 'now_playing?queue=1';
      this.post(url, options);
    },

    // this method is post a vote
    postVote(isLiked: boolean, pick_id: number) {
      let vote = 'vote_up';
      if (!isLiked) vote = 'vote_down';
      const url = `${API_URL}` + `${vote}` + '?pick_id=' + pick_id;
      this.post(url, options);
    },

    // this method is to get a song from the selected artist and add it to the queue
    getArtist(artist_id: number) {
      const url = `${API_URL}` + 'request_artist?artist_id=' + artist_id;
      this.post(url, options)
    },

    // this is a common post method for all the above methods which updates the nowPlaying and queue of the state
    // when we updated the state the components are automatically informed of these changes if we are subscribing
    async post(url: string, options: any) {
      const response = await fetch(url, options);
      try {
        let result = await response.json();
        if (!result.response.now_playing) {
          result = nowPlaying;
        }
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