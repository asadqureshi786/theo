import { defineStore } from 'pinia'
import axios from 'axios'
import { baseURL } from '../config/baseURL'


export const useAuthStore = defineStore('counter', {
 state: () => ({
  user: null,
}),

  getters: {
    token: () => localStorage.getItem('token'),
  },
// could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async fetchUser(){
      
          try {
            
            const response = await axios.get(baseURL+"theo/api/me",{
              headers: {
                'Accept' : 'application/json',
                Authorization: `Bearer ${this.token}`, 
              },
            });
            if(response.status == 200){
              this.user = response.data;
              return response.data;
            }
          } catch (error) {
            console.error(error)
          }
    }
  },
})