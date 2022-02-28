import { defineStore } from "pinia";
import {toRaw} from 'vue';
import { TopArtist } from "@/interfaces/TopArtist";

const options = {
  headers: {
    'Authorization': process.env.VUE_APP_API_KEY
  }
}

// creating an interface for the state. We can also describe the properties for topArtists and filteredArtists and maintain across the app.
export interface Artists {
  topArtists: TopArtist[],
  filteredArtists: TopArtist[]
}

// Pinia is a state management library for Vue which allows us to share a state across components
// topArtists store is used for top artists and search or browse artists
export const useTopArtists = defineStore('topArtists-store', {
  // this is initial state object
  state: (): Artists => {
    return {
      topArtists: [],
      filteredArtists: []
    }
  },

  // getter functions mainly used to access a particular object of the state in components
  getters: {
    // this method will return the topArtists information from the state
    getTopArtists(state) {
      return state.topArtists;
    },

    // this method will return the filteredArtists information from the state 
    getFilteredArtists(state) {
      return state.filteredArtists;
    }
  },

  // this is good place to define business logic and make asynchronous calls
  actions: {
    // this is to fetch the topArtists data and limiting the length to 6
    async fetchTopArtists() {
      const url = `${process.env.VUE_APP_API_URL}` + 'top_artists';
      const response = await this.post(url, options);
      response.length = 6;
      this.topArtists = [...response];
    },

    // this method is to fetch the results searchArtists
    async searchArtists(value: string) {
      const url = `${process.env.VUE_APP_API_URL}` + 'search_artists?query=' + value;
      const response = await this.post(url, options);
      this.filteredArtists = [...response];
    },

    // this method is to fetch the results browseArtists
    async browseArtists(letter: string) {
      const url = `${process.env.VUE_APP_API_URL}` + 'browse_artists?letter=' + letter;
      const response = await this.post(url, options);
      this.filteredArtists = [...response];
    },

    getArtistsNames(response: TopArtist[]) {
      return response.map((item: TopArtist) => item.artist)
    },

    // this is a common post method for all the above methods which updates the topArtists and filteredArtists of the state
    // when we updated the state the components are automatically informed of these changes if we are subscribing
    async post(url: string, options: any) {
      const response = await fetch(url, options);
      try {
        const result = await response.json();
        return toRaw(result.response);
      } catch (err) {
        this.topArtists = [];
        console.error('Error fetching top artists:', err);
        return err;
      }
    }
  }
})