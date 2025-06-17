import { defineStore } from 'pinia'
import axios from 'axios'
import { baseURL } from '../config/baseURL'


export const useAuthStore = defineStore('counter', {
 state: () => ({
  user: null,
    token: localStorage.getItem('token')
}),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async fetchUser(){
     
          try {
            const response = await axios.get(baseURL+"theo/api/admin/me",{
              headers: {
                'Accept' : 'application/json',
                Authorization: `Bearer ${this.token}`, 
              },
            });
            if(response.status == 200){
              return response.data
            }
            console.log(response)
          } catch (error) {
            console.error(error)
          }
    }
  },
})